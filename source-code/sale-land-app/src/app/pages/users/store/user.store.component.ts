import {Component, Input, OnInit} from "@angular/core";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {UserStore} from "../model/user";
/**
 * Created by sokho on 8/8/2017.
 */

@Component({
    selector: 'app-user-store',
    templateUrl: './user.store.html',
    styleUrls: ['./user.store.scss']
})
export class UserStoreComponent implements OnInit{

    @Input() userStore: UserStore = new UserStore();

    public isManageUser:boolean = false;
    constructor( private activeModal: NgbActiveModal){}
    ngOnInit(): void {
    }

    close() {
        this.activeModal.close();
    }

    actionlistener() {

    }
}
