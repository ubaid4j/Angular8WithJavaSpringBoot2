import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { HardCodeAuthService } from './hard-code-auth.service';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService
{
    constructor(private http : HttpClient)
    {

    }

    public executeAuthenticationService(username : string, password : string) : Observable<any>
    {
        let authHeader = new HttpHeaders({
            'Authorization' : "Basic " + window.btoa(username + ":" + password)
        });

        return  this.http.get("http://localhost:8080/auth/user", {headers: authHeader}).pipe(
            map(data => {
                sessionStorage.setItem(HardCodeAuthService.AUTH, username);
                return data;
            })
        );
    }
}
