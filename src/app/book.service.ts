import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Book} from './book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  apiURL = 'http://localhost:8081/books';
  constructor(private http: HttpClient) { }
  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.apiURL);
  }
  getBookById(id: string): Observable<Book> {
    return this.http.get<Book>(this.apiURL + id);
  }
  createBook(book: Book): Observable<any>{
    return this.http.post(this.apiURL, book);
  }
}
