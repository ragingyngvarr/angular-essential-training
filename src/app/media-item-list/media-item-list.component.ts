import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MediaItemService } from '../media-item.service';
import { MediaItem } from '../types/media-item';

@Component({
  selector: 'mw-media-item-list',
  templateUrl: './media-item-list.component.html',
  styleUrls: ['./media-item-list.component.css']
})
export class MediaItemListComponent implements OnInit {
  medium = '';
  mediaItems: Array<MediaItem> = [];
  constructor(private mediaItemService: MediaItemService, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      const medium = paramMap.get('medium');
      this.getMediaItems(medium.toLowerCase() === 'all' ? '' : medium);
    });
  }


  onMediaItemDelete(mediaItem: MediaItem) {
    this.mediaItemService.delete(mediaItem).subscribe(() => this.getMediaItems(this.medium));
  }

  getMediaItems(medium) {
    this.mediaItemService.get(medium).subscribe(mediaItems => this.mediaItems = mediaItems);
  }
}
