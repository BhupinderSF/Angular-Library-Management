import { Component } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
    selector: 'main-template',
    templateUrl: './main-template.html',
    styleUrls: ['../common/common.css']
})

export class PagesComponent{

    constructor(
        private route: ActivatedRoute,
        private router: Router
    ){}

    ngOnInit() {
    }

}