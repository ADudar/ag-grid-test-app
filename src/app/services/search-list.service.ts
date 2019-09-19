import {Injectable} from '@angular/core';
import {SearchListResponse} from '../models/models';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchListService {

  constructor(private http: HttpClient) {
  }

  getVideos(query: string = ''): Observable<SearchListResponse> {
    const baseUrl = 'https://www.googleapis.com/youtube/v3/search';
    const key = 'AIzaSyDOfT_BO81aEZScosfTYMruJobmpjqNeEk';
    const maxResults = '50';
    const type = 'video';
    const part = 'snippet';
    const fullUrl = `${baseUrl}?key=${key}&maxResults=${maxResults}&type=${type}&part=${part}&q=${query}`;
    return this.http.get<SearchListResponse>(fullUrl);
  }
}
