import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ingSearch'
})
export class IngSearchPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    //if ingredient is blank,return fulll array
    if(args[0] === '') {return value;}
    
    let searchResult: any[] = []
    //Loop through value to look for ingredients
    for(let i=0; i<value.length; i++){
      for(let j=0; j<value[i].ingredients.length; j++){
        let ing = args[0];
        if(value[i].ingredients[j].indexOf(ing) != -1){
          searchResult.push(value[i]);
          break;
        }
      }
    }
    return searchResult;
  }

}
