import { Component, OnInit } from '@angular/core';
import { HardCodeAuthService } from 'src/app/services/auth/hard-code-auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-logout',
    templateUrl: './logout.component.html',
    styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

    constructor(private router : Router)
    {

    }

    ngOnInit()
    {
        sessionStorage.removeItem(HardCodeAuthService.AUTH);
        this.router.navigate(["login"])
    }

}
