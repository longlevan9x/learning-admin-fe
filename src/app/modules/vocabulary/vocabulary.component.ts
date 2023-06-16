import {Component, OnInit} from '@angular/core';
import {VocabularyService} from "../../services/vocabulary.service";
import {VocabularyModel} from "../../models/vocabulary.model";
import {LessonService} from "../../services/lesson.service";
import {LessonModel} from "../../models/lesson.model";

@Component({
  selector: 'app-vocabulary',
  templateUrl: './vocabulary.component.html',
  styleUrls: ['./vocabulary.component.scss']
})
export class VocabularyComponent implements OnInit {
  vocabularies: VocabularyModel[] = [];
  lessons: LessonModel[] = [];
  filter: {lessonId?: string} = {};

  constructor(
    private vocabularyService: VocabularyService,
    private lessonService: LessonService,
  ) {
  }

  ngOnInit(): void {
    this.fetchList();
    this.fetchListLesson();
  }

  fetchList() {
    this.vocabularyService.findAll(this.filter).subscribe((vocabularies) => {
      this.vocabularies = vocabularies;
    });
  }

  fetchListLesson() {
    this.lessonService.findAll().subscribe(results => {
      this.lessons = results;
    });
  }

  openModal() {}

  onFilterLessonChange(lessonId: any) {
    this.fetchList();
  }
}
