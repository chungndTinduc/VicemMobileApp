import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-danhba',
  templateUrl: './danhba.page.html',
  styleUrls: ['./danhba.page.scss'],
})
export class DanhbaPage implements OnInit {
  danhsachs:any;
  total=0;
  public dataquery ={CurrentPage:1,RowPerPage:10,SearchIn:'TenHienThi,Email',Keyword:''};
   constructor(private authService:AuthenticationService) { }
 
  ngOnInit() {
  
  }
  ionViewDidEnter(){
    this.load();
  }
  load(){
    this.dataquery.RowPerPage=10;
    this.dataquery.CurrentPage=1;
    this.authService.getDanhBa(this.dataquery).subscribe(res =>{
      this.danhsachs = res["Data"];
      this.total=res["Total"];
      return true;
    });
  }
  loadsearch(){
    this.dataquery.RowPerPage=10;
    this.dataquery.CurrentPage=1;
    this.authService.getDanhBa(this.dataquery).subscribe(res =>{
      this.danhsachs = res["Data"];
      this.total=res["Total"];
    });
  }
  doInfinite(infiniteScroll) {
    setTimeout(() => {
      if (this.dataquery.CurrentPage == 1)
        this.dataquery.CurrentPage  = 2;     
        if((this.dataquery.CurrentPage * this.dataquery.RowPerPage)<this.total){
        this.authService.getDanhBa(this.dataquery).subscribe(res =>{          
          for (var j = 0; j < res["Data"].length; j++) {
            this.danhsachs.push(res["Data"][j])
          }
        });
        this.dataquery.CurrentPage  = this.dataquery.CurrentPage  + 1;
      }
      infiniteScroll.target.complete();
    }, 500);
  }
}
