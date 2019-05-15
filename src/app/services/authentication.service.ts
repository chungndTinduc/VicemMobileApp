import { Injectable, NgModule } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Platform, AlertController,LoadingController } from '@ionic/angular';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { tap, catchError } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpModule } from '@angular/http';
const TOKEN_KEY = 'auth-token';
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

  url = environment.url;
  user = [];
  CurrentUser=[];
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
  getVanBanDen() {
    return this.get('api/vanbanden/test',null);
  }
  //các hàm đăng ký service
  postVanBanDen(data) {
    return this.post('api/vanbanden/test',data);
  }
  
// hàm base authen
   checkToken() {
      let token =  localStorage.getItem(TOKEN_KEY);
      if (token) {
        let decoded = this.helper.decodeToken(token);
        let isExpired = this.helper.isTokenExpired(token);
        if(!isExpired)
        {
          this.user = decoded;
          this.authenticationState.next(true);
        }
        else{
          localStorage.removeItem(TOKEN_KEY);
        }
        
      }
  }
  getToken() {
    return localStorage.getItem(TOKEN_KEY)!== null ? localStorage.getItem(TOKEN_KEY) : '';
  }
  register(credentials) {
    return this.http.post(`${this.url}/api/register`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  login(credentials) {
    return this.http.post(`${this.url}api/NguoiDung/Login`, credentials)
      .pipe(
        tap(res => {
          if(res['Token']==""){
           return this.showAlert(res['Message']);
          }
          debugger;
          localStorage.setItem(TOKEN_KEY, res['Token']);
          this.user = this.helper.decodeToken(res['Token']);
          this.CurrentUser=res['Data'];
          this.authenticationState.next(true);
          
        }),
        catchError(e => {
          this.showAlert(e.error.msg);
          throw new Error(e);
        })
      );
  }
 
  logout() {
    localStorage.removeItem(TOKEN_KEY);
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
     this.http.post((api.indexOf('http') > -1 ? '' : this.url) + api, data, {headers:headers}).subscribe((res: any) => {       
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
      this.http.get((api.indexOf('http') > -1 ? '' : this.url) + api, {params:data,headers:headers}).subscribe((res: any) => {       
        debugger;
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
//   async hideLoading() {
//    return await this.loading.dismiss();
//  }
}
