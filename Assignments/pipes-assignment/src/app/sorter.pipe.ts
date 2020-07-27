import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sorter'
})
export class SorterPipe implements PipeTransform {

  transform(value: {instanceType: string,
                    name: string,
                    status: string,
                    started: Date}[]): any {
    return value.sort((a, b) => (a.name > b.name ? -1 : 1));
  }

}
