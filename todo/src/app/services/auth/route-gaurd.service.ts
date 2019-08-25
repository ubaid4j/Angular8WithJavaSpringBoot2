import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HardCodeAuthService } from './hard-code-auth.service';
import { BasicAuthenticationService } from './basic-authentication.service';

@Injectable({
    providedIn: 'root'
})
export class RouteGaurdService implements CanActivate
{
    constructor(private auth : BasicAuthenticationService,
        private router : Router)
    {

    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree>
    {
        if(this.auth.isUserLoggedIn())
            return true;
        this.router.navigate(["login"]);
        return false;
    }
}
