import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpIntercepterService implements HttpInterceptor
{
    constructor()
    {

    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>
    {

        let headers = new HttpHeaders({
            'Authorization' : this.createBasicAuthHeaderString()
        });

        req = req.clone({
            headers
        });

        return next.handle(req);
    }

    private createBasicAuthHeaderString() : string
    {
        let userName = "ubaid";
        let password = "test123";
        let authString = "Basic " + window.btoa(userName + ":" + password);
        console.log(authString);
        return authString;
    }


}
