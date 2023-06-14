import {Component, EventEmitter, inject, Input, OnInit} from '@angular/core';
import {NZ_MODAL_DATA, NzModalRef} from "ng-zorro-antd/modal";
import {CategoryService} from "../../../services/category.service";
import {CategoryModel} from "../../../models/category.model";
import {BookModel} from "../../../models/book.model";

@Component({
  selector: 'app-book-form-modal',
  templateUrl: './book-form-modal.component.html',
  styleUrls: ['./book-form-modal.component.scss']
})
export class BookFormModalComponent implements OnInit {
  readonly nzModalData: { book: BookModel } = inject(NZ_MODAL_DATA);
  readonly #modal = inject(NzModalRef);
  categories: CategoryModel[] = [];

  constructor(private categoryService: CategoryService) {
  }

  save() {
    this.#modal.destroy(this.nzModalData.book);
  }

  close() {
    this.#modal.destroy();
  }

  ngOnInit(): void {
    this.categoryService.findAll().subscribe((result) => {
      this.categories = result;
    });
  }
}
