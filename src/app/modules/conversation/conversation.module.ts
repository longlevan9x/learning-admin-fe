import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConversationRoutingModule } from './conversation-routing.module';
import { ConversationComponent } from './conversation.component';
import {FormsModule} from "@angular/forms";
import {NgZorroAntdModule} from "../../ng-zorro-antd.module";
import {IconsProviderModule} from "../../icons-provider.module";


@NgModule({
  declarations: [
    ConversationComponent
  ],
    imports: [
        CommonModule,
        ConversationRoutingModule,
      FormsModule,
      NgZorroAntdModule,
      IconsProviderModule
    ]
})
export class ConversationModule { }
