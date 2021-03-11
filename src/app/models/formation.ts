import { Session } from "./Session";

export class Formation {


    constructor (
        private _id:number,
        private _titre:string,
        private _description:string,
        private _sessions:Session[]
    ) {}

    get id() { return this._id }
    get titre() { return this._titre }
    get description() { return this._description }
    get sessions() { return this._sessions }

    set id(id: number) {
        this._id = id;
    }

    set titre(titre: string) {
        this._titre = titre;
    }

    set description(descritpion: string) {
        this._description = descritpion;
    }

    set sessions(sessions: Session[]) {
        this._sessions = sessions;
    }

    
}
