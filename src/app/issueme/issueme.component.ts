import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { BooklistingService } from '../services/booklisting.service';
import {IMyDpOptions} from 'mydatepicker';

@Component({
    selector: 'issue-me',
    templateUrl:'./issueme.html'
})

export class IssuemeComponent {
    constructor(
        private route:ActivatedRoute,
        private listingservice : BooklistingService
    ) {}
    book_id: string;
    bookDetails;

    ngOnInit() {
        this.book_id = this.route.snapshot.params['id'];
        this.bookDetails = this.listingservice.getBookById(this.book_id);
    }

    public myDatePickerOptions: IMyDpOptions = {
        // other options...
        dateFormat: 'dd.mm.yyyy',
    };

    // Initialized to specific date (09.10.2018).
    public defaultDate: any = { date: { year: 2018, month: 10, day: 9 } };

    // route = Router;
    // p1 = this.route.snapshot.params['bank'];
}