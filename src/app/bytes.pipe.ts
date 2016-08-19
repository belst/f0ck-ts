import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bytes'
})
export class BytesPipe implements PipeTransform {

  transform(value: any, args?: any): any {
		var units = ['bytes', 'kB', 'MB', 'GB', 'TB', 'PB'],
		number = Math.floor(Math.log(value) / Math.log(1024));
    return (value / Math.pow(1024, Math.floor(number))).toFixed(1) + ' ' + units[number];
  }

}
