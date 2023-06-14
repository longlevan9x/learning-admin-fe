import {Component, OnInit} from '@angular/core';
import {NzModalService} from "ng-zorro-antd/modal";
import {CategoryFormModalComponent} from "./category-form-modal/category-form-modal.component";
import {CategoryModel} from "../../models/category.model";
import {CategoryService} from "../../services/category.service";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  categories: CategoryModel[] = [];

  constructor(private modalService: NzModalService, private categoryService: CategoryService) {
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
          this.categoryService.create(category).subscribe((result1) => {
            console.log(result1)
            this.categories.push(result);
          })
        } else {
          // update book
          this.categoryService.update(category._id, category).subscribe(result1 => {
            console.log(result1);
          });
        }
      }
    });
  }

  ngOnInit(): void {
    this.categoryService.findAll().subscribe((categories) => {
      this.categories = categories;
    })
  }
}
