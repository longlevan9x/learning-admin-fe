import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LessonRoutingModule} from './lesson-routing.module';
import {LessonComponent} from './lesson.component';
import {LessonFormModalComponent} from './lesson-form-modal/lesson-form-modal.component';
import {FormsModule} from "@angular/forms";
import {NgZorroAntdModule} from "../../ng-zorro-antd.module";
import {IconsProviderModule} from "../../icons-provider.module";


@NgModule({
  declarations: [
    LessonComponent,
    LessonFormModalComponent
  ],
  imports: [
    CommonModule,
    LessonRoutingModule,
    FormsModule,
    IconsProviderModule,
    NgZorroAntdModule,
  ]
})
export class LessonModule {
}
