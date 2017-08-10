import {Component, Input, OnInit} from '@angular/core';
import {UserService} from "./users.service";
import {UserList} from "./model/user";
import {Response} from "@angular/http";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {UserStoreComponent} from "./store/user.store.component";

@Component({
  selector: 'app-users',
  templateUrl: './users.html',
  styleUrls: ['./users.scss']
})
export class Users implements OnInit {
  @Input() listUser : UserList[];
  constructor(private modalService: NgbModal, private userService: UserService) {

  }

  ngOnInit() {
    this.getUserList();
  }

  public getUserList(): void{
    this.userService.index().
      subscribe(
        (listUser: UserList[]) => {
          this.listUser = listUser;
          console.log(this.listUser);
        },
        (error: Response)=>{
          console.log(error);
        }
    );
  }

  new(){
    const activeModal = this.modalService.open(UserStoreComponent, {size: 'lg'});
    // activeModal.componentInstance.action = 'store';
  }

  close(){
    this
  }

}
