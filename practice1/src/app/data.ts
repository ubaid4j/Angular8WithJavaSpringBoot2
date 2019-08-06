export class Data
{
    private name : string;
    private login : boolean;

    constructor()
    {
        this.name = "Ubaid"
        this.login = false;
    }

    public getName() : string
    {
        return this.name;
    }

    public setLogin(isLogin: boolean) : void 
    {
        this.login = isLogin;
    }

    public isLogin() : boolean 
    {
        return this.login;
    }
}