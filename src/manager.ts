



export class AffairManager {
    members: Members;
    affairs: Affairs;
    organization: Organization;
}

constructor(){
    this.members = new Members();
    this.affairs = new Affairs();
    this.organization = new Organization();
}

