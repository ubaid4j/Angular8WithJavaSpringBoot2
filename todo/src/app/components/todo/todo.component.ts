import { Component, OnInit } from '@angular/core';
import { Todo } from '../todos/todos.component';
import { TodoService } from 'src/app/services/todoData/todo.service';
import { HardCodeAuthService } from 'src/app/services/auth/hard-code-auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit
{
    private todo: Todo;
    private buttonName : string = "Update";

    constructor(
        private todoSerive : TodoService,
        private auth : HardCodeAuthService,
        private route : ActivatedRoute,
        private router : Router
    )
    {

    }

    ngOnInit()
    {
        this.todo = new Todo(null, null, null, null);
        let id = this.route.snapshot.params["id"];

        if(id == -1)
        {
            this.buttonName = "Create";
        }
        else
        {
            this.getTodo(this.auth.getCurrentUser(), id);
        }
    }

    private getTodo(username : string, id : number) : void
    {
        this.todoSerive.getTodo(username, id).subscribe(
            response => {
                let todo = response as Todo;
                this.handleRespose(todo);
            }
        )
    }

    private handleRespose(todo : Todo) : void
    {
        this.todo = todo;
    }

    private log() : void
    {
    }

    private save() : void
    {
        console.log(this.todo);
        console.log(`User ${this.auth.getCurrentUser()}`)
        this.todoSerive.save(this.auth.getCurrentUser(), this.todo).subscribe(
            response => {
                console.log(response);
                this.router.navigate(["todos"]);
            },
            error => {
                console.log(error);
            }
        )
    }
}
