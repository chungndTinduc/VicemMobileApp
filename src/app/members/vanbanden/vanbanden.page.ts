import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Response } from 'selenium-webdriver/http';
import {IonSlides} from '@ionic/angular';
@Component({
  selector: 'app-vanbanden',
  templateUrl: './vanbanden.page.html',
  styleUrls: ['./vanbanden.page.scss'],
})
export class VanbandenPage implements OnInit {
@ViewChild('slides', { read: IonSlides }) slides: IonSlides;
@ViewChild("segments") segments;
 danhsachVanBans:any;
 total=0;
 page: any;
 public dataquery ={CurrentPage:1,RowPerPage:10,SearchIn:'SoKyHieu,TrichYeu',Keyword:''};
  constructor(private authService:AuthenticationService) { }

  ngOnInit() {
  
  }
  ionViewDidEnter(){
    this.load();
  }
    // On segment click
    selectedTab(index) {
      this.slides.slideTo(index);
      console.log("selectedTab",index)
    }
    // On slide changed
    slideChanged() {
      let currentIndex = this.slides.getActiveIndex();
      let slides_count = this.segments.nativeElement.childElementCount;
  
      this.page = currentIndex.toString();
      if(this.page >= slides_count)
        this.page = (slides_count-1).toString();
  
      console.log("slides_count",slides_count)
      console.log("this.page",this.page)
      this.centerScroll();
    }
    // Center current scroll
    centerScroll(){
      if(!this.segments || !this.segments.nativeElement)
        return;
  
      let sizeLeft = this.sizeLeft();
      let sizeCurrent = this.segments.nativeElement.children[this.page].clientWidth;
      let result = sizeLeft - (window.innerWidth / 2) + (sizeCurrent/2) ;
  
      result = (result > 0) ? result : 0;
      this.smoothScrollTo(result);
    }
    sizeLeft(){
      let size = 0;
      for(let i = 0; i < this.page; i++){
        size+= this.segments.nativeElement.children[i].clientWidth;
      }
      return size;
    }
      // Animate scroll
  smoothScrollTo(endX){
    let startTime = new Date().getTime();
    let startX = this.segments.nativeElement.scrollLeft;
    let distanceX = endX - startX;
    let duration = 400;

    let timer = setInterval(() => {
      var time = new Date().getTime() - startTime;
      var newX = this.easeInOutQuart(time, startX, distanceX, duration);
      if (time >= duration) {
        clearInterval(timer);
      }
      this.segments.nativeElement.scrollLeft = newX;
    }, 1000 / 60); // 60 fps
  }
  easeInOutQuart(time, from, distance, duration) {
    if ((time /= duration / 2) < 1) return distance / 2 * time * time * time * time + from;
    return -distance / 2 * ((time -= 2) * time * time * time - 2) + from;
  }
  load(){
    this.dataquery.RowPerPage=10;
    this.dataquery.CurrentPage=1;
    this.authService.getVanBanDen(this.dataquery).subscribe(res =>{
      this.danhsachVanBans = res["Data"];
      this.total=res["Total"];
      return true;
    });
  }
  dorefresh(refresher){
    this.dataquery.RowPerPage=10;
    this.dataquery.CurrentPage=1;
    this.authService.getVanBanDen(this.dataquery).subscribe(res =>{
      this.danhsachVanBans = res["Data"];
      this.total=res["Total"];
      refresher.target.complete();
    });
  }
  loadsearch(){
    this.dataquery.RowPerPage=10;
    this.dataquery.CurrentPage=1;
    this.authService.getVanBanDen(this.dataquery).subscribe(res =>{
      this.danhsachVanBans = res["Data"];
      this.total=res["Total"];
    });
  }
  doInfinite(infiniteScroll) {
    setTimeout(() => {
      if (this.dataquery.CurrentPage == 1)
        this.dataquery.CurrentPage  = 2;     
        if((this.dataquery.CurrentPage * this.dataquery.RowPerPage)<this.total){
        this.authService.getVanBanDen(this.dataquery).subscribe(res =>{          
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
