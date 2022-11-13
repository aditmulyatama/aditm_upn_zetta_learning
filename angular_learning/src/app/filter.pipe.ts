import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(data: any[], filterkey: any): any {
    if (data.length == 0 || filterkey == '') {
      return data;
    } else {
      return data.filter((parse) => {
        return (
          parse.Name.toLowerCase()
            .split(' ')
            .join('')
            .indexOf(filterkey.toLowerCase()) >= 0
        );
      });
    }
  }
}
