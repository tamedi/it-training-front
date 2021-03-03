export class DemandeAuth{
    constructor(
        private _email:string,
        private _password:string
    ){}

    public get email(){return this._email}
    public get password(){return this._password}

    public set email(email:string) {
        this._email = email;
    }
    public set password(password:string) {
        this._password = password;
    }
}