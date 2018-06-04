// Default Imports
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';


// Custom imports

@Injectable()
export class BooklistingService{

    getBookList() : any {
        return [
            {
                "book_id":1,
                "book_name":"Book 1",
                "author":"Bhupinder Garg",
                'charges_per_day':'1',
                'books_in_stock': '5'
            },
            {
                "book_id":2,
                "book_name":"Book 2",
                "author":"Bhupinder Garg",
                'charges_per_day':'4',
                'books_in_stock': '30'
            },
            {
                "book_id":3,
                "book_name":"Book 3",
                "author":"Bhupinder Garg",
                'charges_per_day':'2',
                'books_in_stock': '20'
            },
            {
                "book_id":4,
                "book_name":"Book 4",
                "author":"Bhupinder Garg",
                'charges_per_day':'3',
                'books_in_stock': '10'
            }
        ];
    }

    getBookById(book_id) : any {

        var arr = [
            {
                "book_id":1,
                "book_name":"Book 1",
                "author":"Bhupinder Garg",
                'charges_per_day':'1',
                'books_in_stock': '5'
            },
            {
                "book_id":2,
                "book_name":"Book 2",
                "author":"Bhupinder Garg",
                'charges_per_day':'4',
                'books_in_stock': '30'
            },
            {
                "book_id":3,
                "book_name":"Book 3",
                "author":"Bhupinder Garg",
                'charges_per_day':'2',
                'books_in_stock': '20'
            },
            {
                "book_id":4,
                "book_name":"Book 4",
                "author":"Bhupinder Garg",
                'charges_per_day':'3',
                'books_in_stock': '10'
            }
        ];

        return arr[book_id-1];

    }

}