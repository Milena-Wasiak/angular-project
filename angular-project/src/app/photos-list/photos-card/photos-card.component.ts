import { Component, OnInit, Input } from '@angular/core';
import { PhotosTypes } from '../types';

@Component({
  selector: 'photos-card',
  templateUrl: './photos-card.component.html',
  styleUrls: ['./photos-card.component.scss']
})
export class PhotosCard implements OnInit {

  @Input()
  photo: PhotosTypes;

  constructor() { }

  ngOnInit() {
  }

}
