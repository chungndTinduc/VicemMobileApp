import { Injectable, NgModule } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Platform, AlertController } from '@ionic/angular';
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
  user = null;
  authenticationState = new BehaviorSubject(false);

  constructor(private storage: Storage, 
    private plt: Platform,
    private http:HttpClient,private helper:JwtHelperService,
    private alertController:AlertController,
    // private translate : TranslateService
    ) {
    this.plt.ready().then(() => {
      this.checkToken();
    });
   }

   //các hàm đăng ký service
  getSpecialData() {
    return this.get('api/nguoidung/test',null);
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
          localStorage.setItem(TOKEN_KEY, res['Token']);
          this.user = this.helper.decodeToken(res['Token']);
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

  post(api, data) {
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
      });

    });  
  }

  get(api, data) {
    return new Observable((observer) => {    
      var token = this.getToken(); 
      let headers = new HttpHeaders();
      headers = headers.set('Content-Type', 'application/json; charset=utf-8').set('Authorization',token);
      
      this.http.get((api.indexOf('http') > -1 ? '' : this.url) + api, {params:data,headers:headers}).subscribe((res: any) => {       
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
      });

    });    
  }
}
