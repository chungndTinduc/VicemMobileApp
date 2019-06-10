import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder,ReactiveFormsModule  } from '@angular/forms';
import { NavParams, ModalController,Events } from '@ionic/angular';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-capnhattrangthaicanhan',
  templateUrl: './capnhattrangthaicanhan.page.html',
  styleUrls: ['./capnhattrangthaicanhan.page.scss'],
})
export class CapnhattrangthaicanhanPage implements OnInit {
  public dataquery ={VanBanID:0,ID:0};
  credentialsForm: FormGroup;
  vanbanden:any
  constructor(
    private navParams: NavParams,
    private modalController: ModalController,   
    private formBuilder: FormBuilder,    
    private authService: AuthenticationService,
  ) {     
    this.dataquery.VanBanID=this.navParams.get('id');
    this.dataquery.ID=this.navParams.get('id');
  }

  ngOnInit() {
    this.credentialsForm = this.formBuilder.group({
      VanBanID: this.navParams.get('id'),
      ID: this.navParams.get('id'),
      TrangThaiID:[],  
    });  
  }

  onSubmit() {
    this.authService.postVanBanDenytrangthaicanhan(this.credentialsForm.value).subscribe(res => {
      this.closePopupupdate();
    });
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
