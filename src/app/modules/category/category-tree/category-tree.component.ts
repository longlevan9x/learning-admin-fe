import {Component, Input, OnInit} from '@angular/core';
import {CategoryModel} from "../../../models/category.model";
import {LessonService} from "../../../services/lesson.service";
import {CategoryService} from "../../../services/category.service";
import {NzMessageService} from "ng-zorro-antd/message";

@Component({
  selector: 'app-category-tree',
  templateUrl: './category-tree.component.html',
  styleUrls: ['./category-tree.component.scss']
})
export class CategoryTreeComponent implements OnInit {
  @Input() categories?: CategoryModel[] | any = [];

  constructor(private lessonService: LessonService, private categoryService: CategoryService,
              private nzMessageService: NzMessageService) {
  }

  ngOnInit(): void {
    // console.log(this.categories)
  }

  openModal(category: CategoryModel) {
  }

  remove(id: string) {
    this.categoryService.remove(id).subscribe(
      {
        next: (value: any) => {
          this.nzMessageService.success('success');
        },
        error: (err: any) => {
          this.nzMessageService.error(err.message);
        },
        complete: () => {
          this.categories = this.categories.filter((c: CategoryModel) => c._id !== id);
        }
      });
  }

  scrapingLesson(categoryId: string) {
    this.lessonService.scraping(categoryId).subscribe({
      next: (value: any) => {
        this.nzMessageService.success('success');
      },
      error: (err: any) => {
        this.nzMessageService.error(err.message);
      },
      complete: () => {
        console.log('done');
      }
    });
  }

  toggleChildren(index: number) {
    this.categories[index].showChildren = !this.categories[index].showChildren;
  }

  getIconToggle(category: CategoryModel) {
    if (!category.children?.length) {
      return 'minus';
    }

    return category.showChildren ? 'caret-down' : 'caret-right';
  }
}
