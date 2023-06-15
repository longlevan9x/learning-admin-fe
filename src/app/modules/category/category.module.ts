import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryRoutingModule } from './category-routing.module';
import { CategoryComponent } from './category.component';
import { CategoryFormModalComponent } from './category-form-modal/category-form-modal.component';
import {NzIconModule} from "ng-zorro-antd/icon";
import {NzTableModule} from "ng-zorro-antd/table";
import {FormsModule} from "@angular/forms";
import {NzSelectModule} from "ng-zorro-antd/select";


@NgModule({
  declarations: [
    CategoryComponent,
    CategoryFormModalComponent
  ],
  imports: [
    CommonModule,
    CategoryRoutingModule,
    NzIconModule,
    NzTableModule,
    FormsModule,
    NzSelectModule
  ]
})
export class CategoryModule { }
