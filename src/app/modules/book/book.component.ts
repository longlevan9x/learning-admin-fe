import {Component} from '@angular/core';
import {NzModalService} from "ng-zorro-antd/modal";
import {BookFormModalComponent} from "./book-form-modal/book-form-modal.component";

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent {
  books = [
    {id: 1, name: 'Mimikara', categoryId: "123"},
    {id: 2, name: 'Soumatome', categoryId: "123"},
  ];

  constructor(private modalService: NzModalService) {
  }

  openModal(book?: any): void {
    const modalRef = this.modalService.create({
      nzTitle: undefined,
      nzContent: BookFormModalComponent,
      nzFooter: null,
      nzData: {
        book: book || {id: '', name: ""}
      },
    });

    modalRef.afterClose.subscribe((result) => {
      if (result) {
        if (!result.id) {
          result.id = this.books.length + 1;
          result.categoryId = '123';
          this.books.push(result);
        } else {
          // update book
        }
      }
    });
  }
}
