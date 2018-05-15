import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes }   from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// Custom component
import { IssuemeComponent } from '../issueme/issueme.component';
import { MyDatePickerModule } from 'mydatepicker';

const routes: Routes= [
    {
      path:'',component:IssuemeComponent
    }
  ];

@NgModule({
    imports:[
        CommonModule,
        RouterModule.forChild(routes),
        MyDatePickerModule,
        FormsModule
    ],
    declarations: [IssuemeComponent],
    providers:[]
})

export class IssuemeModule { }