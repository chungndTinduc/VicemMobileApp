import { Component, OnInit,ElementRef, ViewChild } from '@angular/core';

//  import {File} from '@ionic-native/file';
 //import { DocumentViewer } from '@ionic-native/document-viewer/ngx';
 //import { DocumentViewerOptions } from '@ionic-native/document-viewer/ngx';
 import { AuthenticationService } from 'src/app/services/authentication.service';
 import { Response } from 'selenium-webdriver/http';
 import { IonSegment, NavController } from '@ionic/angular';
import * as Highcharts from 'highcharts';
import {IonSlides} from '@ionic/angular';
import { VanbandenPage } from 'src/app/members/vanbanden/vanbanden.page';
import { VanbandenchuadocPage } from 'src/app/members/vanbanden/vanbandenchuadoc/vanbandenchuadoc.page';
import { VanbandenchuaxulyPage } from 'src/app/members/vanbanden/vanbandenchuaxuly/vanbandenchuaxuly.page';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';
import { RouterModule, Routes } from '@angular/router';
// import { DocumentViewer,DocumentViewerOptions } from '@ionic-native/document-viewer';

@Component({
  selector: 'app-viewfile',
  templateUrl: './viewfile.page.html',
  styleUrls: ['./viewfile.page.scss'],
})
export class ViewfilePage implements OnInit {
  @ViewChild(IonSlides) slides: IonSlides;
  @ViewChild("IonSegment") segments ;
  page: any;


  tab1Root = VanbandenPage;
  tab2Root = VanbandenchuadocPage;
  tab3Root = VanbandenchuaxulyPage;
  loaded:   boolean = false;
  tabIndex: number  = 0;

  constructor(public navCtrl: NavController,
    // private document:DocumentViewer,
    //private nativePageTransitions: NativePageTransitions
    ) {

  }


  
  ngOnInit() {
    // const options: DocumentViewerOptions = {
    //   title: 'My PDF'
    // }
    // this.document.viewDocument('assets/filepdf.PDF', 'application/pdf', options)
  }
  ionViewDidLoad() {

  }

}
