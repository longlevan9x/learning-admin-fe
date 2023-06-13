import { Component } from '@angular/core';
import {NzModalService} from "ng-zorro-antd/modal";
import {LessonFormModalComponent} from "./lesson-form-modal/lesson-form-modal.component";

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.scss']
})
export class LessonComponent {
  lessons = [
    {id: 1, name: '初めて', bookId: "123"},
    {id: 2, name: 'ありがと', bookId: "123"},
  ];

  constructor(private modalService: NzModalService) {
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
        if (!result.id) {
          result.id = this.lessons.length + 1;
          result.bookId = '123';
          this.lessons.push(result);
        } else {
          // update book
        }
      }
    });
  }
}
