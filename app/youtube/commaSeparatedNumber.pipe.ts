import {Pipe, PipeTransform} from 'angular2/core';

@Pipe({name: 'commaSeparatedNumber'})
export class CommaSeparatedNumberPipe implements PipeTransform {
  transform(value:number, args:string[]) : any {
    return value.toLocaleString();
  }
}
