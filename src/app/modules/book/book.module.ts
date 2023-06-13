import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookRoutingModule } from './book-routing.module';
import { BookComponent } from './book.component';
import {NgZorroAntdModule} from "../../ng-zorro-antd.module";
import { BookFormModalComponent } from './book-form-modal/book-form-modal.component';
import {IconsProviderModule} from "../../icons-provider.module";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    BookComponent,
    BookFormModalComponent,
  ],
  imports: [
    CommonModule,
    BookRoutingModule,
    NgZorroAntdModule,
    IconsProviderModule,
    FormsModule
  ]
})
export class BookModule { }
