import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { BooklistingService } from '../services/booklisting.service';
// import { CalendarModule } from 'primeng/primeng';
import {CalendarModule} from 'primeng/calendar';


@Component({
    selector: 'issue-me',
    templateUrl:'./issueme.html'
})

export class IssuemeComponent {
    date: Date = new Date();
  dateFix: Date = new Date();
    constructor(
        private route:ActivatedRoute,
        private listingservice : BooklistingService
    ) {}
    book_id: string;
    bookDetails;

    ngOnInit() {
        this.book_id = this.route.snapshot.params['id'];
        this.bookDetails = this.listingservice.getBookById(this.book_id);

        this.dateFix = new Date(this.date.getTime() + (this.date.getTimezoneOffset() * 60 * 1000));

        this.date = new Date(this.dateFix.getTime() - (this.date.getTimezoneOffset() * 60 * 1000));  
    }

}