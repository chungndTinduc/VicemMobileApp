import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-vanbanduthao',
  templateUrl: './vanbanduthao.page.html',
  styleUrls: ['./vanbanduthao.page.scss'],
})
export class VanbanduthaoPage implements OnInit {
  danhsachVanBans:any;
  total=0;
  public dataquery ={CurrentPage:1,RowPerPage:10,SearchIn:'SoKyHieu,TrichYeu',Keyword:''};
   constructor(private authService:AuthenticationService) { }
 
   ngOnInit() {
   
   }
   ionViewDidEnter(){
     this.load();
   }
   load(){
     this.dataquery.RowPerPage=10;
     this.dataquery.CurrentPage=1;
     this.authService.getVanBanDuThao(this.dataquery).subscribe(res =>{
       this.danhsachVanBans = res["Data"];
       this.total=res["Total"];
       return true;
     });
   }
   loadsearch(){
     this.dataquery.RowPerPage=10;
     this.dataquery.CurrentPage=1;
     this.authService.getVanBanDuThao(this.dataquery).subscribe(res =>{
       this.danhsachVanBans = res["Data"];
       this.total=res["Total"];
     });
   }
   doInfinite(infiniteScroll) {
     setTimeout(() => {
       if (this.dataquery.CurrentPage == 1)
         this.dataquery.CurrentPage  = 2;     
         if((this.dataquery.CurrentPage * this.dataquery.RowPerPage)<this.total){
         this.authService.getVanBanDuThao(this.dataquery).subscribe(res =>{          
           for (var j = 0; j < res["Data"].length; j++) {
             this.danhsachVanBans.push(res["Data"][j])
           }
         });
         this.dataquery.CurrentPage  = this.dataquery.CurrentPage  + 1;
       }
       infiniteScroll.target.complete();
     }, 500);
   }
}
