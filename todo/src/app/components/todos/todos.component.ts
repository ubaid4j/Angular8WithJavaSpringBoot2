import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-todos',
    templateUrl: './todos.component.html',
    styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit
{
    private todo : object = {
        id : 1,
        desc : "Learn JSON"
    }

    private todos : object = [
        {
            id : 1,
            desc : "Go to Market"
        },
        {
            id : 2,
            desc : "Go to School"
        },
        {
            id : 10,
            desc: "Sleep Time"
        }
    ]

    constructor()
    {

    }

    ngOnInit()
    {

    }

}
