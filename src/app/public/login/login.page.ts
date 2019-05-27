import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  credentialsForm: FormGroup;
  constructor(private authService: AuthenticationService,private formBuilder: FormBuilder,
    public menuCtrl: MenuController
    ) { }
    ionViewDidEnter() {
      this.menuCtrl.enable(false);
    }
  ngOnInit() {
    this.credentialsForm = this.formBuilder.group({
      // email: ['', [Validators.required, Validators.email]],
      userName:[''],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  onSubmit() {
    this.authService.login(this.credentialsForm.value).subscribe();
  }
 
  register() {
    this.authService.register(this.credentialsForm.value).subscribe(res => {
      // Call Login to automatically login the new user
      this.authService.login(this.credentialsForm.value).subscribe();
    });
  }
 
}
