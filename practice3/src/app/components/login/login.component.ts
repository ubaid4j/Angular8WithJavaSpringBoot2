import { Component, OnInit } from '@angular/core';
import { invalid } from '@angular/compiler/src/render3/view/util';
import { Router } from '@angular/router';

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

    constructor(private router : Router)
    {

    }

    ngOnInit()
    {

    }


    actionListener() : void
    {
        if(true)
        {
            this.invalid = false;
            this.router.navigate([this.name]);
        }
        else
        {
            this.invalid = true;
        }
    }

    private isInvalid() : boolean
    {
        return this.invalid;
    }
}
