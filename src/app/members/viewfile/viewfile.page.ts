import { Component, OnInit,ElementRef, ViewChild } from '@angular/core';

 import {File} from '@ionic-native/file';
 //import { DocumentViewer } from '@ionic-native/document-viewer/ngx';
 //import { DocumentViewerOptions } from '@ionic-native/document-viewer/ngx';
 import { AuthenticationService } from 'src/app/services/authentication.service';
 import { Response } from 'selenium-webdriver/http';
//  import { NavController } from 'ionic-angular';
import * as Highcharts from 'highcharts';
import {IonSlides} from '@ionic/angular';
import { Slides } from '@ionic/angular';
@Component({
  selector: 'app-viewfile',
  templateUrl: './viewfile.page.html',
  styleUrls: ['./viewfile.page.scss'],
})
export class ViewfilePage implements OnInit {
  @ViewChild('slides', { read: Slides }) slides: Slides;
  @ViewChild("segments") segments;
  constructor() {

  }
  selectedTab(index) {
    this.slides.slideTo(index);
  }

  ngOnInit() {
  
  }
  ionViewDidLoad() {
 
  }
  
}
