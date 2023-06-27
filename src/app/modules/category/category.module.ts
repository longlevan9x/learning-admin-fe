import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryRoutingModule } from './category-routing.module';
import { CategoryComponent } from './category.component';
import { CategoryFormModalComponent } from './category-form-modal/category-form-modal.component';
import {FormsModule} from "@angular/forms";
import { CategoryTreeComponent } from './category-tree/category-tree.component';
import {NgZorroAntdModule} from "../../ng-zorro-antd.module";
import {IconsProviderModule} from "../../icons-provider.module";


@NgModule({
  declarations: [
    CategoryComponent,
    CategoryFormModalComponent,
    CategoryTreeComponent
  ],
  imports: [
    CommonModule,
    CategoryRoutingModule,
    FormsModule,
    NgZorroAntdModule,
    IconsProviderModule
  ]
})
export class CategoryModule { }
