import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
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
    public theHtmlString:any;
    @ViewChild('container') dataContainer: ElementRef;
    btn: HTMLElement;
    danhsachs:any;
    dashboardvbden:any;
    shownSessions:any;
    danhsachduthaos:any;
    segment='vanbanden'
    public chectab:any;
  constructor(private authService: AuthenticationService,
    
    public menuCtrl: MenuController,
    private http: HttpClient
    ) {  
    }
  ngOnInit() {
  }
  ionViewDidEnter(){
    this.loadlichlamviec();
     this.loaddoarboardvanbanden();
     this.loadvanbanduthaohome();
  }
  loaddoarboardvanbanden(){
    this.chectab=1;
    this.authService.getVanBanDenCounHome().subscribe(res=>{
        this.dashboardvbden = res["Data"];
        var data=[{name:"Đầu mối",y:this.dashboardvbden.TotalDauMoi}, {name:"Phối hợp",y:this.dashboardvbden.TotalPhoiHop}, {name:"Nhận để biết",y:this.dashboardvbden.TotalNhanDeBiet}]
        this.loadHighChart(data)
      })
  }
  loadlichlamviec(){
      this.authService.getLichLamViecHome().subscribe(res=>{
        this.danhsachs = res["Data"];
        return true;
      })
      
  }
  loadvanbanduthaohome(){
    this.authService.getVanBanDuThaoHome().subscribe(res=>{
      this.danhsachduthaos = res["Data"];
    })
  }
  changecongviec(){
    this.chectab=2;
    this.authService.getCongViecDashboardHome().subscribe(res=>{
      var congviec= res["Data"];
      if(congviec.TotalDauMoi!=0 && congviec.TotalPhoiHop!=0 && congviec.TotalNhanDeBiet){
      var data=[{name:"Đầu mối",y:congviec.TotalDauMoi}, {name:"Phối hợp",y:congviec.TotalPhoiHop}, {name:"Nhận để biết",y:congviec.TotalNhanDeBiet}]
      this.loadHighChart(data);
      }else{
        document.getElementById("container1").innerHTML='';
      }
    })
  }
  logout() {
    this.authService.logout();
   
  }
  loadHighChart(data){
  var container1=  document.getElementById("container1");

        var colorList = [
            '#B5C334', '#F09A49', '#7CB5EC', '#FCCE10'];
          
     Highcharts.chart('container1', {
    colors: colorList,
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie',
        height:230,
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
  series: [{
    data: data,
    type:undefined
}]
});
  }
}
