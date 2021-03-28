import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

import { HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-employee-detail',
  template: `
    <h2>Employee Detail</h2>
    <h3 *ngIf="errorMsg; else table">{{errorMsg}}</h3>
    <ng-template #table>
    <table  border=1>
      <thead>
        <td>ID</td>
        <td>Name</td>
        <td>Age</td>
      </thead>
      <tr *ngFor="let e of employees">
        <td>{{e.id}} </td> 
        <td>{{e.name}}</td>
        <td>{{e.age}}</td>
      </tr>
    </table>
    </ng-template>
    <hr>
    `,
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  employees = [];
  errorMsg = "";
  constructor(private employeeService:EmployeeService) { }

  ngOnInit(): void {
    this.employeeService.getEmployees()
     .subscribe(data => this.employees = data,
                 error => this.errorMsg = error);
   }

  
}
