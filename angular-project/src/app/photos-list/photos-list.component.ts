import { Component, OnInit, OnDestroy } from '@angular/core';
import { PhotosResource } from '../data.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { PhotosTypes } from './types';

@Component({
  selector: 'photo-list',
  templateUrl: './photos-list.component.html',
  styleUrls: ['./photos-list.component.scss']
})

export class PhotosList implements OnInit, OnDestroy {

  photos: PhotosTypes[];

  private destroy$ = new Subject();

  constructor(private photosResource: PhotosResource) {
  }

  ngOnInit() {
    this.selectPhotos();
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  selectPhotos(pageNumber?: number): void {
    this.photosResource
      .getPhotos(pageNumber)
      .pipe(
        takeUntil(this.destroy$)
      )
      .subscribe((photos: PhotosTypes[]) => {
        this.photos = photos;
      }
      );
  }
}
