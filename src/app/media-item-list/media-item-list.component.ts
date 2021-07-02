import { Component } from '@angular/core';
import { MediaItemService } from '../media-item.service';
import { MediaItem } from '../types/media-item';

@Component({
  selector: 'mw-media-item-list',
  templateUrl: './media-item-list.component.html',
  styleUrls: ['./media-item-list.component.css']
})
export class MediaItemListComponent {
  constructor(private mediaItemService: MediaItemService) {}

  get mediaItems() {
    return this.mediaItemService.items;
  }

  onMediaItemDelete(mediaItem: MediaItem) {
    this.mediaItemService.delete(mediaItem);
  }
}
