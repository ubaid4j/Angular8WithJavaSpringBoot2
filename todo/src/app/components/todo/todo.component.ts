import { Component, OnInit } from '@angular/core';
import { Todo } from '../todos/todos.component';
import { TodoService } from 'src/app/services/todoData/todo.service';
import { HardCodeAuthService } from 'src/app/services/auth/hard-code-auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { BasicAuthenticationService } from 'src/app/services/auth/basic-authentication.service';

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
        private auth : BasicAuthenticationService,
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
            this.getTodo(this.auth.getAuthUser(), id);
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
        console.log(`User ${this.auth.getAuthUser()}`)
        this.todoSerive.save(this.auth.getAuthUser(), this.todo).subscribe(
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
