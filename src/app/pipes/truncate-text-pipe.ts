import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncateText',
})
// create a pipe to shorten book descriptions with ... (aka. truncate)
export class TruncateTextPipe implements PipeTransform {

  // if book description is long, show the first 100 characters with ... at the end
  transform(value: string, limit: number = 100): string {
    // if there is no description, return an empty string
    if (!value) return '';
    return value.length > limit ? value.substring(0, limit) + '...' : value;
  }

}
