import { Component } from '@angular/core';
import { BreadcrumService } from '../../services/breadcrum.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'bread-crum',
    templateUrl: './breadcrum.html'
    // styles:  ['.row.sidebarContainer {background-color: #e9ecef;}']
})

export class BreadcrumComponent {

    snapshot: object;

    constructor(
        private route: ActivatedRoute,
        private breadcrum: BreadcrumService
    ){}

    breadcrumlist;

    ngOnInit() {
        this.breadcrumlist = this.breadcrum.getBreadCrumList();
    }

}