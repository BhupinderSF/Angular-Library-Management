import { Component } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import {BlockUIModule} from 'primeng/primeng';

@Component({
    selector: 'main-template',
    templateUrl: './main-template.html',
    styleUrls: ['../common/common.css']
})

export class TemplateComponent{

    constructor(
        private route: ActivatedRoute,
        private router: Router
    ){}

    ngOnInit() {
    }

}