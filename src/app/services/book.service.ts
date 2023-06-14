import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BookService {
  constructor(private http: HttpClient) {
  }


  findAll(): Observable<any> {
    return this.http.get(environment.apiUrl + '/books');
  }

  create(book: any) {
    return this.http.post(environment.apiUrl + '/books', book);
  }

  update(id: string, book: any) {
    return this.http.put(environment.apiUrl + '/books/' + id, book);
  }
}
