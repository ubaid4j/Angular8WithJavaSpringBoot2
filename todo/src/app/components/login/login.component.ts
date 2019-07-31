import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit
{

    private username : string = 'Ubaid ur Rehman';
    private password : string = 'test123';
    private isInValid : boolean = false;

    constructor(private router:Router)
    {

    }

    ngOnInit()
    {

    }

    public whenClick() : void 
    {
        if(this.username === "test123" && this.password === "test123")
        {
            this.isInValid = false;
            this.router.navigate(['welcome']);
        }
        else
        {
            this.isInValid = true;
        }

        console.log(this.username);
        console.log(this.password);
    }

}
