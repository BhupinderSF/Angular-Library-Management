import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes }   from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MyDatePickerModule } from 'mydatepicker';
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
        MyDatePickerModule
    ],
    declarations: [IssuemeComponent],
    providers:[]
})

export class IssuemeModule { }