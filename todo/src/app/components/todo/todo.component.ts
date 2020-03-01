import {Component, OnInit} from '@angular/core';
import {Todo} from '../todos/todos.component';
import {TodoService} from 'src/app/services/todoData/todo.service';
// import { HardCodeAuthService } from 'src/app/services/auth/hard-code-auth.service';
import {ActivatedRoute, Router} from '@angular/router';
import {BasicAuthenticationService} from 'src/app/services/auth/basic-authentication.service';
import {HttpHeaders} from '@angular/common/http';

@Component({
    selector: 'app-todo',
    templateUrl: './todo.component.html',
    styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
    public todo: Todo = new Todo(null, null, null, null);
    public buttonName = 'Update';
    // httpOptions = {
    //     headers: new HttpHeaders({
    //         'Content-Type':  'application/json',
    //     })
    // };
    constructor(
        private todoSerive: TodoService,
        private auth: BasicAuthenticationService,
        private route: ActivatedRoute,
        private router: Router
    ) {
    }

    ngOnInit() {
        this.todo = new Todo(null, null, null, null);
        const id = this.route.snapshot.params.id;
        console.log(id);
        console.log(id === '-1');

        if (id === '-1') {
            this.buttonName = 'Create';
        } else {
            this.getTodo(this.auth.getAuthUser(), id);
        }
    }

    private getTodo(username: string, id: number): void {
        this.todoSerive.getTodo(username, id).subscribe(
            response => {
                const todo = response as Todo;
                this.handleRespose(todo);
            }
        );
    }

    private handleRespose(todo: Todo): void {
        this.todo = todo;
    }

    log(): void {
    }

    save(): void {
        console.log(`User ${this.auth.getAuthUser()}`);
        this.todo.done = false;
        console.log(this.todo);
        this.todoSerive.save(this.auth.getAuthUser(), this.todo).subscribe(
            response => {
                console.log(response);
                // noinspection JSIgnoredPromiseFromCall
                this.router.navigate(['todos']);
            },
            error => {
                console.log(error);
            }
        );
    }
}
