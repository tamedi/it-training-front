import { Formation } from "./formation";

export interface ISessionNew {  
    date_debut: string;
    date_fin: string;
    prix: string;
    lieu: string;
    formation: Formation;
}

export class SessionNew implements ISessionNew{
    date_debut: string;
    date_fin: string;
    prix: string;
    lieu: string;
    formation: Formation;

    constructor(pDate_debut: string,
                pDate_fin: string, pPrix: string, 
                pLieu: string, pFormation: Formation) {
                this.date_debut = pDate_debut;
                this.date_fin = pDate_fin;
                this.prix = pPrix;
                this.lieu = pLieu;
                this.formation = pFormation;
                }

}