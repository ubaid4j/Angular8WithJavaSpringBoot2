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
        let basicAuth = this.createBasicAuthHeaderString();
        let headers = new HttpHeaders().append('Authorization', basicAuth);
        return this.http.get<String>(`http://localhost:8080/helloWorld/path/${userName}`, {headers});
    }


    public createBasicAuthHeaderString() : string
    {
        let userName = "ubaid";
        let password = "test123";
        let authString = "Basic " + window.btoa(userName + ":" + password);
        console.log(authString);
        return authString;
    }

}

export class HelloWorldBean
{
    constructor(public message : string)
    {

    }
}
