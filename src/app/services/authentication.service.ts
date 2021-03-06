import { Injectable, NgModule } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Platform, AlertController,LoadingController } from '@ionic/angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { tap, catchError } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpModule } from '@angular/http';
import { environment } from 'src/environments/environment';
import { MenuController,ToastController  } from '@ionic/angular';
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
  constructor(private storage: Storage, private plt: Platform, private http:HttpClient,private helper:JwtHelperService, private alertController:AlertController, public loadingController: LoadingController, private menuCtrl: MenuController, private utility:Utility,private toastController: ToastController)
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

   getvanbandiykien(data){
    return this.get('api/VanBanDi/GetYKiebByVanBanID',data);
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
   //lấy tất cả đơn vị
   getAllDonVi(){
    return this.get('api/DonVi/GetDonViAll',null);
   }
   //lấy người dùng xử lý
   getnguoiDungXuLy(){
    return this.get('api/NguoiDung/GetnguoiDungXuLy',null);
   }
   // ý kiến văn bản đến
   postVanBanDenykien(data) {
    return this.post('api/vanbanden/YKien',data);
  }
  // ý kiến văn bản đến
  postVanBanDiykien(data) {
    return this.post('api/vanbandi/ykien',data);
  }
// cập nhật trạng thái cá nhân
  postVanBanDenytrangthaicanhan(data) {
    return this.post('api/vanbanden/HoanThanh',data);
  }
  // cập nhật trạng thái văn bản
  postVanBanDenytrangthaivb(data) {
    return this.post('api/vanbanden/Finish',data);
  }
  // lấy luồng luân chuyển văn bản đến
  getluongluanchuyenvanbanden(data){
    return this.get('api/vanbanden/LuongLuanChuyenVanBan',data);
   }
   //lấy luồng luân chuyển văn bản đi
   getluongluanchuyenvanbandi(data){
    return this.get('api/vanbandi/GetLuongLuanChuyen',data);
   }

   getlanhdaotrinhduthao(data){
    return this.get('api/VanBanDuThao/GetlanhDaotrinh',data);
   }
  //các hàm đăng ký service
  postVanBanDen(data) {
    return this.post('api/vanbanden/test',data);
  }
  //trình văn bản dự thảo
    postTrinhvanbanduthao(data) {
      return this.post('api/VanBanDuThao/TrinhKy',data);
    }
  //kết thúc bản dự thảo
    postketthucbanduthao(data) {
      return this.post('api/VanBanDuThao/Finish',data);
  }
  //chuyển phát hành văn bản dự thảo
  postchuyenphathanhduthao(data) {
        return this.post('api/VanBanDuThao/ChuyenPhatHanh',data);
      }
  //duyệt dự thảo
  postapprovedduthao(data) {
    return this.post('api/VanBanDuThao/Approved',data);
  }
  // từ chối dự thảo
   postrejectduthao(data) {
    return this.post('api/VanBanDuThao/reject',data);
  }

  //lấy danh sách công việc
  getDanhSachCongViec(data){
    return this.get('api/CongViec/getDanhDachCongViec',data);
  }
  //thêm mới & sửa công việc
  postCongViec(data){
    return this.post('api/CongViec/AddOrUpdate',data);
  }
  //Lấy chi tiết công việc
  getCongViec(data){
    return this.get('api/CongViec/getByID',data);
  }
  //Lấy chi danh mục tên công việc
  getAllDanhMucCongViec(data){
    return this.get('api/CongViec/getAllDanhMucGiaTri',data);
  }
  //Lấy thành phần tham gia công việc
  getThanPhanThamGiaCongViec(data){
    return this.get('api/CongViec/GetThanhPhanThamGiaCongViec',data);
  }
  //Lấy danh sách văn bản dự thảo thuộc công việc
  loadVanBanDuThao(data){
    return this.get('api/CongViec/GetVanBanDuThao',data);
  }
   //Lấy danh sách ý kiến xử lý công việc
   loadYKienXuLy(data){
    return this.get('api/CongViec/GetYKienXuLy',data);
  }
  //Lấy danh sách thông tin gia hạn công việc
  loadThongTinGiaHan(data){
    return this.get('api/CongViec/GetListCongViecGiaHan',data);
  }
  //Lấy danh sách thông tin gia hạn công việc
  xoaCongViec(data){
    return this.get('api/CongViec/Delete',data);
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
          this.presentToastFail("Đã có lỗi xảy ra.");
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

  async showConfirm(msg) {
      let choice
      const alert = await this.alertController.create({
          header: 'Thông báo',
          message: msg,
          buttons: [{
              text: 'Không đồng ý',
              handler: () => {
                  alert.dismiss(false)
                  return false
              }
          }, {
              text: 'Đồng ý',
              handler: () => {
                  alert.dismiss(true);
                  return false;
              }
          }]
      });

      await alert.present();
      await alert.onDidDismiss().then((data) => {
          choice = data
      })
      return choice
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
        this.presentToastFail('Đã có lỗi xảy ra.');
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
        this.presentToastFail('Đã có lỗi xảy ra.');
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
    if(this.countLoadding > 1) return;
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
    await this.delay(300);
    try {
      this.countLoadding -= 1;
      if(this.countLoadding === 0)
      { 
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

  async presentToastSuccess(message) {
    const toast = await this.toastController.create({
      message: message,
      duration:3000,
      position: 'top',
      color:'success'
    });
    toast.present();
  }
  
  async presentToastFail(message) {
    const toast = await this.toastController.create({
      message: message,
      duration: 4000,
      position: 'top',
      color:'danger'
    });
    toast.present();
  }

//================================================ end base function===============================================
}
