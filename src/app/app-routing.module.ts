import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/books'},
  { path: 'books', loadChildren: () => import('./modules/book/book.module').then(m => m.BookModule) },
  { path: 'lessons', loadChildren: () => import('./modules/lesson/lesson.module').then(m => m.LessonModule) },
  { path: 'categories', loadChildren: () => import('./modules/category/category.module').then(m => m.CategoryModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
