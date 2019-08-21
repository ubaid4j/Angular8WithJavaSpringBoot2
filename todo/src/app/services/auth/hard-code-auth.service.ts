import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class HardCodeAuthService
{
    public static AUTH : string = "authUser";

    constructor()
    {

    }

    public authenticate(username : string, password : string) : boolean
    {
        if(username === "ubaid" && password === "test123")
        {
            return true;
        }
        return false;
    }

    public isAuth() : boolean
    {
        return (sessionStorage.getItem(HardCodeAuthService.AUTH) != null);
    }


}
