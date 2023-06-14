import {Component, OnInit} from '@angular/core';
import {NzModalService} from "ng-zorro-antd/modal";
import {LessonFormModalComponent} from "./lesson-form-modal/lesson-form-modal.component";
import {LessonModel} from "../../models/lesson.model";
import {LessonService} from "../../services/lesson.service";
import {BookService} from "../../services/book.service";
import {BookModel} from "../../models/book.model";

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.scss']
})
export class LessonComponent implements OnInit {
  lessons: LessonModel[] = [];
  books: BookModel[] = [];

  constructor(private modalService: NzModalService, private lessonService: LessonService,
              private bookService: BookService) {
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
    this.lessonService.findAll().subscribe(results => {
      this.lessons = results;
    });
  }

  fetchListBook() {
    this.bookService.findAll().subscribe(results => {
      this.books = results;
    });
  }

  remove(id: string) {
    this.lessonService.remove(id).subscribe(result => {
      console.log(result);
      this.fetchList();
    });
  }

  fetchListSection() {
    this.lessonService.findAllSection().subscribe(results => {
      console.log(results);
    })
  }

  getBook(id?: string) {
    return this.books.find(x => x._id === id);
  }

  ngOnInit(): void {
    this.fetchList();
    this.fetchListBook();
    this.fetchListSection();
  }
}
