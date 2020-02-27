import { Component, OnInit } from '@angular/core';
import { HardCodeAuthService } from 'src/app/services/auth/hard-code-auth.service';
import { Router } from '@angular/router';
import { BasicAuthenticationService } from 'src/app/services/auth/basic-authentication.service';

@Component({
    selector: 'app-logout',
    templateUrl: './logout.component.html',
    styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

    constructor(private auth: BasicAuthenticationService) {

    }

    ngOnInit() {
        this.auth.logout();
    }

}
