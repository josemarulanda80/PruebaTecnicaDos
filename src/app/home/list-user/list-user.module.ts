import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListUserRoutingModule } from './list-user-routing.module';
import { ListComponent } from './list/list.component';
import { MaterialModule } from 'src/app/common/material/material.module';
import { ListUserComponent } from './list-user.component';
import { AddUserComponent } from './add-user/add-user.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListComponent,
    ListUserComponent,
    AddUserComponent
  
  ],
  imports: [
    CommonModule,
    ListUserRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class ListUserModule { }
