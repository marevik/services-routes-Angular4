import { Component, OnInit } from '@angular/core';
import { Employer } from '../employer.model';
import { ManageSevice } from '../../services/manage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-managment',
  templateUrl: './managment.component.html',
  styleUrls: ['./managment.component.css']
})
export class ManagmentComponent implements OnInit {

  employers: any;
  emloyers: Employer [] = [];
  name: string;
  sallary: number;
  constructor(private managetService: ManageSevice, private router:Router) { }

  ngOnInit() {
    this.emloyers = this.managetService.getEmployers();
    console.log(this.emloyers);
  }

  addNewEmployer() {
    let employer = new Employer(this.name, this.sallary);
    this.managetService.addEployer(employer);
  }
  goToEmpl() {
    this.router.navigate(['/employers'])

  }

 
  deleteEmployer(employers:Employer) {
     new Employer(this.name, this.sallary);
      this.employers.slice(1, 1);
      // console.log(this.emloyers)
            
  }
}

