import { TestBed } from '@angular/core/testing';

import { RenderImageService } from './render-image.service';

describe('RenderImageService', () => {
  let service: RenderImageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RenderImageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
