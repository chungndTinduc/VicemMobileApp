import { Injectable, NgModule } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Platform, AlertController,LoadingController } from '@ionic/angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { tap, catchError } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpModule } from '@angular/http';
import { environment } from 'src/environments/environment';
import { MenuController } from '@ionic/angular';
import{Utility} from 'src/app/providers/Utility';
const TOKEN_KEY = 'auth-token';
const CURRENT_USER = 'current-user';
@Injectable({
  providedIn: 'root'
})

@NgModule({
  imports: [
    HttpModule
  ]
})
export class AuthenticationService {
  public currentUser: any;
  urlServer = environment.url;
  user = [];
  TenHienThi:string;
  countLoadding = 0;
  // CurrentUser=[];
  authenticationState = new BehaviorSubject(false);
  loading:any;
  // alertController:any;
  constructor(private storage: Storage, private plt: Platform, private http:HttpClient,private helper:JwtHelperService, private alertController:AlertController, public loadingController: LoadingController, private menuCtrl: MenuController, private utility:Utility)
    {
    this.plt.ready().then(() => {
      this.checkToken();
    });
   }

   //==========================================*********các hàm đăng ký service******* ==================================================

  //count Van bản đến trang chủ
  getVanBanDenCounHome() {
    return this.get('api/vanbanden/GetCountTotalByNguoiDung',null);
  }
  //các hàm đăng ký service
  getVanBanDen(data) {
    return this.get('api/vanbanden/GetAllVanBan',data);
  }
  // văn bản đên chưa xử lý
  getVanBanDenChuaXuLy(data) {
    return this.get('api/vanbanden/GetVanBanDenTheoTrangThainguoiDung',data);
  }
  // văn bản đên chưa đọc
  getVanBanDenChuaDoc(data) {
    return this.get('api/vanbanden/getVanBanDenChuaDoc',data);
  }
  // văn bản đến xử lý chính
  getVanBanDenXuLyChinh(data) {
    return this.get('api/vanbanden/GetVanBanDenNguoiXuLy',data);
  }
  getYKienVanBanDen(data) {
    return this.get('api/vanbanden/GetYKienByVanBanID',data);
  }
  getVanBanDenByID(data) {
    return this.get('api/vanbanden/GetByID',data);
  }
  // danh sách văn bản đi
  getVanBanDi(data) {
    return this.get('api/vanbandi/GetDanhSachVanBanDi',data);
  }
  // danh sách van bản đi chưa đọc
  getVanBanDichuadoc(data) {
    return this.get('api/vanbandi/GetDanhSachVanBanDiChuaDoc',data);
  }
  //chi tiết văn bản đi
  getVanBanDiByID(data) {
    return this.get('api/vanbandi/GetByID',data);
  }
  // danh sách văn bản dự thảo
   getVanBanDuThao(data){
    return this.get('api/vanbanduthao/GetDuThaoVanBan',data);
   }
   // văn bản dự thảo chưa xư lý
   getVanBanDuThaoChuaXuLy(data){
    return this.get('api/vanbanduthao/GetDuThaoVanBanChuaXuLy',data);
   }
   // văn bản dự thảo Dang xư lý
   getVanBanDuThaoDangXuLy(data){
    return this.get('api/vanbanduthao/GetDuThaoVanBanDangXuLy',data);
   }
   // văn bản dự thảo Da xư lý
   getVanBanDuThaoDaXuLy(data){
    return this.get('api/vanbanduthao/GetDuThaoVanBanDaXuLy',data);
   }
   // danh sách văn bản dự thảo
   getVanBanDuThaobyID(data){
    return this.get('api/vanbanduthao/GetByID',data);
   }
   // danh sách danh bạ
   getDanhBa(data){
    return this.get('api/NguoiDung/getnguoiDungDanhBa',data);
   }
   // lấy thông tin chi tiết người dùng
   getNguoiDungByID(data){
    return this.get('api/NguoiDung/GetByID',data);
   }
   // Lich lam viec
   getLichLamViec(data){
    return this.get('api/LichlamViec/getLichCongtacTuan',data);
   }
   // lấy lịc làm việc trang chủ
   getLichLamViecHome(){
    return this.get('api/LichlamViec/getLichCongtacHome',null);
   }
   // lấy report công việc
   getCongViecDashboardHome(){
    return this.get('api/CongViec/reportDashboard',null);
   }
   getVanBanDuThaoHome(){
    return this.get('api/VanBanDuThao/GetDuThaoVanBanHome',null);
   }
  //các hàm đăng ký service
  postVanBanDen(data) {
    return this.post('api/vanbanden/test',data);
  }
  //lấy danh sách công việc
  getDanhSachCongViec(data){
    return this.get('api/CongViec/getDanhDachCongViec',data);
  }
  
//============================================================*********End danh sach dang ky service****======================= 



//===============================================================Base function==================================================  
// hàm base authen
checkToken() {
      let token =  localStorage.getItem(TOKEN_KEY);
      let user = localStorage.getItem(CURRENT_USER)
      if (token && user) {
        let decoded = this.helper.decodeToken(token);
        let isExpired = this.helper.isTokenExpired(token);
        if(!isExpired)
        {
          this.user = decoded;
          this.authenticationState.next(true);
          let obj = JSON.parse(localStorage.getItem(CURRENT_USER));
          this.currentUser = obj;
          this.currentUser.QuyenHanEnum = this.utility.checkPermisstions(this.currentUser.QuyenHan);
        }
        else
        {
          localStorage.removeItem(TOKEN_KEY);
          localStorage.removeItem(CURRENT_USER);
        }
      } 
  }
  getToken() {
    return localStorage.getItem(TOKEN_KEY)!== null ? localStorage.getItem(TOKEN_KEY) : '';
  }
  register(credentials) {
    return this.http.post(`${this.urlServer}/api/register`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  login(credentials) {
    this.presentLoadingWithOptions('Xin chờ đang xác thực..');
    return this.http.post(`${this.urlServer}api/NguoiDung/Login`, credentials)
      .pipe(
        tap(res => {
          this.dismissLoadding();
          if(res['Token']==""){
           return this.showAlert(res['Message']);
          }
          localStorage.setItem(TOKEN_KEY, res['Token']);
          var userStr  = JSON.stringify( res['Data'])
          localStorage.setItem(CURRENT_USER,userStr);
          this.user = this.helper.decodeToken(res['Token']);
          this.currentUser=res['Data'];
          this.TenHienThi=this.currentUser.TenHienThi;
          this.menuCtrl.enable(true)
          this.authenticationState.next(true);
        }),
        catchError(e => {
          this.dismissLoadding();
          this.showAlert("Đã có lỗi xảy ra.");
          throw new Error(e);
        })
      );
  }

  logout() {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(CURRENT_USER);
    this.authenticationState.next(false);
  }
  isAuthenticated() {
    return this.authenticationState.value;
  }

  showAlert(msg) {
    let alert = this.alertController.create({
      message: msg,
      header: 'Thông báo',
      buttons: ['OK']
    });
    alert.then(alert => alert.present());
  }

   post(api, data) {
      this.presentLoadingWithOptions(0);
   
    return new Observable((observer) => { 
      var token = this.getToken(); 
      if(!token){
        this.logout();
      }
      let headers = new HttpHeaders();
      headers = headers.set('Content-Type', 'application/json; charset=utf-8').set('Authorization',token);
      this.http.post((api.indexOf('http') > -1 ? '' : this.urlServer) + api, data, {headers:headers}).subscribe((res: any) => {     
        
        observer.next(res);
        observer.complete();
      }, (err) => {

        if(err.status === 403){
          this.logout();
        }
        observer.next({
          StatusCode: 1,
          Err: err
        });
        observer.complete();
        this.dismissLoadding();
        this.showAlert('Đã có lỗi xảy ra.');
      },
        ()=>{
          this.dismissLoadding();
        }
      );
    });  
  }

   get(api, data) {
    this.presentLoadingWithOptions(0);
    return new Observable((observer) => {    
      var token = this.getToken();
      if(!token){
        this.logout();
      } 
      let headers = new HttpHeaders();
      headers = headers.set('Content-Type', 'application/json; charset=utf-8').set('Authorization',token);
      this.http.get((api.indexOf('http') > -1 ? '' : this.urlServer) + api, {params:data,headers:headers}).subscribe((res: any) => {       
        observer.next(res);
        observer.complete();
      
      }, (err) => {

        if(err.status === 403){
          this.logout();
        }
        observer.next({
          StatusCode: 1,
          Err: err
        });
        observer.complete();
        this.dismissLoadding();
        this.showAlert('Đã có lỗi xảy ra.');
        return;
        },
        ()=>{
          this.dismissLoadding();
        }
      );
      
    });    
    
  }
  async presentLoadingWithOptions(message) {
    this.countLoadding = this.countLoadding +1;
     if(!message){
         message =  'Xin chờ đang lấy dữ liệu..';
    }
    console.log('presentLoading ' + this.countLoadding);
    if(this.countLoadding > 1) return;
     console.log('present');
     this.loading = await this.loadingController.create({
      spinner: null,
      duration: 220000,
      message: message,
      translucent: true,
      cssClass: 'custom-class custom-loading'
    });
    return await this.loading.present();
    
  }

async dismissLoadding()
  {
    await this.delay(500);
    try {
      this.countLoadding -= 1;
      console.log('dismissLoadding ' + this.countLoadding);
      if(this.countLoadding === 0)
      { 
        console.log('dismissed..');
        this.loading.dismiss();
      }
    }
    catch(e) {
      console.log(e);
    }
  }

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }
//================================================ end base function===============================================
}
