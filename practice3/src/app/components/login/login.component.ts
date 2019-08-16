import { Component, OnInit } from '@angular/core';
import { invalid } from '@angular/compiler/src/render3/view/util';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit
{
    private name : string;
    private password : string;
    private invalid : boolean = false;

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
        if(this.name != "test" || this.password != "test")
        {
            this.invalid = false;
        }
    }

    private isInvalid() : boolean
    {
        return this.invalid;
    }
}
