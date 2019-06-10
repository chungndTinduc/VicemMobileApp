import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder,ReactiveFormsModule  } from '@angular/forms';
import { NavParams, ModalController,Events } from '@ionic/angular';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-capnhattrangthaivb',
  templateUrl: './capnhattrangthaivb.page.html',
  styleUrls: ['./capnhattrangthaivb.page.scss'],
})
export class CapnhattrangthaivbPage implements OnInit {

  public dataquery ={VanBanID:0};
  credentialsForm: FormGroup;
  vanbanden:any
  constructor(
    private navParams: NavParams,
    private modalController: ModalController,   
    private formBuilder: FormBuilder,    
    private authService: AuthenticationService,
  ) {     this.dataquery.VanBanID=this.navParams.get('id');}


  ngOnInit() {
  }
  async closePopup(){
    this.modalController.dismiss();
}

async closePopupupdate(){
this.authService.getVanBanDenByID(this.dataquery).subscribe(res =>{
  this.vanbanden = res["Data"];  
  this.modalController.dismiss(this.vanbanden);
 });
}
}
