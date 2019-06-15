import { Component, OnInit,ElementRef, ViewChild } from '@angular/core';
 import { AuthenticationService } from 'src/app/services/authentication.service';
 import { Response } from 'selenium-webdriver/http';
 import { IonSegment, NavController } from '@ionic/angular';
import * as Highcharts from 'highcharts';
import {IonSlides} from '@ionic/angular';
import { VanbandenPage } from 'src/app/members/vanbanden/vanbanden.page';
import { VanbandenchuadocPage } from 'src/app/members/vanbanden/vanbandenchuadoc/vanbandenchuadoc.page';
import { VanbandenchuaxulyPage } from 'src/app/members/vanbanden/vanbandenchuaxuly/vanbandenchuaxuly.page';
import { NavParams, ModalController,Events } from '@ionic/angular';
const ZOOM_STEP: number = 0.25;
const DEFAULT_ZOOM: number = 1;
@Component({
  selector: 'app-viewfile',
  templateUrl: './viewfile.page.html',
  styleUrls: ['./viewfile.page.scss'],
})
export class ViewfilePage implements OnInit {
  //pdfSrc: string = 'http://vanban.vicem.vn/ajaxUpload/1/2019/cvdi-1088.pdf';  
  filelink:string;
  public pdfZoom: number = DEFAULT_ZOOM;
  @ViewChild(IonSlides) slides: IonSlides;
  @ViewChild("IonSegment") segments ;
  page: any;
  checktypefile: boolean=true
  tab1Root = VanbandenPage;
  tab2Root = VanbandenchuadocPage;
  tab3Root = VanbandenchuaxulyPage;
  loaded:   boolean = false;
  tabIndex: number  = 0;

  constructor(public navCtrl: NavController,private navParams: NavParams,  private modalController: ModalController,  
    ) {

  }
  public zoomIn() {
    this.pdfZoom += ZOOM_STEP;
}

public zoomOut() {
    if (this.pdfZoom > DEFAULT_ZOOM) {
        this.pdfZoom -= ZOOM_STEP;
    }
}

public resetZoom() {
    this.pdfZoom = DEFAULT_ZOOM;
}
  ngOnInit() {
    this.filelink="http://vanban.vicem.vn/"+ this.navParams.get('filelink');
    if(this.filelink.lastIndexOf((".pdf").toLowerCase()) <=0){
      this.filelink="https://docs.google.com/gview?url="+this.filelink+"&embedded=true";    
      document.getElementById("viewoffice").innerHTML="<iframe id=\"ViewPdf\" src=\"" +  this.filelink + "\" style=\"width: 100%; height: 608px;\"></iframe>";
      this.checktypefile=false;
    }
  }
  ionViewDidLoad() {

  }
  async closePopup(){
   
    this.modalController.dismiss();
}
}
