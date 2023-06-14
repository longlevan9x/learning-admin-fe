import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LessonRoutingModule } from './lesson-routing.module';
import { LessonComponent } from './lesson.component';
import { LessonFormModalComponent } from './lesson-form-modal/lesson-form-modal.component';
import {NzIconModule} from "ng-zorro-antd/icon";
import {NzTableModule} from "ng-zorro-antd/table";
import {FormsModule} from "@angular/forms";
import {NzSelectModule} from "ng-zorro-antd/select";


@NgModule({
  declarations: [
    LessonComponent,
    LessonFormModalComponent
  ],
    imports: [
        CommonModule,
        LessonRoutingModule,
        NzIconModule,
        NzTableModule,
        FormsModule,
        NzSelectModule
    ]
})
export class LessonModule { }
