import {Component, inject, OnInit} from '@angular/core';
import {NZ_MODAL_DATA, NzModalRef} from "ng-zorro-antd/modal";
import {CategoryModel} from "../../../models/category.model";
import {CategoryService} from "../../../services/category.service";

@Component({
  selector: 'app-category-form-modal',
  templateUrl: './category-form-modal.component.html',
  styleUrls: ['./category-form-modal.component.scss']
})
export class CategoryFormModalComponent implements OnInit {
  readonly nzModalData: { category: CategoryModel } = inject(NZ_MODAL_DATA);
  readonly #modal = inject(NzModalRef);
  categories: CategoryModel[] = [];

  constructor(private categoryService: CategoryService) {
  }

  save() {
    this.#modal.destroy(this.nzModalData.category);
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
