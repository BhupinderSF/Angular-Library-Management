import { Component } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
// import { SidebarComponent } from '../partials/sidebar/sidebar.component';
import {TitleService} from "../services/title.service";

@Component({
    selector: 'main-template',
    templateUrl: './main-template.html',
    styleUrls: ['../common/common.css']
})

export class TemplateComponent{

    title;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private titleService: TitleService
    ){}

    ngOnInit(): void {
        // this.title = 'here';
        this.titleService.init()
        .subscribe((pathString) => { 
            // this.titleService.setTitle(`${pathString}`); 
            this.title = pathString;
        });
      }

}