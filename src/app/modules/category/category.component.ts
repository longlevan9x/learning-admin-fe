import {Component, OnInit} from '@angular/core';
import {NzModalService} from "ng-zorro-antd/modal";
import {CategoryFormModalComponent} from "./category-form-modal/category-form-modal.component";
import {CategoryModel} from "../../models/category.model";
import {CategoryService} from "../../services/category.service";
import {LessonService} from "../../services/lesson.service";
import {UtilsShared} from "../../shareds/utils.shared";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  categories: CategoryModel[] = [];
  tree: any[] = []

  constructor(
    private modalService: NzModalService,
    private utilsShared: UtilsShared,
              private categoryService: CategoryService, private lessonService: LessonService) {
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
      this.tree = this.utilsShared.convertToTree(categories, '');
    });
  }

  remove(id: string) {
    this.categoryService.remove(id).subscribe(result => {
      this.fetchList();
    });
  }

  getCategoryParent(id?: string) {
    return this.categories.find(c => c._id === id);
  }

  cloneLesson(categoryId: string) {
    this.lessonService.scraping(categoryId).subscribe(result => {
      console.log(result);
    });
  }
}
