import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes }   from '@angular/router';
import { CommonModule } from '@angular/common';
// custom commonent
import { DashboardComponent } from './dashboard.component';

const routes: Routes= [
    {
      path:'',component:DashboardComponent
    }
  ];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
        DashboardComponent
    ],
    providers: [
    ]
})
export class DashboardModule { }
