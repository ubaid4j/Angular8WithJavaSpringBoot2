import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardCodeAuthService } from 'src/app/services/auth/hard-code-auth.service';
import { BasicAuthenticationService, AUTHUSER, AUTHTOKEN } from 'src/app/services/auth/basic-authentication.service';
import { JwtAuthService } from 'src/app/services/auth/jwt-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    public username  = 'ubaid';
    public password = 'test123';
    public isInValid = false;

    constructor(private router: Router,
                private auth: HardCodeAuthService,
                private basicAuth: BasicAuthenticationService,
                private jwtAuth: JwtAuthService) {

    }

    ngOnInit() {

    }

    public whenClick(): void {
        console.log('Before: isAuth: ' + sessionStorage.getItem(HardCodeAuthService.AUTH));
        // if(this.auth.authenticate(this.username, this.password))
        // {
        //     this.isInValid = false;
        //     this.router.navigate(['welcome', this.username]);

        //     //storing authUser in the browser session
        //     sessionStorage.setItem(HardCodeAuthService.AUTH, this.username);
        //     console.log("After: isAuth: " + sessionStorage.getItem(HardCodeAuthService.AUTH));

        // }
        // else
        // {
        //     this.isInValid = true;
        // }
        console.log(this.username);
        console.log(this.password);
        this.router.navigate(['welcome', this.username]);

        // TEST
        // this.giveAuth();

        // this.jwtAuth.auth(this.username, this.password).subscribe(
        //     data => {
        //         console.log(data);
        //         this.isInValid = false;
        //         this.router.navigate(['welcome', this.username]);
        //         console.log('After: isAuth: ' + sessionStorage.getItem(AUTHUSER));
        //     },
        //     error => {
        //         console.log(error);
        //         this.isInValid = true;
        //     }
        // );
    }

    // private giveAuth()
    // {
    //     // console.log(data);
    //     this.isInValid = false;
    //     this.router.navigate(['welcome', this.username]);
    //     console.log("After: isAuth: " + sessionStorage.getItem(AUTHUSER));
    //     sessionStorage.setItem(AUTHUSER, this.username);
    //     sessionStorage.setItem(AUTHTOKEN, this.basicAuth.createBasicAuthHeaderString(this.username, this.password));

    // }
}
