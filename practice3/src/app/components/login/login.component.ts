import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit
{
    private name : string;
    private password : string;

    constructor()
    {

    }

    ngOnInit()
    {

    }


    actionListener() : void
    {
        console.log(this.name);
        console.log(this.password);
    }
}
