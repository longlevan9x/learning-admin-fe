import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class KanjiService {
  constructor(private http: HttpClient) {
  }

  findAll(params?: any): Observable<any> {
    return this.http.get(environment.apiUrl + '/kanjis', {params: params});
  }

  scraping(lessonId?: string, categoryId?: string, scrapingUrl?: string) {
    return this.http.post(environment.apiUrl + '/kanjis/scraping', {lessonId, scrapingUrl});
  }
}
