export class User {
    public repoList:boolean;
    constructor(
        public login: string, 
        public name:string, 
        public avatar_url: string, 
        public followers:number,
        public following:number,
        public created_at:Date,
        public public_repos:number,
        public repos_url:string
         ){
        this.repoList=false;
    }
}
