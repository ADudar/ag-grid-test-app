import {TestBed} from '@angular/core/testing';

import {VideoService} from './video.service';

describe('VideoService', () => {

  let service: VideoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.get(VideoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add id to url video', () => {
    const url = `https://www.youtube.com/watch?v=`;
    const videoId = '1234test';
    expect(service.getVideoUrlById(videoId)).toEqual(url + videoId);
  });
});
