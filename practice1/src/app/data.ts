export class Data
{
    private name : string;
    private login : boolean;

    private static instance : Data = null;

    private constructor()
    {
        this.name = "Ubaid"
        this.login = false;
    }

    public static getInstance() : Data 
    {
        if(Data.instance == null)
            Data.instance = new Data();
        return Data.instance;
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