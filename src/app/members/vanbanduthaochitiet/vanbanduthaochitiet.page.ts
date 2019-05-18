import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vanbanduthaochitiet',
  templateUrl: './vanbanduthaochitiet.page.html',
  styleUrls: ['./vanbanduthaochitiet.page.scss'],
})
export class VanbanduthaochitietPage implements OnInit {
  vanban:{};
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
    this.dataquery.ID = parseInt(this.route.snapshot.paramMap.get('vanbanduthaoid'));
    this.authService.getVanBanDuThaobyID(this.dataquery).subscribe(res =>{
      this.vanban = res["Data"];
      this.LtsAllDanhMuc=res["LtsAllDanhMuc"];
    });
  }

}
