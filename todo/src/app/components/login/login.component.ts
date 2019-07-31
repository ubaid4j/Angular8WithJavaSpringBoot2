import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit
{

    username : string = 'Ubaid ur Rehman';
    password : string = 'test123';

    constructor() { }

    ngOnInit()
    {

    }

    public whenClick() : void 
    {
        console.log(this.username);
        console.log(this.password);
    }

}
