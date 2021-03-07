export interface IAdministrateurNew {
    nom: string;
    prenom: string;
    email: string;
    telephone: string;
    motDePasse: string;
}


export class AdministrateurNew implements IAdministrateurNew {
    nom:string;
    prenom:string;
    email:string;
    telephone:string;
    motDePasse:string;
  

    constructor(pNom:string, pPrenom:string, pEmail:string, pTelephone:string, pPassword:string){
    this.nom = pNom;
    this.prenom = pPrenom;
    this.email = pEmail;
    this.telephone = pTelephone;
    this.motDePasse = pPassword;
    }
}