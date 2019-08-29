export class User {
    public repoList:boolean;
    constructor(public username: string, public profile: string, public repoNUmber:number ){
        this.repoList=false;
    }
}
