import {Component, EventEmitter, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {NgForm} from "@angular/forms";
import {LayoutsService} from "../layouts.sevice";
import {Layout} from "../layouts.model";
import {Response} from "@angular/http";
import {Projects} from "../../projects/projects.interface";
import {ProjectsService} from "../../projects/projects.service";
import {Route, Router, Routes} from "@angular/router";
import {Observable} from "rxjs/Observable";
import {Subject} from "rxjs/Subject";
import {ReplaySubject} from "rxjs/ReplaySubject";

@Component({
  selector: 'app-layout-modal',
  templateUrl: './layout-modal.component.html',
  styleUrls: ['./layout-modal.component.scss'],
  providers: [LayoutsService],
})
export class LayoutModalComponent implements OnInit {


  @Input() layout =  new Layout();

  public modalHeader: string;
  public showHideBatchCheckBox: boolean = true;
  public btnSave:string;

  public isBatch:boolean = false;

  @Input() projects: Projects[];
  constructor( private activeModal: NgbActiveModal, private layoutService: LayoutsService, private projectService: ProjectsService) {

  }

  ngOnInit() {

    this.getProjects();

    // let timer = Observable.timer(2000,1000);
    //
    // timer.subscribe(()=> this.getProjects());
  }

  private getProjects(){
    this.projectService.getProjects()
        .subscribe(
            (projects: Projects[]) =>  this.projects = projects,
            (error: Response) => console.log(error)
        );
  }

  public close(){
    this.activeModal.close();
  }

  actionListener(){
    // console.log(this.layout);
    this.layout.label= this.layout.prefix+ this.layout.no;

    if(this.btnSave =='Save'){
      this.layout.status= 'Open';

      if(this.isBatch!=true){
        let layouts = new Array();
        layouts.push(this.layout);
        this.layoutService.addNewLayout(layouts)
            .subscribe(
                (response: Response) => {
                  response.json();
                }
            );


        // form.reset() ;
        this.activeModal.close();
      }else {
        if(this.layout.no > this.layout.to){
          alert('To must be more then no.');
        }else{
          var row = this.layout.to-this.layout.no;
          let layouts = new Array();

          for(var i=0; i<row;i++){
            layouts.push(this.layout);
          }
          this.layoutService.addNewLayout(layouts)
              .subscribe(
                  (response: Response) => response.json()
              );

          // form.reset() ;
          this.activeModal.close();
        }
      }
    }else {
      this.layoutService.updateLayout(this.layout.id, this.layout)
          .subscribe(
              (res) =>{
                console.log(res.project.id);
              }
          );
      // form.reset() ;
      this.activeModal.close();
    }
  }
}
