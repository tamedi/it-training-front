export class Session {

    private _id:number;

    constructor(
        private _numero: number,
        private _date_debut: string,
        private _date_fin: string,
        private _prix: string,
        private _lieu: string
    ) { }

    get id() { return this._id };
    get numero() { return this._numero };
    get dateDebut() { return this._date_debut };
    get dateFin() { return this._date_fin };
    get prix() { return this._prix };
    get lieu() { return this._lieu };

    set id(id: number) { this._id = id };
    set numero(numero: number) { this._numero = numero };
    set dateDebut(dateDebut: string) { this._date_debut = dateDebut };
    set dateFin(dateFin: string) { this._date_fin = dateFin };
    set prix(prix: string) { this._prix = prix };
    set lieu(lieu: string) { this._lieu = lieu };

}