import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-chitietvanbanden',
  templateUrl: './chitietvanbanden.page.html',
  styleUrls: ['./chitietvanbanden.page.scss'],
  
})
export class ChitietvanbandenPage implements OnInit {
  vanbanden:{};
  LtsAllDanhMuc:any;
  public dataquery ={ID:0};
  total=0;
  ID:any;
  constructor(private authService:AuthenticationService, private route: ActivatedRoute) { }


  ngOnInit() {
  }
  ionViewDidEnter(){
    this.load();
  }
  load(){
    this.dataquery.ID = parseInt(this.route.snapshot.paramMap.get('vanbandenid'));
    this.authService.getVanBanDenByID(this.dataquery).subscribe(res =>{
      this.vanbanden = res["Data"];
      this.LtsAllDanhMuc=res["LtsAllDanhMuc"];
    });
  }
}