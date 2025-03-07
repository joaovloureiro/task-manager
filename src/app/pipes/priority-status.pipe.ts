import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priorityStatus'
})
export class PriorityStatusPipe implements PipeTransform {
  list: { [key: string]: { title: string, color: string } } =
    {
      LOW: { title: 'Low', color: 'badge-light' },
      MEDIUM: { title: 'Medium', color: 'badge-warning' },
      HIGH: { title: 'High', color: 'badge-danger' },
    }

  transform(value: string, returnColor: boolean = false): string {
    if (returnColor) {
      return this.list[value]?.color || value;
    }

    return this.list[value]?.title || value;
  }
}
