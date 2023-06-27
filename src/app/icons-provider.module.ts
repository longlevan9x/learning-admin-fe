import {NgModule} from '@angular/core';
import {NZ_ICONS, NzIconModule} from 'ng-zorro-antd/icon';

import {
  MenuFoldOutline,
  MenuUnfoldOutline,
  FormOutline,
  DashboardOutline,
  EditOutline,
  DeleteOutline,
  CaretRightFill,
  StopOutline,
  MinusOutline,
  CaretDownFill,
  ArrowRightOutline,
  MoreOutline
} from '@ant-design/icons-angular/icons';

const icons = [
  MenuFoldOutline,
  MenuUnfoldOutline,
  DashboardOutline,
  FormOutline,
  DeleteOutline,
  EditOutline,
  CaretRightFill,
  StopOutline,
  MinusOutline,
  CaretDownFill,
  ArrowRightOutline,
  MoreOutline
];

@NgModule({
  imports: [NzIconModule],
  exports: [NzIconModule],
  providers: [
    {provide: NZ_ICONS, useValue: icons}
  ]
})
export class IconsProviderModule {
}
