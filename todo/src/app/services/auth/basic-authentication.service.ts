import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {API_URL} from 'src/app/app.constants';


export const AUTHUSER = 'authUser';
export const AUTHTOKEN = 'authToken';

@Injectable({
    providedIn: 'root'
})
export class BasicAuthenticationService {

    private tempUser: string;
    private tempPassword: string;
    private tempToken: string;

    constructor(private http: HttpClient) {

    }

    public createBasicAuthHeaderString(username: string, password: string): string {
        return 'Basic ' + window.btoa(username + ':' + password);
    }


    public executeAuthenticationService(username: string, password: string): Observable<any> {

        const headers = new HttpHeaders({
            Authorization: this.createBasicAuthHeaderString(username, password)
        });

        const options = {
            headers
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
        return 'ubaid';
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

    // *****************************Temp*********************************/
    public getTempUser(): string {
        return this.tempUser;
    }

    public getTempPassword(): string {
        return this.tempPassword;
    }

    public getTempToken(): string {
        return this.tempToken;
    }
}

