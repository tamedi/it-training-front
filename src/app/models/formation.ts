type MyArrayThemes = Array<{id:number, nom: string, description:string}>;
export class Formation {
    public id:number
    public titre:string
    public themes: MyArrayThemes
}
