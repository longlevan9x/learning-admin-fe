import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {KanjiRoutingModule} from './kanji-routing.module';
import {KanjiComponent} from './kanji.component';
import {NgZorroAntdModule} from "../../ng-zorro-antd.module";
import {IconsProviderModule} from "../../icons-provider.module";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    KanjiComponent
  ],
  imports: [
    CommonModule,
    KanjiRoutingModule,
    FormsModule,
    NgZorroAntdModule,
    IconsProviderModule
  ]
})
export class KanjiModule {
}
