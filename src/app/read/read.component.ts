import { Component, OnInit } from '@angular/core';
import {Book} from '../book';
import {BookService} from '../book.service';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {
  listReadBook: Book[];
  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.bookService.getBooks().subscribe(next => (this.listReadBook = next), error => (this.listReadBook = []));
  }

}
