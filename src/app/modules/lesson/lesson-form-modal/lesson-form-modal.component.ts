import {Component, inject, OnInit} from '@angular/core';
import {NZ_MODAL_DATA, NzModalRef} from "ng-zorro-antd/modal";
import {LessonModel} from "../../../models/lesson.model";
import {BookModel} from "../../../models/book.model";
import {BookService} from "../../../services/book.service";

@Component({
  selector: 'app-lesson-form-modal',
  templateUrl: './lesson-form-modal.component.html',
  styleUrls: ['./lesson-form-modal.component.scss']
})
export class LessonFormModalComponent implements OnInit {
  readonly nzModalData: { lesson: LessonModel } = inject(NZ_MODAL_DATA);
  readonly #modal = inject(NzModalRef);
  books: BookModel[] = [];

  constructor(private bookService: BookService) {
  }

  save() {
    this.#modal.destroy(this.nzModalData.lesson);
  }

  close() {
    this.#modal.destroy();
  }

  ngOnInit(): void {
    this.bookService.findAll().subscribe((result) => {
      this.books = result;
    });
  }
}
