import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LessonComponent } from './lesson.component';

const routes: Routes = [{ path: '', component: LessonComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LessonRoutingModule { }
