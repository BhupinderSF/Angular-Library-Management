import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { BooklistingService } from '../services/booklisting.service';
import { CommonService } from '../services/common.service';
import { Location } from '@angular/common';

import { IMyDpOptions } from 'mydatepicker';


@Component({
    selector: 'issue-me',
    templateUrl:'./issueme.html'
})

export class IssuemeComponent {
    
    public myDatePickerOptions: IMyDpOptions = {
        // other options...
        dateFormat: 'dd.mm.yyyy',
    };
 
    // Initialized to specific date (09.10.2018).
    public startDate: any = { date: { year: 2018, month: 10, day: 9 } };
    public endDate: any = { date: { year: 2018, month: 10, day: 10 } };

    constructor(
        private route:ActivatedRoute,
        private listingservice : BooklistingService,
        private _location: Location
    ) {}

    book_id: string;
    bookDetails;
    amount_to_pay: any = 0;

    ngOnInit() {
        this.book_id = this.route.snapshot.params['id'];
        this.bookDetails = this.listingservice.getBookById(this.book_id);
    }

    calcAmtToPay(sDate, eDate, charges_per_day) {

        let one_day = 1000*60*60*24;
        let sd = sDate.date;
        let ed = eDate.date;

        let StartDates = new Date(sd.year, sd.month, sd.day);
        let EndDate = new Date(ed.year, ed.month, ed.day);

        // Calculate the difference in milliseconds
        let difference_ms = EndDate.getTime() - StartDates.getTime();
            
        // Convert back to days and return
        this.amount_to_pay =  (Math.round(difference_ms/one_day)*charges_per_day); 
    }

    validateForm() {
        if (!(this.amount_to_pay > 0)) {
            alert("Please select appropriate dates and try again.");
            return false;
        }
        alert('Payment processed successfully.');
    }

    goBack() {
        this._location.back();
    }

    uploadProof($event) {
        const fileSelected: File = $event.target.files[0];
        this.listingservice.uploadFile(fileSelected);

        // this.myFileUploadService.uploadFile(fileSelected)
        // .subscribe( (response) => {
        //     console.log('set any success actions...');
        //     return response;
        //     }.
        //     (error) => {
        //     console.log('set any error actions...');
        //     });
    }

}