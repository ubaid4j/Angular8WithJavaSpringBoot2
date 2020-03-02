import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {TodoService} from 'src/app/services/todoData/todo.service';

export class Todo {
    constructor(
        public id: number,
        public description: string,
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

    private username = 'ubaid';
    get info(): string {
        return this.infoI;
    }

    set info(value: string) {
        this.infoI = value;
    }

    public todos: Todo[];
    public infoI: string = null;

    constructor(
        private router: Router,
        private todoService: TodoService) {

    }

    ngOnInit() {
        this.refresh();
    }

    private refresh(): void {
        this.todoService.getAllTodos(this.username).subscribe(
            response => {
                const todo = response as Todo[];
                this.handleResponse(todo);
            }
        );
    }

    handleResponse(res: Todo[]) {
        console.log(res);
        this.todos = res;
    }

    deleteTodo(id: number): void {
        this.todoService.deleteTodo(this.username, id).subscribe(
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

    nullInfo(): void {
        this.info = null;
    }
}
