// Default imports
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';

// Custom imports

@Injectable()
export class LoginService{

    constructor(private _router: Router, private _activatedRoute: ActivatedRoute) {}

    authenticateUser(loginDetails) : boolean {
        if (loginDetails.password=='21' && loginDetails.email=='demouser@gmail.com') {
            localStorage.setItem("user_loggedin", '1');
            this._router.navigate(['dashboard']);
            return true;
        } else {
            this._router.navigate(['login'])
            return false;
        }
    }

    logout() {
        localStorage.removeItem("user_loggedin");
        this._router.navigate(['login']);
    }

    isAlreadyLoggedIn() {
        let alreadyLoggedIn = true;
        if (localStorage.getItem("user_loggedin") === null){
            alreadyLoggedIn = false;
        }
        return alreadyLoggedIn;
    }

    checkCredentials(){
        if (!this.isAlreadyLoggedIn()){
            this._router.navigate(['login']);
        }
    }
}