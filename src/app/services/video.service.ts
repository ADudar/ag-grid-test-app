import {Injectable} from '@angular/core';

/**
 * Service for getting urls
 */
@Injectable({
  providedIn: 'root'
})
export class VideoService {

  /**
   * Get url by video id
   * @param videoId
   */
  getVideoUrlById(videoId: string): string {
    const videoUrl = `https://www.youtube.com/watch?v=`;
    return `${videoUrl}${videoId}`;
  }
}
