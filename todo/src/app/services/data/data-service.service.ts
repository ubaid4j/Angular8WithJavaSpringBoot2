import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class DataServiceService
{
    constructor(private http : HttpClient)
    {

    }

    //: Observable<Object>
    public executeHelloWorldService() : Observable<Object>
    {
        return this.http.get<HelloWorldBean>("http://localhost:8080/helloWorldBean/");
    }

    public executeHelloWorldWithPathVariable(userName : string) : Observable<Object>
    {
        return this.http.get<String>(`http://localhost:8080/helloWorld/path/${userName}`);
    }
}

export class HelloWorldBean
{
    constructor(public message : string)
    {

    }
}
