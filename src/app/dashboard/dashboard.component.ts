import { Component } from '@angular/core';
import { BooklistingService } from '../services/booklisting.service';

@Component({
    selector: 'dashboard-page',
    templateUrl: './dashboard.html',
    styleUrls: ['../common/common.css']
})
export class DashboardComponent {
    title = 'Books Slab';
    bookslist = [];

    constructor(private booklistService : BooklistingService) {}

    ngOnInit() {
        this.bookslist = this.booklistService.getBookList();
    }

}