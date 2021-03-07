export class MessageAuth {
    constructor(
        private _adminId:number,
        private _message:string,
        private _isAuth:boolean
    ){}

    get adminId() {return this._adminId};
    get message() {return this._message};
    get isAuth() {return this._isAuth};

    set adminId(id:number) {
        this._adminId = id;
    }
    set message(message:string) {
        this._message = message;
    }
    set isAuth(isAuth:boolean) {
        this._isAuth = isAuth;
    }
}