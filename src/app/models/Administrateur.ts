export class Administrateur {
    private _id:number;

    constructor(
        private _nom:string,
        private _prenom:string,
        private _email:string,
        private  _telephone:string,
        private _password:string
    ){}

    get id() { return this._id }
    get nom() { return this._nom }
    get prenom() { return this._prenom }
    get email() { return this._email }
    get telepohone() { return this._telephone }
    get password() { return this._password }

    set id(id:number) { this._id = id }
    set nom(nom:string) { this._nom = nom }
    set prenom(prenom:string) { this._prenom = prenom }
    set email(email:string) { this._email = email }
    set telephone(telephone:string) { this._telephone = telephone }
    set password(password:string) { this._password = password }

}