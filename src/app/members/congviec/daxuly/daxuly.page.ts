import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
@Component({
  selector: 'app-daxuly',
  templateUrl: './daxuly.page.html',
  styleUrls: ['./daxuly.page.scss'],
})
export class DaxulyPage implements OnInit {

  constructor(private authService:AuthenticationService) { }

  ngOnInit() {
  }

}
