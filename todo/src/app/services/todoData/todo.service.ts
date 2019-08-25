import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from 'src/app/components/todos/todos.component';
import { API_URL } from 'src/app/app.constants';

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
        return this.http.get<Todo>(`${API_URL}/users/${userName}/todos`);
    }

    public deleteTodo(userName : string, id : number) : Observable<Object>
    {
        return this.http.delete(`${API_URL}/users/${userName}/todos/${id}`)
    }

    public getTodo(userName : string, id : number) : Observable<Object>
    {
        return this.http.get(`${API_URL}/users/ubaid/todos/${id}`);
        // return null;
    }

    public save(userName : string, todo : Todo) : Observable<Object>
    {
        if(todo.id == null)
        {
            console.log(`Post Mapping`);
            return this.http.post(`${API_URL}/users/${userName}/todos`, todo);
        }
        else
        {
            console.log(`Put Mapping`);
            return this.http.put(`${API_URL}/users/${userName}/todos`, todo);
        }
    }
}
