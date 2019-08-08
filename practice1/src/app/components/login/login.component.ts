import { Component, OnInit } from '@angular/core';
import {faUser} from '@fortawesome/free-solid-svg-icons';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faKeyboard } from "@fortawesome/free-regular-svg-icons";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit
{

    userIcon : any = faUser;
    key : any = faKeyboard;
    faCoffee = faCoffee;

    constructor()
    {

    }

    ngOnInit()
    {
        
    }

}
