import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit
{

    private name : string;

    constructor(private router : ActivatedRoute)
    {

    }

    ngOnInit()
    {
        this.name = this.router.snapshot.params["name"];
        console.log(this.name);
    }

}
