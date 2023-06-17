import {Component, OnInit} from '@angular/core';
import {VocabularyService} from "../../services/vocabulary.service";
import {VocabularyModel} from "../../models/vocabulary.model";
import {LessonService} from "../../services/lesson.service";
import {LessonModel} from "../../models/lesson.model";
import {CategoryModel} from "../../models/category.model";
import {CategoryService} from "../../services/category.service";
import {UtilsShared} from "../../shareds/utils.shared";

@Component({
  selector: 'app-vocabulary',
  templateUrl: './vocabulary.component.html',
  styleUrls: ['./vocabulary.component.scss']
})
export class VocabularyComponent implements OnInit {
  categories: CategoryModel[] = [];
  categoryTrees: any = [];
  vocabularies: VocabularyModel[] = [];
  lessons: LessonModel[] = [];
  filter: { lessonId?: string, categoryId?: string } = {};

  constructor(
    private vocabularyService: VocabularyService,
    private lessonService: LessonService,
    private categoryService: CategoryService,
    private utilsShared: UtilsShared
  ) {
  }

  ngOnInit(): void {
    this.fetchList();
    this.fetchListCategory();
  }

  fetchList() {
    this.vocabularyService.findAll(this.filter).subscribe((vocabularies) => {
      this.vocabularies = vocabularies;
    });
  }

  fetchListCategory() {
    this.categoryService.findAll().subscribe((categories) => {
      this.categories = categories;
      this.categoryTrees = this.utilsShared.convertToTree(categories, '', {key: 'key', value: 'title'});
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
