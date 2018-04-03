import { Component, OnInit } from '@angular/core';
import { Employer } from '../employer.model';
import { ManageSevice } from '../../services/manage.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-employers',
  templateUrl: './employers.component.html',
  styleUrls: ['./employers.component.css']
})
export class EmployersComponent implements OnInit {

  employers: Employer [] = [];
  constructor(private manageService: ManageSevice, private router: Router) { }

  ngOnInit() {
    this.employers = this.manageService.getEmployers();
  }

  goToManage() {
    this.router.navigate(['/manage'])

  }
}
