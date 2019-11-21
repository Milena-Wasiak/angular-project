import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'photo-pagination',
  templateUrl: './photo-pagination.component.html',
  styleUrls: ['./photo-pagination.component.scss']
})
export class PhotoPagination implements OnInit {

  @Output()
  selectedPage = new EventEmitter<number>();

  pageNumbers: number[] = [1, 2, 3, 4, 5];

  constructor() { }

  ngOnInit() {
  }

  emittPageNumber(pageNumber: number): void {
    this.selectedPage.emit(pageNumber);
  }
}
