import { Component, OnInit } from '@angular/core';
import { HardCodeAuthService } from 'src/app/services/auth/hard-code-auth.service';
import { Router } from '@angular/router';
import { TodoService } from 'src/app/services/todoData/todo.service';
import { BasicAuthenticationService } from 'src/app/services/auth/basic-authentication.service';

export class Todo {
    constructor(
        public id: number,
        public desc: string,
        public done: boolean,
        public targetDate: Date
    ) {

    }
}

@Component({
    selector: 'app-todos',
    templateUrl: './todos.component.html',
    styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
    get info(): string {
        return this.infoI;
    }

    set info(value: string) {
        this.infoI = value;
    }

    public todos: Todo[];
    public infoI: string = null;

    constructor(private auth: BasicAuthenticationService,
                private router: Router,
                private todoService: TodoService) {

    }

    ngOnInit() {
        this.refresh();
    }

    private refresh(): void {
        this.todoService.getAllTodos(this.auth.getAuthUser()).subscribe(
            response => {
                const todo = response as Todo[];
                this.handleResponse(todo);
            }
        );
    }

    handleResponse(res: Todo[]) {
        this.todos = res;
    }

    deleteTodo(id: number): void {
        this.todoService.deleteTodo(this.auth.getAuthUser(), id).subscribe(
            success => {
                this.refresh();
                this.info = `Todo of id number ${id} successfully deleted`;
                this.dropInfo();
            }
        );
    }

    dropInfo(): void {
        setTimeout(function() {
            this.nullInfo();
            console.log('drop info');
        }, 5000);
    }

     udpate(id: number): void {
        this.router.navigate(['todos', id]).then();
    }

     add(): void {
        this.router.navigate(['todos', -1]).then();
    }

     nullInfo(): void  {
        this.info = null;
    }
}
