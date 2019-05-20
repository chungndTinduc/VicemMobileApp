import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-lichlamviec',
  templateUrl: './lichlamviec.page.html',
  styleUrls: ['./lichlamviec.page.scss'],
})
export class LichlamviecPage implements OnInit {
  danhsachs:any;
  total=0;
  daterance='';
  public dataquery ={week:'',year:''};
   constructor(private authService:AuthenticationService) { }
 
  ngOnInit() {
  
  }
  ionViewDidEnter(){
    this.load();
  }
  load(){
    this.authService.getLichLamViec(this.dataquery).subscribe(res =>{
      this.danhsachs = res["Data"];
      this.total=res["Total"];
      this.dataquery.week=res["week"];
      this.dataquery.year=res["year"];
      this.daterance=res["daterance"];
      return true;
    });
  }
  prev(){
      this.dataquery.week=(parseInt(this.dataquery.week)-1).toString();
    this.authService.getLichLamViec(this.dataquery).subscribe(res =>{
      this.danhsachs = res["Data"];
      this.total=res["Total"];
      this.dataquery.week=res["week"];
      this.dataquery.year=res["year"];
      this.daterance=res["daterance"];
      return true;
    });
  }
  next(){
   this.dataquery.week=(parseInt(this.dataquery.week)+1).toString();
  this.authService.getLichLamViec(this.dataquery).subscribe(res =>{
    this.danhsachs = res["Data"];
    this.total=res["Total"];
    this.dataquery.week=res["week"];
    this.dataquery.year=res["year"];
    this.daterance=res["daterance"];
    return true;
  });
}
  loadsearch(){
    this.authService.getLichLamViec(this.dataquery).subscribe(res =>{
      this.danhsachs = res["Data"];
      this.total=res["Total"];
    });
  }

}
