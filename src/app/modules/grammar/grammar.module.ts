import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {GrammarRoutingModule} from './grammar-routing.module';
import {GrammarComponent} from './grammar.component';
import {FormsModule} from "@angular/forms";
import {NgZorroAntdModule} from "../../ng-zorro-antd.module";
import {NzIconModule} from "ng-zorro-antd/icon";


@NgModule({
  declarations: [
    GrammarComponent
  ],
  imports: [
    CommonModule,
    GrammarRoutingModule,
    FormsModule,
    NgZorroAntdModule,
    NzIconModule
  ]
})
export class GrammarModule {
}
