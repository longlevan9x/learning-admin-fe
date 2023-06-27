import {Component, OnInit} from '@angular/core';
import {NzModalService} from "ng-zorro-antd/modal";
import {LessonFormModalComponent} from "./lesson-form-modal/lesson-form-modal.component";
import {LessonModel} from "../../models/lesson.model";
import {LessonService} from "../../services/lesson.service";
import {BookService} from "../../services/book.service";
import {BookModel} from "../../models/book.model";
import {CategoryService} from "../../services/category.service";
import {CategoryModel} from "../../models/category.model";
import {VocabularyService} from "../../services/vocabulary.service";
import {UtilsShared} from "../../shareds/utils.shared";
import {GrammarService} from "../../services/grammar.service";
import {KanjiService} from "../../services/kanji.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.scss']
})
export class LessonComponent implements OnInit {
  lessons: LessonModel[] = [];
  books: BookModel[] = [];
  categories: CategoryModel[] = [];
  categoryTrees: any[] = [];
  filter: { categoryId?: string } = {}
  subjects: string[] = [];
  SUBJECTS = {
    VOCABULARY: 'VOCABULARY',
    GRAMMAR: 'GRAMMAR',
    READING_PRACTICE: 'READING_PRACTICE',
    KANJI: 'KANJI',
    LISTENING: 'LISTENING',
    READING: 'READING',
  };

  constructor(
    private modalService: NzModalService,
    private lessonService: LessonService,
    private bookService: BookService,
    private categoryService: CategoryService,
    private vocabularyService: VocabularyService,
    private kanjiService: KanjiService,
    private grammarService: GrammarService,
    private utilsShared: UtilsShared,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  openModal(lesson?: any): void {
    const modalRef = this.modalService.create({
      nzTitle: undefined,
      nzContent: LessonFormModalComponent,
      nzFooter: null,
      nzData: {
        lesson: lesson || {id: '', name: ""}
      },
    });

    modalRef.afterClose.subscribe((result) => {
      if (result) {
        if (!result._id) {
          this.lessonService.create(result).subscribe(result1 => {
            this.lessons.push(result1);
          });
        } else {
          this.lessonService.update(lesson._id, result).subscribe(result1 => {
          });
        }
      }
    });
  }

  fetchList() {
    this.lessonService.findAll(this.filter).subscribe(results => {
      this.lessons = results;
    });
  }

  fetchListBook() {
    this.bookService.findAll().subscribe(results => {
      this.books = results;
    });
  }

  remove(id?: string) {
    this.lessonService.remove(id).subscribe(result => {
      console.log(result);
      this.fetchList();
    });
  }

  fetchListSubject() {
    this.lessonService.findAllSubject().subscribe((results: any) => {
      this.subjects = results;
    })
  }

  getBook(id?: string) {
    return this.books.find(x => x._id === id);
  }

  ngOnInit(): void {
    this.fetchListBook();
    this.fetchListSubject();
    this.fetchListCategory();
    this.route.queryParams
      .subscribe((params: any) => {
        if (params.cateId) {
          this.filter.categoryId = params.cateId;
        }

        this.fetchList();
      });
  }

  fetchListCategory() {
    this.categoryService.findAll().subscribe((categories) => {
      this.categories = categories;
      this.categoryTrees = this.utilsShared.convertToTree(categories, '', {key: 'key', value: 'title'});
    });
  }

  getCategory(id?: string) {
    return this.categories.find(c => c._id === id);
  }

  scrapingVocabulary(lessonId?: string, categoryId?: string, lessonCloneUrl?: string) {
    this.vocabularyService.scraping(lessonId, categoryId, lessonCloneUrl).subscribe(result => {
      console.log(result);
    });
  }

  scrapingKanji(lessonId?: string, categoryId?: string, lessonCloneUrl?: string) {
    this.kanjiService.scraping(lessonId, categoryId, lessonCloneUrl)
      .subscribe(result => {
        console.log(result);
      });
  }

  scrapingGrammar(lessonId?: string, lessonCloneUrl?: string) {
    this.grammarService.scraping(lessonId, lessonCloneUrl).subscribe(result => {
      console.log(result);
    });
  }

  scrapingSubject(lessonId?: string, lessonCloneUrl?: string, subject?: string) {
    if (subject === this.SUBJECTS.VOCABULARY) {
      this.scrapingVocabulary(lessonId, '', lessonCloneUrl);
    } else if (subject === this.SUBJECTS.GRAMMAR) {
      this.scrapingGrammar(lessonId, lessonCloneUrl);
    } else if (subject === this.SUBJECTS.KANJI) {
      this.scrapingKanji(lessonId, '', lessonCloneUrl);
    }
  }

  gotoDetailSubject(categoryId?: string, lessonId?: string, subject?: string) {
    const urls = {
      [this.SUBJECTS.VOCABULARY]: '/vocabularies',
      [this.SUBJECTS.KANJI]: '/kanjis',
      [this.SUBJECTS.GRAMMAR]: '/grammars',
    }

    this.router.navigate([urls[subject || '']], {
      queryParams: {cateId: categoryId, lessonId: lessonId}
    });
  }

  onFilterCategoryChange(categoryId: any) {
    this.fetchList();
  }
}
