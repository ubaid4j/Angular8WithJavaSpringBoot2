import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BasicAuthenticationService } from '../auth/basic-authentication.service';
import { LoginComponent } from 'src/app/components/login/login.component';

@Injectable({
  providedIn: 'root'
})
export class HttpIntercepterService implements HttpInterceptor
{
    constructor(private basicAuth : BasicAuthenticationService)
    {

    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>
    {
        if(this.basicAuth.isUserLoggedIn())
        {
            console.log("-------------------intercept true--------------------")
            let headers = new HttpHeaders({
                'Authorization' : this.basicAuth.getAuthToken()
            });
            req = req.clone({
                headers
            });

        }
        console.log("----------------------intercet return------------------");
        console.log(req);
        return next.handle(req);
    }
}
