import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListUserRoutingModule } from './list-user-routing.module';
import { ListComponent } from './list/list.component';
import { MaterialModule } from 'src/app/common/material/material.module';
import { ListUserComponent } from './list-user.component';
import { AddUserComponent } from './add-user/add-user.component';


@NgModule({
  declarations: [
    ListComponent,
    ListUserComponent,
    AddUserComponent
  
  ],
  imports: [
    CommonModule,
    ListUserRoutingModule,
    MaterialModule
  ]
})
export class ListUserModule { }
