import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IEmployee } from './employee';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private url:string = "/assets/data/employees.json";
  constructor(private http:HttpClient) { }

  getEmployees():Observable<IEmployee[]>{
    return this.http.get <IEmployee[]> (this.url) //casting the response to an array of IEmployee
                    .pipe(catchError(error => {
                      return throwError(error.message || "Server error");
                    }));
  }
}
