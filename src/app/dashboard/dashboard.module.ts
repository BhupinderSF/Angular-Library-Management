import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes }   from '@angular/router';
import { CommonModule } from '@angular/common';
import {NgxPaginationModule} from 'ngx-pagination';
// custom commonent
import { DashboardComponent } from './dashboard.component';

const routes: Routes= [
    {
      path:'',component:DashboardComponent,
      data:{
          breadcumb: "Dashboard"
      }
    }
  ];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        NgxPaginationModule
    ],
    declarations: [
        DashboardComponent
    ],
    providers: [
    ]
})
export class DashboardModule { }
