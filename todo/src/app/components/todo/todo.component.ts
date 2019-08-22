import { Component, OnInit } from '@angular/core';
import { Todo } from '../todos/todos.component';
import { TodoService } from 'src/app/services/todoData/todo.service';
import { HardCodeAuthService } from 'src/app/services/auth/hard-code-auth.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit
{
    private todo: Todo;

    constructor(
        private todoSerive : TodoService,
        private auth : HardCodeAuthService,
        private route : ActivatedRoute
    )
    {

    }

    ngOnInit()
    {
        this.todo = new Todo(null, null, null, null);
        this.getTodo(this.auth.getCurrentUser(), this.route.snapshot.params["id"]);
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
        console.log(todo);
        this.todo = todo;
    }

    private log() : void
    {
        console.log(this.todo);
    }
}
