import { Pipe, PipeTransform } from '@angular/core';
import { MediaItem } from './types/media-item';

@Pipe({
  name: 'categoryList'
})
export class CategoryListPipe implements PipeTransform {
  transform(mediaItems: Array<MediaItem>): any {
    const categories = [...new Set(mediaItems.map((mi) => mi.category))];
    return categories;
  }
}
