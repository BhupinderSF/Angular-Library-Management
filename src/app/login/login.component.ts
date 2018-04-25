import { Component } from '@angular/core';
import { Login } from './loginmodel';
import { LoginService } from '../services/login.service';


@Component({
    selector: 'app-login',
    templateUrl: './app.login.html',
    styleUrls: ['./app.login.css']
})

export class LoginComponent {

    constructor(
        private loginService: LoginService
    ) {}

    // login: any = {};
    login = Login;
    isLoggedIn;

    onSubmit(loginDetails): void {
        this.isLoggedIn = this.loginService.authenticateUser(loginDetails);
        if (this.isLoggedIn) {
            alert('success');
        } else {
            alert('failure');
        }
    }
    /*
    * implementing validations
    */
    // ngOnInit() : void {
        // this.heroForm = new FormGroup({
        //     'name': new FormControl(this.hero.name, [
        //         Validators.required,
        //         Validators.minLength(4)
        //       ])
        // });
    // }
}