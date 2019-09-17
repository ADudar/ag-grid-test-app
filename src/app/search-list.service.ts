import {Injectable} from '@angular/core';
import {SearchListResponse} from './models';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchListService {

  constructor(private http: HttpClient) {
  }

  getVideos(): Observable<SearchListResponse> {
    const url = 'https://www.googleapis.com/youtube/v3/search' +
      '?key=AIzaSyDOfT_BO81aEZScosfTYMruJobmpjqNeEk&maxResults=50&type=video&part=snippet&q=john';
    return this.http.get<SearchListResponse>(url);
  }
}
