import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  getVideoUrlById(videoId: string): string {
    const videoUrl = `https://www.youtube.com/watch?v=`;
    return `${videoUrl}${videoId}`;
  }
}
