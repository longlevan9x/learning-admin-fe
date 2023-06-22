import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/books'},
  { path: 'books', loadChildren: () => import('./modules/book/book.module').then(m => m.BookModule) },
  { path: 'lessons', loadChildren: () => import('./modules/lesson/lesson.module').then(m => m.LessonModule) },
  { path: 'categories', loadChildren: () => import('./modules/category/category.module').then(m => m.CategoryModule) },
  { path: 'vocabularies', loadChildren: () => import('./modules/vocabulary/vocabulary.module').then(m => m.VocabularyModule) },
  { path: 'grammars', loadChildren: () => import('./modules/grammar/grammar.module').then(m => m.GrammarModule) },
  { path: 'kanjis', loadChildren: () => import('./modules/kanji/kanji.module').then(m => m.KanjiModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
