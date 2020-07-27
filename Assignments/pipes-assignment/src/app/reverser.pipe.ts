import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverser'
})
export class ReverserPipe implements PipeTransform {

  transform(value: string): any {
    let reverseValue: string[] = value.split("");
    return reverseValue.reverse().join("");
  }

}
