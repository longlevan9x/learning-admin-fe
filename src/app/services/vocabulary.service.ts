import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {catchError, Observable, throwError} from "rxjs";

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

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}
