import {Component, OnInit} from '@angular/core';
import {CategoryModel} from "../../models/category.model";
import {LessonModel} from "../../models/lesson.model";
import {LessonService} from "../../services/lesson.service";
import {CategoryService} from "../../services/category.service";
import {UtilsShared} from "../../shareds/utils.shared";
import {ActivatedRoute} from "@angular/router";
import {KanjiService} from "../../services/kanji.service";
import {KanjiModel} from "../../models/kanji.model";
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-kanji',
  templateUrl: './kanji.component.html',
  styleUrls: ['./kanji.component.scss']
})
export class KanjiComponent implements OnInit {
  categories: CategoryModel[] = [];
  categoryTrees: any = [];
  kanjis: KanjiModel[] = [];
  lessons: LessonModel[] = [];
  filter: { lessonId?: string, categoryId?: string } = {};

  constructor(
    private kanjiService: KanjiService,
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
    this.kanjiService.findAll(this.filter).subscribe((kanjis) => {
      this.kanjis = kanjis;
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

  exportexcel(): void {
    const data = this.kanjis.map(k => {
      return {
        kanji: k.kanji?.replace(/(\(.*?\))/, ''),
        vocabulary: k.vocabulary,
        vietnam_sound: k.vietnam_sound,
        mean: k.mean,
      }
    });

    const ws: XLSX.WorkSheet =XLSX.utils.json_to_sheet(data);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    XLSX.writeFile(wb, 'kanji.xlsx');
  }
}
