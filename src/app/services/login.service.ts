// Default imports
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

// Custom imports

@Injectable()
export class LoginService{

    authenticateUser(loginDetails) : boolean {
        if (loginDetails.password=='21' && loginDetails.email=='demouser@gmail.com') {
            return true;
        } else {
            return false;
        }
    }

}