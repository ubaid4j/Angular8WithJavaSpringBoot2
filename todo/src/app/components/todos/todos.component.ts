import { Component, OnInit } from '@angular/core';
import { HardCodeAuthService } from 'src/app/services/auth/hard-code-auth.service';
import { Router } from '@angular/router';
import { TodoService } from 'src/app/services/todoData/todo.service';

export class Todo
{
    constructor(
        public id : number,
        public desc : string,
        public done : boolean,
        public targetDate : Date
    )
    {

    }
}

@Component({
    selector: 'app-todos',
    templateUrl: './todos.component.html',
    styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit
{
    // private todo : object = {
    //     id : 1,
    //     desc : "Learn JSON"
    // }

    // private todos : object = [

    //     new Todo(1, "Go to Market", false, new Date()),
    //     new Todo(2, "Go to School", false, new Date()),
    //     new Todo(3, "Sleep Time", false, new Date()),
    //     new Todo(4, "Go to d-watson", false, new Date())
    //     // {
    //     //     id : 1,
    //     //     desc : "Go to Market"
    //     // },
    //     // {
    //     //     id : 2,
    //     //     desc : "Go to School"
    //     // },
    //     // {
    //     //     id : 10,
    //     //     desc: "Sleep Time"
    //     // }
    // ]

    private todos : Todo[];

    constructor(private auth : HardCodeAuthService,
        private router : Router,
        private todoService : TodoService)
    {

    }

    ngOnInit()
    {
        this.todoService.getAllTodos(this.auth.getCurrentUser()).subscribe(
            response => this.handleResponse(response)
        );
    }

    private handleResponse(res : any)
    {
        this.todos = res;
    }

}
