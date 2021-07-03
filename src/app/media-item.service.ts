import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MediaItem } from './types/media-item';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MediaItemService {
  constructor(private httpClient: HttpClient) {}

  get(medium) {
    const getOptions= {
      params: { 
        medium,
      }
    }; 
    return this.httpClient.get<MediaItemsResponse>('mediaitems', getOptions)
      .pipe(map(response => { return response.mediaItems; }), catchError(this.handleError));
  }

  add(mediaItem: MediaItem) {
    return this.httpClient.post('mediaitem', mediaItem).pipe(catchError(this.handleError));
  }

  delete(mediaItem: MediaItem) {
    return this.httpClient.delete(`mediaitems/${mediaItem.id}`).pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    console.log(error);
    return throwError('An http error occured');
  }
}

interface MediaItemsResponse {
  mediaItems: Array<MediaItem>;
}
