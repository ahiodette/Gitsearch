export class User {
    public repoList:boolean;
    constructor(public login: string, public name:string, public avatar_url: string, public public_repos:number ){
        this.repoList=false;
    }
}
