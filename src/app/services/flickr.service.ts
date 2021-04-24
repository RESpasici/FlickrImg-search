import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Photo } from '../models/photo';

export interface FlickrAPIResponse {
  photos: {
    photo: Photo[];
  };
}

@Injectable()
export class FlickrService {
  constructor(private http: HttpClient) {}

  public searchPublicPhotos(searchTerm: string): Observable<Photo[]> {
    return this.http
      .get<FlickrAPIResponse>('https://www.flickr.com/services/rest/', {
        params: {
          tags: searchTerm,
          method: 'flickr.photos.search',
          format: 'json',
          nojsoncallback: '1',
          tag_mode: 'all',
          media: 'photos',
          per_page: '30',
          extras: 'tags,date_taken,owner_name,url_q,url_m',
          api_key: 'c205e231b0544557dc6e96de5dfd4b47',
        },
      })
      .pipe(map((response) => response.photos.photo));
  }
}
