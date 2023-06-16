import {Component, OnInit} from '@angular/core';
import {VocabularyService} from "../../services/vocabulary.service";
import {VocabularyModel} from "../../models/vocabulary.model";

@Component({
  selector: 'app-vocabulary',
  templateUrl: './vocabulary.component.html',
  styleUrls: ['./vocabulary.component.scss']
})
export class VocabularyComponent implements OnInit {
  vocabularies: VocabularyModel[] = [];

  constructor(
    private vocabularyService: VocabularyService,
  ) {
  }

  ngOnInit(): void {
    this.fetchList();
  }

  fetchList() {
    this.vocabularyService.findAll().subscribe((vocabularies) => {
      this.vocabularies = vocabularies;
    });
  }
}
