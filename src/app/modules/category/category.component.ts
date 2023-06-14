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
        if (!result._id) {
          this.categoryService.create(result).subscribe((result1: CategoryModel) => {
            console.log(result1)
            this.categories.push(result1);
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
    this.fetchList();
  }

  fetchList() {
    this.categoryService.findAll().subscribe((categories) => {
      this.categories = categories;
    });
  }

  remove(id: string) {
    this.categoryService.remove(id).subscribe(result => {
      console.log(result);
      this.fetchList();
    });
  }
}
