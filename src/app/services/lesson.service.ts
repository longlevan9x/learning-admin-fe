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


  findAll(params?: any): Observable<any> {
    return this.http.get(environment.apiUrl + '/lessons', {params: params});
  }

  create(body: any): Observable<any> {
    return this.http.post(environment.apiUrl + '/lessons', body);
  }

  update(id: string, body: any) {
    return this.http.put(environment.apiUrl + '/lessons/' + id, body);
  }

  remove(id?: string) {
    return this.http.delete(environment.apiUrl + '/lessons/' + id);
  }

  findAllSection() {
    return this.http.get(environment.apiUrl + '/lessons/sections');
  }
  clone(categoryId: string) {
    return this.http.post(environment.apiUrl + '/lessons/clone', {categoryId});
  }
}
