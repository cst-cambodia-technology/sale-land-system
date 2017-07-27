import { Component, OnInit } from '@angular/core';
import {NgUploaderOptions} from "ngx-uploader";

@Component({
  selector: 'myprofile',
  templateUrl: './myprofile.html',
  styleUrls: ['./myprofile.scss']
})
export class Myprofile implements OnInit {
  public defaultPicture = 'assets/img/theme/no-photo.png';
  public profile:any = {
    picture: 'assets/img/app/profile/Nasta.png'
  };
  public uploaderOptions:NgUploaderOptions = {
    // url: 'http://website.com/upload'
    url: '',
  };

  public fileUploaderOptions:NgUploaderOptions = {
    // url: 'http://website.com/upload'
    url: '',
  };
  constructor() { }

  ngOnInit() {
  }

}
