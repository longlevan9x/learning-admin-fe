import {Component, inject} from '@angular/core';
import {NZ_MODAL_DATA, NzModalRef} from "ng-zorro-antd/modal";
import {CategoryModel} from "../../../models/category.model";

@Component({
  selector: 'app-category-form-modal',
  templateUrl: './category-form-modal.component.html',
  styleUrls: ['./category-form-modal.component.scss']
})
export class CategoryFormModalComponent {
  readonly nzModalData: { category: CategoryModel } = inject(NZ_MODAL_DATA);
  readonly #modal = inject(NzModalRef);

  save() {
    this.#modal.destroy(this.nzModalData.category);
  }

  close() {
    this.#modal.destroy();
  }
}
