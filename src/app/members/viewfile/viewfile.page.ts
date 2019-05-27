import { Component, OnInit,ElementRef, ViewChild } from '@angular/core';

 import {File} from '@ionic-native/file';
 //import { DocumentViewer } from '@ionic-native/document-viewer/ngx';
 //import { DocumentViewerOptions } from '@ionic-native/document-viewer/ngx';
 import { AuthenticationService } from 'src/app/services/authentication.service';
 import { Response } from 'selenium-webdriver/http';
//  import { NavController } from 'ionic-angular';
import * as Highcharts from 'highcharts';

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
   var highChartCustom =  Highcharts.chart(this.container.nativeElement, {
      chart: {
        type: 'column'
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
      series: [
        {name: 'Tokyo',data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],  type: undefined}, 
        {name: 'New York',data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5, 106.6, 92.3], type: undefined}, 
        {name: 'London', data: [48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0, 59.6, 52.4, 65.2, 59.3, 51.2], type: undefined}, 
        {name: 'Berlin',data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4, 47.6, 39.1, 46.8, 51.1] ,type: undefined}
      ]
});
  }
  ionViewDidLoad() {
 
  }
  
}
