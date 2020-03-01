import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Todo} from 'src/app/components/todos/todos.component';
import {API_URL} from 'src/app/app.constants';

@Injectable({
    providedIn: 'root'
})
export class TodoService {

    private httpOptions: object = {
        headers: new HttpHeaders({
            'Content-Type':  'application/json',
        })
    };

    constructor(private http: HttpClient) {

    }

    public getAllTodos(userName: string): Observable<object> {
        return this.http.get<Todo>(`${API_URL}/users/${userName}/todos`);
    }

    public deleteTodo(userName: string, id: number): Observable<object> {
        return this.http.delete(`${API_URL}/users/${userName}/todos/${id}`);
    }

    public getTodo(userName: string, id: number): Observable<object> {
        return this.http.get(`${API_URL}/users/${userName}/todos/${id}`);
        // return null;
    }

    public save(userName: string, todo: Todo): Observable<object> {
        if (todo.id == null) {
            console.log(`Post Mapping`);
            console.log(`${API_URL}/users/${userName}/todos`);
            return this.http.post(`${API_URL}/users/${userName}/todos`, todo, this.httpOptions);
        } else {
            console.log(`Put Mapping`);
            return this.http.put(`${API_URL}/users/${userName}/todos`, todo);
        }
    }
}
