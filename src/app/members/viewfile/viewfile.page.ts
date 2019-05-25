import { Component, OnInit } from '@angular/core';

 import {File} from '@ionic-native/file';
 import { DocumentViewer } from '@ionic-native/document-viewer/ngx';
 import { DocumentViewerOptions } from '@ionic-native/document-viewer/ngx';
 import { AuthenticationService } from 'src/app/services/authentication.service';
 import { Response } from 'selenium-webdriver/http';

@Component({
  selector: 'app-viewfile',
  templateUrl: './viewfile.page.html',
  styleUrls: ['./viewfile.page.scss'],
})
export class ViewfilePage implements OnInit {

  constructor(
    // private file : File,
     public authenti:AuthenticationService,
     public documentViewers: DocumentViewer,
     )
  {
  }


  ngOnInit() {
  }
  viewfilepdf(){
    // const options: DocumentViewerOptions = {
    //   title: 'My PDF'
    // }
    // this.documentViewer.viewDocument('assets/filepdf.PDF','application/pdf',options);
  }
}
