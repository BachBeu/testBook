import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {BookService} from '../book.service';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent implements OnInit {
  private createForm: FormGroup;
  constructor(private  fb: FormBuilder, private bookService: BookService) { }

  ngOnInit() {
    this.createForm = this.fb.group({
      name: ['']
    });
  }
  onsubmit() {
    const {value} = this.createForm;
    this.bookService.createBook(value).subscribe(next => {
      this.createForm.reset({
        name: [''],
      });
    }
    );
  }

}
