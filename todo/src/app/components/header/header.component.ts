import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { HardCodeAuthService } from 'src/app/services/auth/hard-code-auth.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit
{
    private isLoggedIn : boolean = false;
    private user : string = "";

    constructor(private auth : HardCodeAuthService)
    {

    }

    ngOnInit()
    {
        this.user = this.auth.getCurrentUser();
        this.isLoggedIn = this.auth.isAuth();
    }
}
