export interface IFormationNew {
    titre: string;
    description: string;
}


export class FormationNew implements IFormationNew {
    titre: string;
    description: string;


    constructor(ptitre:string, pdescription:string){
    this.titre = ptitre;
    this.description = pdescription;
    
    }
}