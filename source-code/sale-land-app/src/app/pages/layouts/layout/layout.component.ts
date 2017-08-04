import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {LayoutsService} from "../layouts.sevice";
import {Layout} from "./layouts";
import {Response} from "@angular/http";
import {ProjectsService} from "../../projects/projects.service";
import construct = Reflect.construct;
import {Project} from "../../projects/project/project";


@Component({
  selector: 'app-layout-modal',
  templateUrl: './layout.html',
  styleUrls: ['./layout.scss'],
  providers: [LayoutsService],
})
export class LayoutModalComponent implements OnInit {


  @Input() layout =  new Layout();
  public showHideBatchCheckBox: boolean = true;
  public btnSave:string;

  public isBatch:boolean = false;

  @Input() projects: Project[];



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
            (projects: Project[]) =>  this.projects = projects,
            (error: Response) => console.log(error)
        );
  }

  public close(){
    this.activeModal.close();
  }

  actionListener(){


    if(this.btnSave =='Save'){
      this.layout.status= 'Open';

      if(this.isBatch!=true){
        this.layout.label= this.layout.prefix+ this.layout.no;

        let layouts = [];
        layouts.push(this.layout);
        this.layoutService.addNewLayout(layouts)
            .subscribe(
                (response: Response) => {
                  response.json();
                }
            );
        this.close();

      }else {
        if(this.layout.no > this.layout.to){
          alert('End No must be more then Start No.');
        }else{

          var numRow = this.layout.to-this.layout.no + 1 ;
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
                  (response: Response) => response.json()
              );
          this.close();
        }
      }
    }else {
      this.layoutService.updateLayout(this.layout.id, this.layout)
          .subscribe(
              (layout) =>{
                // let layoutInterface: LayoutInterface;
                //
                // layoutInterface.setLayout(layout);

              }
          );
      this.close();
    }
  }
}
