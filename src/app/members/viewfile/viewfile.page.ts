import { Component, OnInit,ElementRef, ViewChild } from '@angular/core';

 import {File} from '@ionic-native/file';
 //import { DocumentViewer } from '@ionic-native/document-viewer/ngx';
 //import { DocumentViewerOptions } from '@ionic-native/document-viewer/ngx';
 import { AuthenticationService } from 'src/app/services/authentication.service';
 import { Response } from 'selenium-webdriver/http';
//  import { NavController } from 'ionic-angular';
 import  Highcharts from 'highcharts';

@Component({
  selector: 'app-viewfile',
  templateUrl: './viewfile.page.html',
  styleUrls: ['./viewfile.page.scss'],
})
export class ViewfilePage implements OnInit {
  @ViewChild("container", { read: ElementRef }) container: ElementRef;
  constructor() {

  }

  ngOnInit() {
    Highcharts.chart(this.container.nativeElement, {
      chart: {
        type: 'bar'
      },
      title: {
        text: 'Fruit Consumption'
      },
      xAxis: {
        categories: ['Apples', 'Bananas', 'Oranges']
      },
      yAxis: {
        title: {
          text: 'Fruit eaten'
        }
      },
      series: [{
        name: 'Jane',
        data: [1, 0, 4]
      }, {
        name: 'John',
        data: [5, 7, 3]
      }]
})
  }
  ionViewDidLoad() {
    Highcharts.chart(this.container.nativeElement, {
      chart: {
        type: 'bar'
      },
      title: {
        text: 'Fruit Consumption'
      },
      xAxis: {
        categories: ['Apples', 'Bananas', 'Oranges']
      },
      yAxis: {
        title: {
          text: 'Fruit eaten'
        }
      },
      series: [{
        name: 'Jane',
        data: [1, 0, 4]
      }, {
        name: 'John',
        data: [5, 7, 3]
      }]
})
  }
  
}
