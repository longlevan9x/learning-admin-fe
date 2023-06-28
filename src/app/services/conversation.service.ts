import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ConversationService {
  constructor(private http: HttpClient) {
  }

  findAll(params?: any): Observable<any> {
    return this.http.get(environment.apiUrl + '/conversations', {params: params});
  }

  scraping(lessonId?: string, scrapingUrl?: string) {
    return this.http.post(environment.apiUrl + '/conversations/scraping', {lessonId, scrapingUrl});
  }
}
