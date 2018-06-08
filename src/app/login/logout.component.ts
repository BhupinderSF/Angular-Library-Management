import { Component } from '@angular/core';
import { LoginService } from '../services/login.service';

@Component({
    selector: 'logout',
    template: ''
})

export class LogoutComponent{
    constructor(private loginService: LoginService) {
        this.loginService.logout();
    }
}