import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { BreadcrumComponent } from './breadcrum.component';
import { BreadcrumService } from '../../services/breadcrum.service';

@NgModule({
    imports:[
        CommonModule
    ],
    declarations: [BreadcrumComponent],
    providers:[BreadcrumService],
    exports: [BreadcrumComponent]
})

export class BreadcrumModule {}