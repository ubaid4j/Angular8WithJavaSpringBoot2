import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { HardCodeAuthService } from 'src/app/services/auth/hard-code-auth.service';
import { BasicAuthenticationService } from 'src/app/services/auth/basic-authentication.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit
{
    public isLoggedIn = false;
    public user = '';

    constructor(private auth: BasicAuthenticationService) {

    }

    ngOnInit() {
        this.user = this.auth.getAuthUser();
        this.isLoggedIn = this.auth.isUserLoggedIn();
    }
}
