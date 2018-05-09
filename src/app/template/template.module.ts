import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplateRoutingModule } from './template-routing.module';
import { TemplateComponent } from './template.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
    imports: [
        CommonModule,
        TemplateRoutingModule
    ],
    declarations: [
        TemplateComponent,
        DashboardComponent
    ],
    providers: [
    ]
})
export class TemplateModule { }
