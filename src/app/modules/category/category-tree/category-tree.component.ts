import {Component, Input, OnInit} from '@angular/core';
import {CategoryModel} from "../../../models/category.model";
import {LessonService} from "../../../services/lesson.service";

@Component({
  selector: 'app-category-tree',
  templateUrl: './category-tree.component.html',
  styleUrls: ['./category-tree.component.scss']
})
export class CategoryTreeComponent implements OnInit {
  @Input() categories?: CategoryModel[] | any = [];

  constructor(private lessonService: LessonService) {
  }

  ngOnInit(): void {
    console.log(this.categories)
  }

  openModal(category: CategoryModel) {
  }

  remove(id: string) {

  }

  scrapingLesson(categoryId: string) {
    this.lessonService.scraping(categoryId).subscribe(result => {
      console.log(result);
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
