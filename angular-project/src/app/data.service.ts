import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { PhotosTypes } from './photos-list/types';


@Injectable({
  providedIn: 'root'
})
export class PhotosResource {

  private readonly url = 'https://picsum.photos/v2/list?page=';

  constructor(private http: HttpClient) { }

  getPhotos(pageNumber: number = 1): Observable<PhotosTypes[]> {
    return this.http.get(`${this.url}${pageNumber}&limit=12`) 
      .pipe(
        map(res => res as PhotosTypes[])
      );
  }

}
