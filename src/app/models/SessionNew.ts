import { Formation } from "./formation";

export interface ISessionNew {  
    dateDebut: string;
    dateFin: string;
    prix: string;
    lieu: string;
    formation: Formation;
}

export class SessionNew implements ISessionNew{
    dateDebut: string;
    dateFin: string;
    prix: string;
    lieu: string;
    formation: Formation;

    constructor(pDate_debut: string,
                pDate_fin: string, pPrix: string, 
                pLieu: string, pFormation: Formation) {
                this.dateDebut = pDate_debut;
                this.dateFin = pDate_fin;
                this.prix = pPrix;
                this.lieu = pLieu;
                this.formation = pFormation;
                }

}