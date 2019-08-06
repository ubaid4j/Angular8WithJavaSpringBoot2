import { Component, OnInit } from '@angular/core';
import { Data } from 'src/app/data';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit
{
    private name : string;
    private login : boolean;    
    private user : string;

    constructor(private data : Data)
    {
        this.name = data.getName();
        this.user = "User";
    }

    ngOnInit()
    {
        this.login = this.data.isLogin();
        console.log(this.login);
    }

}
