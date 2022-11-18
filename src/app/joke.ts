export class Joke {
    private setup : string;
    private punchline : string;
    private hide : boolean;

    public constructor(setup: string, punchline: string){
        this.setup = setup;
        this.punchline = punchline;
        this.hide = true;
    }

    public toggle(){
        if (this.hide) this.hide = false;
        else this.hide = true;
    }

    public getSetup(): string {
        return this.setup;
    }

    public getPunchline(): string {
        return this.punchline;
    }

    public isHide(): boolean {
        return this.hide;
    }
}
