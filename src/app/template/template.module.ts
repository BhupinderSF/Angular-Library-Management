import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplateRoutingModule } from './template-routing.module';
import { TemplateComponent } from './template.component';

@NgModule({
    imports: [
        CommonModule,
        TemplateRoutingModule
    ],
    declarations: [
        TemplateComponent
    ],
    providers: [
    ]
})
export class TemplateModule { }
