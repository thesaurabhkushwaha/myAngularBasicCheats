import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  template: `
    <h2>Employee List</h2>
    <h3>{{errorMsg}}</h3>
    <ul *ngFor="let e of employees">
      <li>{{e.name}}</li>
    </ul><hr>
    `,
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees = [];
  errorMsg ="";
  constructor(private employeeService:EmployeeService) { }

  ngOnInit(): void {
   this.employeeService.getEmployees()
    .subscribe(data => this.employees = data,
                error => this.errorMsg = error);
  }

}
