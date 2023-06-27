import {Component, OnInit} from '@angular/core';
import {CategoryModel} from "../../models/category.model";
import {LessonModel} from "../../models/lesson.model";
import {LessonService} from "../../services/lesson.service";
import {CategoryService} from "../../services/category.service";
import {UtilsShared} from "../../shareds/utils.shared";
import {GrammarService} from "../../services/grammar.service";
import {GrammarModel} from "../../models/grammar.model";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-grammar',
  templateUrl: './grammar.component.html',
  styleUrls: ['./grammar.component.scss']
})
export class GrammarComponent implements OnInit {
  categories: CategoryModel[] = [];
  categoryTrees: any = [];
  grammars: GrammarModel[] = [];
  lessons: LessonModel[] = [];
  filter: { lessonId?: string, categoryId?: string } = {};

  constructor(
    private grammarService: GrammarService,
    private lessonService: LessonService,
    private categoryService: CategoryService,
    private utilsShared: UtilsShared,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.fetchListCategory();
    this.fetchListCategory();
    this.route.queryParams.subscribe((params: any) => {
      if (params.cateId) {
        this.filter.categoryId = params.cateId;
        this.fetchListLesson();
      }

      if (params.lessonId) {
        this.filter.lessonId = params.lessonId;
      }

      this.fetchList();
    });
  }

  fetchList() {
    this.grammarService.findAll(this.filter).subscribe((grammars) => {
      this.grammars = grammars;
    });
  }

  fetchListCategory() {
    this.categoryService.findAll().subscribe((categories) => {
      this.categories = categories;
      this.categoryTrees = this.utilsShared.treeForNgZorro(categories);
    });
  }

  fetchListLesson() {
    this.lessonService.findAll(this.filter).subscribe(results => {
      this.lessons = results;
    });
  }

  openModal() {
  }

  onFilterLessonChange(lessonId: any) {
    this.fetchList();
  }

  onFilterCategoryChange(categoryId: any) {
    this.fetchListLesson();
  }
}
