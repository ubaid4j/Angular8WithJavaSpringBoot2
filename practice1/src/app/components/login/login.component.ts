import { Component, OnInit } from '@angular/core';
import {faUser} from '@fortawesome/free-solid-svg-icons';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faKeyboard } from "@fortawesome/free-regular-svg-icons";
import { ActivatedRoute, Router } from '@angular/router';
import { Data } from 'src/app/data';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit
{

    login : boolean = false;
    userIcon : any = faUser;
    key : any = faKeyboard;
    faCoffee = faCoffee;

    private username : string;
    private password : string;
    private invalid : boolean;

    private data : Data;

    constructor(private route:Router)
    {
        this.invalid = false;
        this.data  = Data.getInstance();
    }

    ngOnInit()
    {
        
    }

    validate() : void
    {
        console.log(this.username, this.password);
        if(this.username === "Ubaid" && this.password === "test123")
        {
            this.route.navigate(['welcome', this.username]);
            this.invalid = false;
            this.data.setLogin(true);            
        }
        else
        {
            this.invalid = true;
            this.login = false;
        }
    }

}
