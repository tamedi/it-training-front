import { Session } from "./Session";

type MyArrayThemes = Array<{id:number, nom: string, description:string}>;
export class Formation {
    public id:number
    public titre:string
    public description:string
    public themes: MyArrayThemes
    public sessions: Session[]
}
