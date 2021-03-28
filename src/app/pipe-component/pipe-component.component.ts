import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-component',
  template: `
    <h3>Uppercase - {{"hi" | uppercase}}</h3>
    <h3>Slicing - {{"Slicing" | slice:3}}</h3>
    <h3>JSON = {{json_data | json}}</h3>

    <h3>5.678 | number:'1.2-3' = {{5.678 | number:'1.2-3'}}</h3>
    <h3>5.678 | number:'3.4-5' = {{5.678 | number:'3.4-5'}}</h3>
    <h3>5.678 | number:'3.1-2' = {{5.678 | number:'3.1-2'}}</h3>
    <h3>Percent of 0.25 = {{0.25 | percent}}</h3>
    <h3>Currency (default) = {{25 | currency}}</h3>
    <h3>Currency (INR) = {{25 | currency:'INR'}}</h3>
    <h3>Currency (EUR) = {{25 | currency:'EUR'}}</h3>
    <h3>Currency (GBP) = {{25 | currency:'GBP'}}</h3>
    <h3>Currency (JPY) = {{25 | currency:'JPY'}}</h3>

    <h3>date : {{date}}</h3>
    <h3>date:'short' = {{date | date:'short'}}</h3>
    <h3>date:'shortDate' = {{date | date:'shortDate'}}</h3>
    <h3>date:'shortTime' = {{date | date:'shortTime'}} //medium and long if necessary</h3>

    <hr>
  `,
  styleUrls: ['./pipe-component.component.css']
})
export class PipeComponentComponent implements OnInit {

  json_data = {
    "firstName":"Good",
    "lastName":"boi"
  }
  date = new Date();
  constructor() { }

  ngOnInit(): void {
  }

}
