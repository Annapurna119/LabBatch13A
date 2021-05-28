import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { shareReplay, map } from 'rxjs/operators';
import { Categories } from 'src/app/Models/categories';
//import { Product } from 'src/app/services/product.service';
import { Book } from './Models/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }

  categories$ = this.http.get<Categories[]>("https://bookcart.azurewebsites.net/api/Book/GetCategoriesList").pipe(shareReplay(1));

  books$ = this.getAllBooks().pipe(shareReplay(1))

  getAllBooks() {
    return this.http.get<Book[]>('https://bookcart.azurewebsites.net/api/Book');
  }

  getBookById(id: number) {
    return this.books$.pipe(map(book => book.find(b => b.bookId === id)));
  }
}