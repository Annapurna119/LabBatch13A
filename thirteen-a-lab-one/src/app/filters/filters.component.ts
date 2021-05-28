import { Component, OnInit,Input } from '@angular/core';
import { Categories } from 'src/app/Models/categories';
import { BookService } from 'src/app/book.service';
import { EMPTY, Observable } from 'rxjs';
//import { Categories } from '../categories';
import { Book } from 'src/app/Models/book';
import { catchError } from 'rxjs/operators';



@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {
  @Input()
  category: String = '';

  categories$: Observable<Categories[]> | undefined;
  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.fetchCategories();
    console.log("landing page");
    
  }

  fetchCategories() {
    this.categories$ = this.bookService.categories$
      .pipe(
        catchError(err => {
          console.log('Error ocurred  ', err);
          return EMPTY;
        }));
      }
}