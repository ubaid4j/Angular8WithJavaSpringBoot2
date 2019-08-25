import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { HardCodeAuthService } from './hard-code-auth.service';
import { map } from 'rxjs/operators';
import { API_URL } from 'src/app/app.constants';


export const AUTHUSER = "authUser";
export const AUTHTOKEN = "authToken";

@Injectable({
    providedIn: 'root'
})
export class BasicAuthenticationService {

    private tempUser : string;
    private tempPassword : string;
    private tempToken : string;

    constructor(private http: HttpClient) {

    }

    public createBasicAuthHeaderString(username: string, password: string): string {
        let authString = "Basic " + window.btoa(username + ":" + password);
        return authString;
    }


    public executeAuthenticationService(username: string, password: string): Observable<any> {

        let headers = new HttpHeaders({
            'Authorization' : this.createBasicAuthHeaderString(username, password)
        });

        let options = {
            headers: headers
        };

        console.log(`${API_URL}/auth/user`, options);
        return this.http.get(`${API_URL}/auth/user`, options).pipe(
            map(data => {
                sessionStorage.setItem(AUTHUSER, username);
                sessionStorage.setItem(AUTHTOKEN, this.createBasicAuthHeaderString(username, password));
                return data;
            })
        );
    }

    public getAuthUser(): string {
        return sessionStorage.getItem(AUTHUSER);
    }

    public getAuthToken(): string {
        return sessionStorage.getItem(AUTHTOKEN);
    }

    public isUserLoggedIn(): boolean {
        return this.getAuthUser() != null;
    }

    public logout(): void {
        sessionStorage.removeItem(AUTHUSER);
        sessionStorage.removeItem(AUTHTOKEN);
    }

    //*****************************Temp*********************************/
    public getTempUser() : string
    {
        return this.tempUser;
    }

    public getTempPassword() : string
    {
        return this.tempPassword;
    }

    public getTempToken() : string
    {
        return this.tempToken;
    }
}

