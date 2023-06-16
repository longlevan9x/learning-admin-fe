import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {VocabularyRoutingModule} from './vocabulary-routing.module';
import {VocabularyComponent} from './vocabulary.component';
import {IconsProviderModule} from "../../icons-provider.module";
import {NgZorroAntdModule} from "../../ng-zorro-antd.module";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    VocabularyComponent
  ],
  imports: [
    CommonModule,
    VocabularyRoutingModule,
    FormsModule,
    IconsProviderModule,
    NgZorroAntdModule,
  ]
})
export class VocabularyModule {
}
