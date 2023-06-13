import { Component } from '@angular/core';
import {NzModalService} from "ng-zorro-antd/modal";
import {CategoryFormModalComponent} from "./category-form-modal/category-form-modal.component";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent {
  categories = [
    {id: 1, name: 'Minnanonihong', parentId: "123"},
    {id: 2, name: 'N2', parentId: "123"},
  ];

  constructor(private modalService: NzModalService) {
  }

  openModal(category?: any): void {
    const modalRef = this.modalService.create({
      nzTitle: undefined,
      nzContent: CategoryFormModalComponent,
      nzFooter: null,
      nzData: {
        category: category || {id: '', name: ""}
      },
    });

    modalRef.afterClose.subscribe((result) => {
      if (result) {
        if (!result.id) {
          result.id = this.categories.length + 1;
          result.parentId = '123';
          this.categories.push(result);
        } else {
          // update book
        }
      }
    });
  }
}
