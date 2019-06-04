import { Component, OnInit, ViewChild   } from '@angular/core';
import { IonTabs } from '@ionic/angular';
import { SwipeTabDirective } from 'src/app/directives/swipe-tab.directive';
import {injectStyles} from 'shadow-dom-inject-styles';
import { ElementRef } from '@angular/core';
@Component({
  selector: 'app-app-tabs',
  templateUrl: './app-tabs.page.html',
  styleUrls: ['./app-tabs.page.scss'],
})
export class AppTabsPage implements OnInit  {
  @ViewChild(SwipeTabDirective) swipeTabDirective: SwipeTabDirective;
  @ViewChild('myTabs') tabRef: IonTabs;
  @ViewChild('mylbl') el: ElementRef;
  constructor() {


   }

  ngOnInit() {
  }
  
  ionTabsDidChange($event) {
    console.log('[TabsPage] ionTabsDidChange, $event: ', $event);
    this.swipeTabDirective.onTabInitialized($event.tab);
  }

  onTabChange($event) {
    console.log('[TabsPage] onTabChange, $event: ', $event);
    this.tabRef.select($event);
  }

}
