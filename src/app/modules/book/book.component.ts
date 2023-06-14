import {Component, OnInit} from '@angular/core';
import {NzModalService} from "ng-zorro-antd/modal";
import {BookFormModalComponent} from "./book-form-modal/book-form-modal.component";
import {BookService} from "../../services/book.service";
import {BookModel} from "../../models/book.model";

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
  books: BookModel[] = [];

  constructor(private modalService: NzModalService, private bookService: BookService) {
  }

  ngOnInit() {
    this.bookService.findAll().subscribe((books: BookModel[]) => {
      this.books = books;
    });
  }

  openModal(book?: any): void {
    const modalRef = this.modalService.create({
      nzTitle: undefined,
      nzContent: BookFormModalComponent,
      nzFooter: null,
      nzData: {
        book: book || {_id: '', name: ""}
      },
    });

    modalRef.afterClose.subscribe((result) => {
      if (result) {
        if (!result._id) {
          this.bookService.create(result).subscribe(result1 => {
            console.log(result1)
            this.books.push(result);
          });
        } else {
          // update book
          this.bookService.update(book._id , book).subscribe(result1 => {
            console.log(result1);
          });
        }
      }
    });
  }
}
