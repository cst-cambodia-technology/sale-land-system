import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {LayoutsService} from "../layouts.sevice";
import {Layout} from "./layouts";
import {Response} from "@angular/http";
import {ProjectsService} from "../../projects/projects.service";
import construct = Reflect.construct;
import {Project} from "../../projects/project/project";
import {ModalDirective} from "ngx-bootstrap";



@Component({
  selector: 'app-layout-modal',
  templateUrl: './layout.html',
  styleUrls: ['./layout.scss'],
  providers: [LayoutsService],
})
export class LayoutModalComponent implements OnInit {
  @ViewChild('layoutModal') public layoutModal: ModalDirective;
  @Input() layout =  new Layout();
  @Input() projects: Project[];
  @Output() myEvent: EventEmitter<Layout> = new EventEmitter<Layout>();

  public showHideBatchCheckBox: boolean = true;
  public btnSave:string = 'Save';
  public isBatch:boolean = false;

  constructor(private layoutService: LayoutsService, private projectService: ProjectsService) {
  }

  ngOnInit() {
    this.getProjects();
  }

  /*show modal*/
  show(){
    this.layoutModal.show();
    this.layoutModal.config={
      backdrop: "static",
      keyboard: false
    };
  }
  /* hide modal*/
  hide(){
    this.layoutModal.hide();
    this.resetForm();
  }

  /* click save */
  actionListener(){
    if(this.btnSave =='Save'){
      this.layout.status= 'Open';
      /*single insert*/
      if(this.isBatch!=true){
        this.layout.label= this.layout.prefix+ this.layout.no;

        let layouts = [];
        layouts.push(this.layout);
        this.layoutService.addNewLayout(layouts)
            .subscribe(
                (layout: Layout) => {
                  this.myEvent.emit(layout);
                  this.hide();
                  this.resetForm();
                },
                (error: Response)=> console.log(error)
            );
      /* multi insert*/
      }else {
        if(this.layout.no > this.layout.to){
          alert('End No must be more then Start No.');
        }else{

          let numRow = this.layout.to-this.layout.no + 1 ;
          let layouts = [];
          for(let i=0; i<numRow;i++){
            let layout: Layout = new Layout();

            layout.prefix = this.layout.prefix;
            layout.no = this.layout.no + i;
            layout.label = this.layout.prefix + layout.no;
            layout.projectId = this.layout.projectId;
            layout.size = this.layout.size;
            layout.price = this.layout.price;
            layout.description = this.layout.description;
            layout.status = 'Open';
            layouts.push(layout);
          }
          this.layoutService.addNewLayout(layouts)
              .subscribe(
                  (layout: Layout) => {
                    this.myEvent.emit(layout);
                    this.hide();
                    this.resetForm();
                  },
                  (error: Response)=> console.log(error)
              );
        }
      }
    /* update layout */
    }else {
      this.layout.label= this.layout.prefix+ this.layout.no;

      this.layoutService.updateLayout(this.layout.id, this.layout)
          .subscribe(
              (layout: Layout) =>{
                this.myEvent.emit(layout);
                this.hide();
                this.resetForm();
              },
              (error: Response)=> console.log(error)
          );
    }
  }

  /*reset form*/
  public resetForm(){
    this.layout  = new Layout();
    this.isBatch = false;
  }

  /*Get all project from API*/
  private getProjects(){
    this.projectService.getProjects()
        .subscribe(
            (projects: Project[]) =>  this.projects = projects,
            (error: Response) => console.log(error)
        );
  }
}
