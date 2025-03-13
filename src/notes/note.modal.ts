export class Note {
    id: number;
    title: string;
    desc: string;
    createAd: Date;

    constructor(title: string, desc: string) {
        this.title = title
        this.desc = desc
        this.createAd = new Date()
    }
}