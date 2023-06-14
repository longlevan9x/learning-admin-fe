import {Component, OnInit} from '@angular/core';
import {NzModalService} from "ng-zorro-antd/modal";
import {BookFormModalComponent} from "./book-form-modal/book-form-modal.component";
import {BookService} from "../../services/book.service";
import {BookModel} from "../../models/book.model";
import {CategoryService} from "../../services/category.service";
import {CategoryModel} from "../../models/category.model";

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
  books: BookModel[] = [];
  categories: CategoryModel[] = [];

  constructor(private modalService: NzModalService,
              private bookService: BookService,
              private categoryService: CategoryService,
  ) {
  }

  ngOnInit() {
    this.fetchList();
    this.fetchListCategory();
  }

  openModal(book?: any): void {
    const modalRef = this.modalService.create({
      nzTitle: undefined,
      nzContent: BookFormModalComponent,
      nzFooter: null,
      nzData: {
        book: book || {}
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
          this.bookService.update(book._id, book).subscribe(result1 => {
            console.log(result1);
          });
        }
      }
    });
  }

  fetchListCategory() {
    this.categoryService.findAll().subscribe((result) => {
      this.categories = result;
    });
  }

  fetchList() {
    this.bookService.findAll().subscribe((books: BookModel[]) => {
      this.books = books;
    });
  }

  remove(id: string) {
    this.bookService.remove(id).subscribe(result => {
      console.log(result);
      this.fetchList();
    });
  }

  getCategory(id: string) {
    return this.categories.find(c => c._id === id);
  }
}
