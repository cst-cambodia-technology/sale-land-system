import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(projects: any, search: any): any {

    //check if search term is undifined
    if (search === undefined) return projects;
    
    //return update projects array
    return projects.filter(function(pro){
    	return pro.name.toLowerCase().includes(search.toLowerCase());
    })
  }

}
