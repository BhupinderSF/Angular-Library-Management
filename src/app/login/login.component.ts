import { Component } from '@angular/core';
import { Login } from './loginmodel';
import { LoginService } from '../services/login.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
    selector: 'app-login',
    templateUrl: './app.login.html',
    styleUrls: ['./app.login.css']
})

export class LoginComponent {

    constructor(
        private loginService: LoginService,
        private router: Router
    ) {
        if (this.loginService.isAlreadyLoggedIn()){
            this.router.navigate(['/pages/dashboard']);
        }
    }

    // login: any = {};
    login = Login;
    isLoggedIn;

    onSubmit(loginDetails): void {
        this.isLoggedIn = this.loginService.authenticateUser(loginDetails);
        if (this.isLoggedIn) {
            alert('success');
            this.router.navigateByUrl('/pages/dashboard');
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