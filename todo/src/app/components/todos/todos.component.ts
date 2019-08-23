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

    private todos : Todo[];
    private info : string = null;

    constructor(private auth : HardCodeAuthService,
        private router : Router,
        private todoService : TodoService)
    {

    }

    ngOnInit()
    {
        this.refresh();
    }

    private refresh() : void
    {
        this.todoService.getAllTodos(this.auth.getCurrentUser()).subscribe(
            response => {
                let todo = response as Todo[];
                this.handleResponse(todo);
            }
        );
    }

    private handleResponse(res : Todo[])
    {
        this.todos = res;
    }

    private deleteTodo(id : number) : void
    {
        this.todoService.deleteTodo(this.auth.getCurrentUser(), id).subscribe(
            success => {
                this.refresh();
                this.info = `Todo of id number ${id} successfully deleted`;
                this.dropInfo();
            }
        )
    }

    private dropInfo() : void
    {
        setTimeout(function()
        {
            this.info = null;
            console.log("drop info");
        }, 5000);
    }

    private udpate(id : number) : void
    {
        this.router.navigate(["todos", id])
    }

    private add() : void
    {
        this.router.navigate(["todos", -1])
    }
}
