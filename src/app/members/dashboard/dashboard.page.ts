import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { MenuController } from '@ionic/angular';
import * as Highcharts from 'highcharts';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
    public dataquery ={week:'',year:''};
    danhsachs:any;
    dashboardvbden:any;
    shownSessions:any;
  constructor(private authService: AuthenticationService,
    
    public menuCtrl: MenuController,
    private http: HttpClient
    ) {  
    }
  ngOnInit() {
   // Build the chart
   //this.getDataFromTwoResources()
  }
  ionViewDidEnter(){
    // this.load();
    // this.loaddoarboardvanbanden();
    // this.loadHighChart()
    this.load();
    this.loaddoarboardvanbanden();
    this.loadHighChart();
   
  }
  getDataFromTwoResources() {
     // this.authService.presentLoadingWithOptions();
    // The URLs in this example are dummy
    this.authService.getLichLamViecHome().subscribe(res=>{
      this.danhsachs = res["Data"];
    })
    this.authService.getVanBanDenCounHome().subscribe(res=>{
      this.dashboardvbden= res["Data"];
    })
   
    return true;
}
  loaddoarboardvanbanden(){
    this.authService.getVanBanDenCounHome().subscribe(res=>{
        this.dashboardvbden = res["Data"];
        return true;
      })
  }
  load(){
      this.authService.getLichLamViecHome().subscribe(res=>{
        this.danhsachs = res["Data"];
        return true;
      })
      
  }
  logout() {
    this.authService.logout();
  }
  loadHighChart(){
    this.authService.getVanBanDenCounHome().subscribe(res=>{
        this.dashboardvbden = res["Data"];
        var colorList = [
            '#B5C334', '#F09A49', '#7CB5EC', '#FCCE10'];
Highcharts.chart('container', {
    colors: colorList,
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie',
    },
    title: {
        text: ''
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: false
            },
            showInLegend: true,
            
        }
    },
    // series: [{    
    //     data: [{
    //         name: 'Đầu mối',
    //         y: this.dashboardvbden.TotalDauMoi,   
    //     }, {
    //         name: 'Phối hợp',
    //         y: this.dashboardvbden.TotalPhoiHop
    //     }, {
    //         name: 'Nhận để biết',
    //         y: this.dashboardvbden.TotalNhanDeBiet
    //     }]
    // }]
});
})
  }
}
