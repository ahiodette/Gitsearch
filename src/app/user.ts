export class User {
    public repoList:boolean;
    constructor(public username: string, public fullName:string, public profile: string, public repoNumber:number ){
        this.repoList=false;
    }
}
