import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
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

}

export class HelloWorldBean
{
    constructor(public message : string)
    {

    }
}
