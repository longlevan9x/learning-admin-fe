import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) {
  }


  findAll(): Observable<any> {
    return this.http.get(environment.apiUrl + '/categories');
  }

  create(category: any) {
    return this.http.post(environment.apiUrl + '/categories', category);
  }

  update(id: string, category: any) {
    return this.http.put(environment.apiUrl + '/categories/' + id, category);
  }
}
