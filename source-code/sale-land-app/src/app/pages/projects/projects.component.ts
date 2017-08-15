import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {ProjectComponent} from "./project/project.component";
import {ProjectsService} from "./projects.service";
import {Project} from "./project/project";
import { FilterPipe } from './filter.pipe';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.html',
  styleUrls: ['./projects.scss']
})
export class Projects implements OnInit {

  @Input() projects: Project[];
  @ViewChild('projectModal') public projectModal: ProjectComponent;

  constructor(private projectsService: ProjectsService ) { }

  ngOnInit() {
    this.getProjectList();
  }

  private getProjectList(): void{
        this.projectsService.getProjects()
            .subscribe(( projects: Project[]) => this.projects = projects,
                (error: Response)=> console.log(error)
            );
   }

  onEdit(project:Project) {
      let editProject = Object.assign({}, project);
      this.projectModal.show();
      this.projectModal.action = "update";
      this.projectModal.project = editProject;
  }

  projectModalShow(){
        this.projectModal.show();
  }

  refreshList(project){
        if (this.projectModal.action == 'store'){
            this.projects.push(project);
        }else if(this.projectModal.action == 'update'){
            let id = project.id;
            let updateProject = this.projects.find(this.findIndexToUpdate, id);
            let index = this.projects.indexOf(updateProject);
            this.projects[index] = project;
        }
    }
  findIndexToUpdate(project){
        return project.id === this;
  }
}
