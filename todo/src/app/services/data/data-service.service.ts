import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {API_URL} from 'src/app/app.constants';

@Injectable({
    providedIn: 'root'
})
export class DataServiceService {
    constructor(private http: HttpClient) {

    }

    public executeHelloWorldService(): Observable<object> {
        return this.http.get<HelloWorldBean>(`${API_URL}/helloWorldBean/`);
    }

    public executeHelloWorldWithPathVariable(userName: string): Observable<string> {
        return this.http.get<string>(`${API_URL}/helloWorld/path/${userName}`);
    }
}

export class HelloWorldBean {
    constructor(public message: string) {

    }
}
