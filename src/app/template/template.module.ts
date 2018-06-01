import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplateRoutingModule } from './template-routing.module';
import { TemplateComponent } from './template.component';
import {CalendarModule} from 'primeng/calendar';


@NgModule({
    imports: [
        CommonModule,
        TemplateRoutingModule,
        CalendarModule
    ],
    declarations: [
        TemplateComponent
    ],
    providers: [
    ]
})
export class TemplateModule { }
