import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class LessonService {
  constructor(private http: HttpClient) {
  }


  findAll(): Observable<any> {
    return this.http.get(environment.apiUrl + '/lesson');
  }

  create(body: any): Observable<any> {
    return this.http.post(environment.apiUrl + '/lesson', body);
  }

  update(id: string, body: any) {
    return this.http.put(environment.apiUrl + '/lesson/' + id, body);
  }

  remove(id: string) {
    return this.http.delete(environment.apiUrl + '/lesson/' + id);
  }
}
