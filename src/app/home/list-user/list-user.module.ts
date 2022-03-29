import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListUserRoutingModule } from './list-user-routing.module';
import { ListComponent } from './list/list.component';
import { MaterialModule } from 'src/app/common/material/material.module';
import { ListUserComponent } from './list-user.component';


@NgModule({
  declarations: [
    ListComponent,
    ListUserComponent
  
  ],
  imports: [
    CommonModule,
    ListUserRoutingModule,
    MaterialModule
  ]
})
export class ListUserModule { }
