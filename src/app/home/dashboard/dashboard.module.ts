import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgxLoadingModule } from 'ngx-loading';
import { MaterialModule } from 'src/app/common/material/material.module';
import { HomeModule } from '../home.module';
import { DashboardBoxComponent } from './dashboard-box/dashboard-box.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';


@NgModule({
  declarations: [
    DashboardComponent,
    DashboardBoxComponent
  ],
    imports: [
        CommonModule,
        DashboardRoutingModule,
        FormsModule,

        ReactiveFormsModule,

        HomeModule,
        NgxLoadingModule,
       
        RouterModule,
        MaterialModule
    ]
})
export class DashboardModule { }
