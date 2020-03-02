import {Component, OnInit} from '@angular/core';
import {Todo} from '../todos/todos.component';
import {TodoService} from 'src/app/services/todoData/todo.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'app-todo',
    templateUrl: './todo.component.html',
    styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
    public todo: Todo = new Todo(null, null, null, null);
    public buttonName = 'Update';
    private username = 'ubaid';
    constructor(
        private todoSerive: TodoService,
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
            this.getTodo(this.username, id);
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
        console.log(`User: ${this.username}`);
        this.todo.done = false;
        console.log(this.todo);
        this.todoSerive.save(this.username, this.todo).subscribe(
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
