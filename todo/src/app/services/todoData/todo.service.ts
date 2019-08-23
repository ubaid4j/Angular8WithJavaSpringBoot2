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

    public deleteTodo(userName : string, id : number) : Observable<Object>
    {
        return this.http.delete(`http://localhost:8080/users/${userName}/todos/${id}`)
    }

    public getTodo(userName : string, id : number) : Observable<Object>
    {
        return this.http.get(`http://localhost:8080/users/ubaid/todos/${id}`);
        // return null;
    }

    public save(userName : string, todo : Todo) : Observable<Object>
    {
        if(todo.id == null)
        {
            console.log(`Post Mapping`);
            return this.http.post(`http://localhost:8080/users/${userName}/todos`, todo);
        }
        else
        {
            console.log(`Put Mapping`);
            return this.http.put(`http://localhost:8080/users/${userName}/todos`, todo);
        }
    }
}
