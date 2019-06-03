import { Component, OnInit,ElementRef, ViewChild } from '@angular/core';

//  import {File} from '@ionic-native/file';
 //import { DocumentViewer } from '@ionic-native/document-viewer/ngx';
 //import { DocumentViewerOptions } from '@ionic-native/document-viewer/ngx';
 import { AuthenticationService } from 'src/app/services/authentication.service';
 import { Response } from 'selenium-webdriver/http';
 import { IonSegment, NavController } from '@ionic/angular';
import * as Highcharts from 'highcharts';
import {IonSlides} from '@ionic/angular';
import { VanbandenPage } from 'src/app/members/vanbanden/vanbanden.page';
import { VanbandenchuadocPage } from 'src/app/members/vanbanden/vanbandenchuadoc/vanbandenchuadoc.page';
import { VanbandenchuaxulyPage } from 'src/app/members/vanbanden/vanbandenchuaxuly/vanbandenchuaxuly.page';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';
import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-viewfile',
  templateUrl: './viewfile.page.html',
  styleUrls: ['./viewfile.page.scss'],
})
export class ViewfilePage implements OnInit {
  @ViewChild(IonSlides) slides: IonSlides;
  @ViewChild("IonSegment") segments ;
  page: any;


  tab1Root = VanbandenPage;
  tab2Root = VanbandenchuadocPage;
  tab3Root = VanbandenchuaxulyPage;
  loaded:   boolean = false;
  tabIndex: number  = 0;

  constructor(public navCtrl: NavController,
    //private nativePageTransitions: NativePageTransitions
    ) {

  }

  // private getAnimationDirection(index):string {
  //   var currentIndex = this.tabIndex;

  //   this.tabIndex = index;

  //   switch (true){
  //     case (currentIndex < index):
  //       return('left');
  //     case (currentIndex > index):
  //       return ('right');
  //   }
  // }

  // public transition(e):void {
  //   let options: NativeTransitionOptions = {
  //    direction:this.getAnimationDirection(e.index),
  //    duration: 250,
  //    slowdownfactor: -1,
  //    slidePixels: 0,
  //    iosdelay: 20,
  //    androiddelay: 0,
  //    fixedPixelsTop: 0,
  //    fixedPixelsBottom: 48
  //   };

  //   if (!this.loaded) {
  //     this.loaded = true;
  //     return;
  //   }

  //   this.nativePageTransitions.slide(options);
  // }
  selectedTab(index) {
    this.slides.slideTo(index,0);
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

  // Get size start to current
  sizeLeft(){
    let size = 0;
    for(let i = 0; i < this.page; i++){
      size+= this.segments.nativeElement.children[i].clientWidth;
    }
    return size;
  }

  // Easing function
  easeInOutQuart(time, from, distance, duration) {
    if ((time /= duration / 2) < 1) return distance / 2 * time * time * time * time + from;
    return -distance / 2 * ((time -= 2) * time * time * time - 2) + from;
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
  ngOnInit() {

  }
  ionViewDidLoad() {

  }

}
