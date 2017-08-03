import { Component, Input, OnInit } from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {NgUploaderOptions} from "ngx-uploader";

@Component({
  selector: 'app-seller-module',
  templateUrl: './seller-modal.component.html',
  styleUrls: ['./seller-modal.component.scss'],

})
export class SellerModal implements OnInit {

  public defaultPicture = 'assets/img/theme/no-photo.png';
  public sellers:any = {
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

  // modalHeaderSeller: string;
  // @Input() sellers:any;
  constructor(private activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

  close() {
    this.activeModal.close();
  }
  save() {

  }
}
