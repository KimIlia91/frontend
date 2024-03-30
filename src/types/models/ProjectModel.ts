export default class Project {
    id: string;
    name: string;
    customerCompany: string;
    comapnyExecuter: string;
    startDate: Date;
    endDate: Date;
    priority: number;

    constructor(newProject: Project) {
        this.id = newProject.id;
        this.name = newProject.name;
        this.customerCompany = newProject.customerCompany;
        this.comapnyExecuter = newProject.comapnyExecuter;
        this.startDate = newProject.startDate;
        this.endDate = newProject.endDate;
        this.priority = newProject.priority;
    }
}