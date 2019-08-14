import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit
{

    private id : string = "Copy Right 2019"

    constructor() { }

    ngOnInit()
    {

    }

}
