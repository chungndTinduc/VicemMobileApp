import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController,Events } from '@ionic/angular';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-congviecform',
  templateUrl: './congviecform.page.html',
  styleUrls: ['./congviecform.page.scss'],
  providers: []
})
export class CongviecformPage implements OnInit {
congviecId = null;
credentialsForm: FormGroup;
tags = ['Ionic', 'Angular', 'TypeScript'];
  constructor(private navParams: NavParams,
    private modalController: ModalController,   
    private formBuilder: FormBuilder,    
    private authService: AuthenticationService,
    private events: Events) { }

  ngOnInit() {
    this.congviecId = this.navParams.get('id');
    this.credentialsForm = this.formBuilder.group({
      Ten:['',[Validators.required, Validators.minLength(3)]],
      // password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  closePopup(){
    this.modalController.dismiss();
  }
  onSubmit() {
    this.authService.login(this.credentialsForm.value).subscribe(res => {
      console.log('login thanh công.');
      this.events.publish('user:login');
    });
  }

  verifyTag(str: string): boolean{
    return str !== 'ABC' && str.trim() !== '';
  }
 
}
