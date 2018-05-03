// Default imports
import { Injectable } from '@angular/core';

// Custom imports

@Injectable()
export class BooklistingService{

    getBookList() : any {
        return [
            {
                "book_name":"The Alchemist",
                "charges_per_day":"$2",
                "author":"Mr. David"
            },
            {
                "book_name":"Half Girlfriend",
                "charges_per_day":"$3",
                "author":"Mr. Chetan Bhagat"
            }
        ];
    }

}