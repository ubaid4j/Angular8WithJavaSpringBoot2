import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    public username  = 'ubaid';
    public password = 'test123';
    public isInValid = false;

    constructor(private router: Router) {
    }

    ngOnInit() {

    }

    public whenClick(): void {
        console.log(this.username);
        console.log(this.password);
        this.router.navigate(['welcome', this.username]).then(r => {});
    }

}
