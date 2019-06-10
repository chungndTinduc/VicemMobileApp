import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController,Events } from '@ionic/angular';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-vanbandenflowchart',
  templateUrl: './vanbandenflowchart.page.html',
  styleUrls: ['./vanbandenflowchart.page.scss'],
})
export class VanbandenflowchartPage implements OnInit {
  public dataquery ={VanBanID:0};
  public datahtml:any
  constructor(
    private modalController: ModalController,
    private navParams: NavParams,
   public authService:AuthenticationService
  ) {
    this.dataquery.VanBanID=this.navParams.get('id');
   }

  ngOnInit() {
    this.load();
  }
  load(){
     this.authService.getluongluanchuyenvanbanden(this.dataquery).subscribe(res =>{
    this.datahtml = res["Data"];
    document.getElementById("luonglc").innerHTML=  this.datahtml;
  });
  }
  async closePopup(){
    this.modalController.dismiss();
}

}
