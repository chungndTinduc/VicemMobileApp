import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { MenuController,Events  } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  credentialsForm: FormGroup;
  constructor(
    private events: Events,
    private authService: AuthenticationService,
    private formBuilder: FormBuilder,
    public menuCtrl: MenuController
    ) { }
    ionViewDidEnter() {
      this.menuCtrl.enable(false);
    }
  ngOnInit() {
    this.credentialsForm = this.formBuilder.group({
      userName:['',[Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  onSubmit() {
    this.authService.login(this.credentialsForm.value).subscribe(res => {
      console.log('login thanh công.');
      this.events.publish('user:login');
    });
  }
 
  register() {
    this.authService.register(this.credentialsForm.value).subscribe(res => {
      this.authService.login(this.credentialsForm.value).subscribe();
    });
  }
 
}
