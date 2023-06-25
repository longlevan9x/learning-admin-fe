import {Component, OnInit} from '@angular/core';
import {VocabularyService} from "../../services/vocabulary.service";
import {VocabularyModel} from "../../models/vocabulary.model";
import {LessonService} from "../../services/lesson.service";
import {LessonModel} from "../../models/lesson.model";
import {CategoryModel} from "../../models/category.model";
import {CategoryService} from "../../services/category.service";
import {UtilsShared} from "../../shareds/utils.shared";
import {ActivatedRoute} from "@angular/router";
import * as XLSX from "xlsx";

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
    private utilsShared: UtilsShared,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
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

  getLesson(lessonId?: string) {
    return this.lessons.find(l => l._id === lessonId);
  }

  exportexcel(): void {
    const data = this.vocabularies.map(k => {
      return {
        kanji: k.kanji?.replace(/(\(.*?\))/, ''),
        vocabulary: k.vocabulary,
        vietnam_sound: k.vietnam_sound,
        mean: k.mean,
      }
    });

    const lesson = this.getLesson(this.filter.lessonId);

    const ws: XLSX.WorkSheet =XLSX.utils.json_to_sheet(data);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    XLSX.writeFile(wb, `vocabulary-${lesson?.name}.xlsx`);
  }
}
