import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplateRoutingModule } from './template-routing.module';
import { BreadcrumModule } from '../partials/breadcrum/breadcrum.module';
// import { SidebarModule } from '../partials/sidebar/sidebar.module';
import { SidebarComponent } from '../partials/sidebar/sidebar.component';
// import { BreadcrumService } from '../services/breadcrum.service';
// import { BreadcrumComponent } from '../partials/breadcrum/breadcrum.component';
import { TemplateComponent } from './template.component';


@NgModule({
    imports: [
        CommonModule,
        TemplateRoutingModule,
        BreadcrumModule
        // SidebarModule
    ],
    declarations: [
        TemplateComponent,
        SidebarComponent,
        // BreadcrumComponent
    ],
    providers: [
        // BreadcrumService
    ]
})
export class TemplateModule { }
