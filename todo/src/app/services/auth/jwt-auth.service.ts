import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { API_URL } from 'src/app/app.constants';
import { map } from 'rxjs/operators';
import { AUTHUSER, AUTHTOKEN } from './basic-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class JwtAuthService
{
    constructor(private http : HttpClient)
    {

    }

    public auth(username : string, password : string) : Observable<any>
    {
        return this.http.post<Token>(`${API_URL}/authenticate`,
            {username: username, password : password}).pipe(
                map(
                    data => {
                        sessionStorage.setItem(AUTHUSER, username);
                        sessionStorage.setItem(AUTHTOKEN, `Bearer ${data.token}`)
                        return data;
                    }
                )
            );
    }
}

export class Token
{
    constructor(public token : string)
    {

    }
}
