import {Component, inject} from '@angular/core';
import {NZ_MODAL_DATA, NzModalRef} from "ng-zorro-antd/modal";

@Component({
  selector: 'app-lesson-form-modal',
  templateUrl: './lesson-form-modal.component.html',
  styleUrls: ['./lesson-form-modal.component.scss']
})
export class LessonFormModalComponent {
  readonly nzModalData: { lesson: any } = inject(NZ_MODAL_DATA);
  readonly #modal = inject(NzModalRef);

  save() {
    this.#modal.destroy(this.nzModalData.lesson);
  }

  close() {
    this.#modal.destroy();
  }
}
