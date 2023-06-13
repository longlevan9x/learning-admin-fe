import {Component, EventEmitter, inject, Input} from '@angular/core';
import {NZ_MODAL_DATA, NzModalRef} from "ng-zorro-antd/modal";

@Component({
  selector: 'app-book-form-modal',
  templateUrl: './book-form-modal.component.html',
  styleUrls: ['./book-form-modal.component.scss']
})
export class BookFormModalComponent {
  readonly nzModalData: { book: any } = inject(NZ_MODAL_DATA);
  readonly #modal = inject(NzModalRef);

  save() {
    this.#modal.destroy(this.nzModalData.book);
  }

  close() {
    this.#modal.destroy();
  }
}
