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

    constructor(private auth : HardCodeAuthService)
    {

    }

    ngOnInit()
    {
        console.log("Initialization");
        this.isLoggedIn = this.auth.isAuth();
    }
}
