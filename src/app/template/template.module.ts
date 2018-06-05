import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplateRoutingModule } from './template-routing.module';
// import { SidebarModule } from '../partials/sidebar/sidebar.module';
import { SidebarComponent } from '../partials/sidebar/sidebar.component';
import { BreadcrumComponent } from '../partials/breadcrum/breadcrum.component';
import { TemplateComponent } from './template.component';


@NgModule({
    imports: [
        CommonModule,
        TemplateRoutingModule,
        // SidebarModule
    ],
    declarations: [
        TemplateComponent,
        SidebarComponent,
        BreadcrumComponent
    ],
    providers: [
    ]
})
export class TemplateModule { }
