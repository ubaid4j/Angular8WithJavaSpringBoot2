import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from 'src/app/components/todos/todos.component';

@Injectable({
    providedIn: 'root'
})
export class TodoService
{
    constructor(private http: HttpClient)
    {

    }

    public getAllTodos(userName: string): Observable<Object>
    {
        return this.http.get<Todo>(`http://localhost:8080/users/${userName}/todos`);
    }
}
