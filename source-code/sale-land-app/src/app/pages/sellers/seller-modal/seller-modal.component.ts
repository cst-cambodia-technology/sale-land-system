import { Component, OnInit } from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {NgUploaderOptions} from "ngx-uploader";

@Component({
  selector: 'app-seller-module',
  templateUrl: './seller-modal.component.html',
  styleUrls: ['./seller-modal.component.scss']
})
export class SellerModal implements OnInit {
  public uploaderOptions:NgUploaderOptions = {
    // url: 'http://website.com/upload'
    url: '',
  };
  modalHeaderSeller: string
  constructor(private activeModal: NgbActiveModal,) { }

  ngOnInit() {
  }

  close() {
    this.activeModal.close();
  }
}
