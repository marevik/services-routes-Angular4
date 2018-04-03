import { Employer } from "../app/employer.model";

export class ManageSevice {
    private employers: Employer[] = [
        new Employer("Max", 500), 
        new Employer("Lilia", 450)];


        
        getEmployers(): Employer[] {
            return this.employers;
        }

        addEployer(employer: Employer) {
            this.employers.push(employer);
        }

        deleteEmployer(employer:Employer) {
            let i = this.employers.indexOf(employer);
            if(i > -1) {
                this.employers.slice(i, 1);
            }
        }


}