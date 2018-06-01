import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes }   from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {CalendarModule} from 'primeng/calendar';
// Custom component
import { IssuemeComponent } from '../issueme/issueme.component';

const routes: Routes= [
    {
      path:'',component:IssuemeComponent
    }
  ];

@NgModule({
    imports:[
        CommonModule,
        RouterModule.forChild(routes),
        FormsModule,
        CalendarModule
    ],
    declarations: [IssuemeComponent],
    providers:[]
})

export class IssuemeModule { }