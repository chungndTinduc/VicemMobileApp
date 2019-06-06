import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ykienvanbanden',
  templateUrl: './ykienvanbanden.page.html',
  styleUrls: ['./ykienvanbanden.page.scss'],
})
export class YkienvanbandenPage implements OnInit {

  lstobject:any;
  LtsAllDanhMuc:any;
  public dataquery ={VanBanID:0};
  total=0;
  ID:any;
  constructor(private authService:AuthenticationService, private route: ActivatedRoute) { }


  ngOnInit() {
  }
  ionViewDidEnter(){
    this.load();
  }
  load(){
    this.dataquery.VanBanID = parseInt(this.route.snapshot.paramMap.get('vanbandenid'));
    this.authService.getYKienVanBanDen(this.dataquery).subscribe(res =>{
      this.lstobject = res["Data"];      
    });
  }

}
