import { Component, OnInit, Input } from '@angular/core';
import { Data } from 'src/app/data';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit
{
    private name : string;
    // private login : boolean;    
    private user : string;
    private data : Data;
    login : boolean = false;

    constructor(private route : ActivatedRoute)
    {
        this.data = Data.getInstance();
        this.name = this.data.getName();
        this.user = "User";
    }

    ngOnInit()
    {

        this.user = this.route.snapshot.params["user"];
        this.login = this.data.isLogin();
        console.log(this.data);
        console.log(this.login);
    }

}
