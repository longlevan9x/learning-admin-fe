import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KanjiComponent } from './kanji.component';

const routes: Routes = [{ path: '', component: KanjiComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KanjiRoutingModule { }
