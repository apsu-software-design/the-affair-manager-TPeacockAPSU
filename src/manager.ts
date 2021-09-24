class Member {
    private memName: string;
    private memEmail: string;

    public get name() {
        return this.name;
    }

    public get email() {
        return this.email;
    }

    constructor (name, email) {
        this.memName = name;
        this.memEmail = email;
    }
}

class Organization {
    private orgName: string;

    private membList: Array<Member>;
    private affaList: Array<Affair>;

    public get organizationName() {
        return this.orgName;
    }

    public get memList() {
        return this.memList;
    }

    public get affList(): Array<Affair> {
        return this.affList;
    }

    constructor(orgName: string) {
        this.orgName = orgName;
    }
}

class Affair {
    private affairName: string;
    private zipCode: string;
    private date: string;

    private membList: Array<Member>;

    public get affName(): string {
        return this.affairName;
    }

    public set aName(val) {
        this.affairName = val;
    }

    public get zCode(): string {
        return this.zipCode;
    }

    public set ziCode(val) {
        this.zipCode = val;
    }

    public get affDate(): string {
        return this.date;
    }

    public set affairDate(val) {
        this.date = val;
    }

    public get memberList(): Array<Member> {
        return this.membList;
    }

    constructor(affairName, zipCode, date) {
        this.affairName = affairName;
        this.zipCode = zipCode;
        this.date = date;
    }
}

export class AffairManager {
    private member: Array<Member> = new Array();
    private affair: Array<Affair> = new Array();
    private organization: Array<Organization> = new Array();

    public get affList(): Array<Affair> {
        return this.affair;
    }

    public get orgList(): Array<Organization> {
        return this.organization;
    }

    public get members(): Array<Member> {
        return this.members;
    }

    addOrganization(orgName: string) {
        let newOrg = new Organization(orgName);
    }

    addMember(name: string, email: string) {
        let newMem = new Member(name, email);
        this.members.push(newMem);
    }

    addAffair(affName: string, zip: string, date: string) {
        let newAff = new Affair(affName, zip, date);
    }

    addMemberToAffair(name, affName) {

    }

    findMemberNames(query) {

    }

    findAffairNames(search) {

    }

    findOrganizationNames(search) {

    }

    modifyAffair(search, newName) {

    }
    modifyAffair(search, newName, newTime) {
        
    }

    addAffairToOrganization(affName, orgName) {

    }

    getMembers(search) {

    }
}

