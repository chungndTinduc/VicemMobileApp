import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { MenuController } from '@ionic/angular';
import * as Highcharts from 'highcharts';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  constructor(private authService: AuthenticationService,
    public menuCtrl: MenuController) {  
    }
  ngOnInit() {
    setTimeout( () => {
     this.loadHighChart()
 }, 500);
  }
  logout() {
    this.authService.logout();
  }
  loadHighChart(){
    Highcharts.chart('highChart', {
      chart: {
          type: 'bar'
      },
      title: {
          text: 'Tình hình xử lý văn bản'
      },
      subtitle: {
          text: 'Source: Wikipedia.org'
      },
      xAxis: {
          categories: ['Africa', 'America', 'Asia', 'Europe', 'Oceania'],
          title: {
              text: null
          }
      },
      yAxis: {
          min: 0,
          title: {
              text: 'Population (millions)',
              align: 'high'
          },
          labels: {
              overflow: 'justify'
          }
      },
      tooltip: {
          valueSuffix: ' millions'
      },
      plotOptions: {
          bar: {
              dataLabels: {
                  enabled: true
              }
          }
      },
      legend: {
          layout: 'vertical',
          align: 'right',
          verticalAlign: 'top',
          x: -40,
          y: 80,
          floating: true,
          borderWidth: 1,
          // backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
          shadow: true
      },
      credits: {
          enabled: false
      },
      series: [{
          name: 'Year 1800',
          data: [107, 31, 635, 203, 2],
          type:undefined
      }, {
          name: 'Year 1900',
          data: [133, 156, 947, 408, 6],
          type:undefined
      }, {
          name: 'Year 2000',
          data: [814, 841, 3714, 727, 31],
          type:undefined
      }, {
          name: 'Year 2016',
          data: [1216, 1001, 4436, 738, 40],
          type:undefined
      }]
  });
  }
}
