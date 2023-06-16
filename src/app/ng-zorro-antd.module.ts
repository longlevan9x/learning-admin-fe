import { NgModule } from '@angular/core';
import {NzLayoutModule} from "ng-zorro-antd/layout";
import {NzMenuModule} from "ng-zorro-antd/menu";
import {NzPageHeaderModule} from "ng-zorro-antd/page-header";
import {NzBreadCrumbModule} from "ng-zorro-antd/breadcrumb";
import {NzTableModule} from "ng-zorro-antd/table";
import {NzModalModule} from "ng-zorro-antd/modal";
import {NzSelectModule} from "ng-zorro-antd/select";
import {NzTreeSelectModule} from "ng-zorro-antd/tree-select";

@NgModule({
  exports: [
    NzLayoutModule,
    NzMenuModule,
    NzPageHeaderModule,
    NzBreadCrumbModule,
    NzTableModule,
    NzModalModule,
    NzSelectModule,
    NzTreeSelectModule
  ],
})
export class NgZorroAntdModule {}
