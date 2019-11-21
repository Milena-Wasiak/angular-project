import { TestBed } from '@angular/core/testing';

import { PhotosResource } from './data.service';

describe('DataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PhotosResource = TestBed.get(PhotosResource);
    expect(service).toBeTruthy();
  });
});
