export class ApprenantMessageAuth{
    
    constructor(
        private _apprenantId:number,
        private _message:string,
        private _isAuth:boolean
    ){}
    get apprenantId(){return this._apprenantId};
    get message(){return this._message};
    get isAuth(){return this._isAuth};

    set apprenantId(id:number){
        this._apprenantId = id;
    }

    set message(message:string){
        this._message = message;
    }

    set isAuth(isAuth:boolean){
        this._isAuth = isAuth
    }

}