import { Component, OnInit } from '@angular/core';
import { VanbandenPage } from 'src/app/members/vanbanden/vanbanden.page';
import { VanbandenchuadocPage } from 'src/app/members/vanbanden/vanbandenchuadoc/vanbandenchuadoc.page';
import { VanbandenchuaxulyPage } from 'src/app/members/vanbanden/vanbandenchuaxuly/vanbandenchuaxuly.page';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';
import { IonSegment, NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab-vanbanden',
  templateUrl: './tab-vanbanden.page.html',
  styleUrls: ['./tab-vanbanden.page.scss'],
})
export class TabVanbandenPage implements OnInit {
  tab1Root = VanbandenPage;
  tab2Root = VanbandenchuadocPage;
  tab3Root = VanbandenchuaxulyPage;
  loaded:   boolean = false;
  tabIndex: number  = 0;
  constructor(public navCtrl: NavController,private nativePageTransitions: NativePageTransitions) {

  }

  ngOnInit() {
  }
  private getAnimationDirection(index):string {
    var currentIndex = this.tabIndex;

    this.tabIndex = index;

    switch (true){
      case (currentIndex < index):
        return('left');
      case (currentIndex > index):
        return ('right');
    }
  }

  public transition(e):void {
    let options: NativeTransitionOptions = {
     direction:this.getAnimationDirection(e.index),
     duration: 250,
     slowdownfactor: -1,
     slidePixels: 0,
     iosdelay: 20,
     androiddelay: 0,
     fixedPixelsTop: 0,
     fixedPixelsBottom: 48
    };

    if (!this.loaded) {
      this.loaded = true;
      return;
    }

    this.nativePageTransitions.slide(options);
  }
}
