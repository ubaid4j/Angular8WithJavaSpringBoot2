import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit
{
    private logo : string = "Ubaid's";
    private contact : string = "Contact";
    private about : string = "About";

    constructor()
    {

    }

    ngOnInit()
    {

    }

}
