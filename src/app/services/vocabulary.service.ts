import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class VocabularyService {
  constructor(private http: HttpClient) {
  }

  findAll(params?: any): Observable<any> {
    return this.http.get(environment.apiUrl + '/vocabularies', {params: params});
  }

  scraping(lessonId?: string, categoryId?: string, scrapingUrl?: string) {
    return this.http.post(environment.apiUrl + '/vocabularies/scraping', {
      lessonId,
      categoryId,
      scrapingUrl
    });
  }
}
