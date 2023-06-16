import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VocabularyRoutingModule } from './vocabulary-routing.module';
import { VocabularyComponent } from './vocabulary.component';
import {NzIconModule} from "ng-zorro-antd/icon";
import {NzTableModule} from "ng-zorro-antd/table";


@NgModule({
  declarations: [
    VocabularyComponent
  ],
    imports: [
        CommonModule,
        VocabularyRoutingModule,
        NzIconModule,
        NzTableModule
    ]
})
export class VocabularyModule { }
