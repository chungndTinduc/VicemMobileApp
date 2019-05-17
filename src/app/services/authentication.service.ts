import { Injectable, NgModule } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Platform, AlertController,LoadingController } from '@ionic/angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { tap, catchError } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpModule } from '@angular/http';
import { environment } from 'src/environments/environment';
const TOKEN_KEY = 'auth-token';
const CURRENT_USER = 'current-user';
@Injectable({
  providedIn: 'root'
})

@NgModule({
  imports: [
    HttpModule,
    HttpClient
  ]
})
export class AuthenticationService {
  public currentUser: any;
  urlServer = environment.url;
  user = [];
  // CurrentUser=[];
  authenticationState = new BehaviorSubject(false);
  loading:any;
  constructor(private storage: Storage, 
    private plt: Platform,
    private http:HttpClient,private helper:JwtHelperService,
    private alertController:AlertController,
    public loadingController: LoadingController
    ) {
    this.plt.ready().then(() => {
      this.checkToken();
    });
   }

   //các hàm đăng ký service
  getSpecialData() {
    return this.get('api/nguoidung/test',null);
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
  getVanBanDenByID(data) {
    return this.get('api/vanbanden/GetByID',data);
  }

  getVanBanDi(data) {
    return this.get('api/vanbandi/GetDanhSachVanBanDi',data);
  }
  getVanBanDiByID(data) {
    return this.get('api/vanbandi/GetByID',data);
  }
  //các hàm đăng ký service
  postVanBanDen(data) {
    return this.post('api/vanbanden/test',data);
  }
  
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
        }
        else{
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
    return this.http.post(`${this.urlServer}api/NguoiDung/Login`, credentials)
      .pipe(
        tap(res => {
          if(res['Token']==""){
           return this.showAlert(res['Message']);
          }
          debugger;
          localStorage.setItem(TOKEN_KEY, res['Token']);
          var userStr  = JSON.stringify( res['Data'])
          localStorage.setItem(CURRENT_USER,userStr);
          this.user = this.helper.decodeToken(res['Token']);
          // this.CurrentUser=res['Data'];
          this.authenticationState.next(true);
        }),
        catchError(e => {
          debugger;
          this.showAlert("Lỗi mẹ rồi");
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

  async post(api, data) {
    const loading = await this.loadingController.create({
      spinner: null,
      duration: 5000,
      message: 'Please wait...',
      translucent: true,
      cssClass: 'custom-class custom-loading'
      });
      await loading.present();
    return new Observable((observer) => { 
      var token = this.getToken(); 
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
      },
      () => loading.dismiss());

    });  
  }

   get(api, data) {
    this.presentLoadingWithOptions();
    return new Observable((observer) => {    
      var token = this.getToken(); 
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
      },
       () => this.loading.dismiss()
      );
      
    });    
    
  }
  async presentLoadingWithOptions() {
     this.loading = await this.loadingController.create({
      spinner: null,
      duration: 5000,
      message: 'Please wait...',
      translucent: true,
      cssClass: 'custom-class custom-loading'
    });
    return await this.loading.present();
  }
}
