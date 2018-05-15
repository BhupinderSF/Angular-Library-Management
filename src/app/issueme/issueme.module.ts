import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes }   from '@angular/router';
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
        RouterModule.forChild(routes)
    ],
    declarations: [IssuemeComponent],
    providers:[]
})

export class IssuemeModule { }