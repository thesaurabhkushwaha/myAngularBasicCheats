import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp-struc-dir',
  template: `
  <h2> Example 1: ngIf and elseBlock: </h2>
    <button (click)="toggleInsert()">{{buttonStatus}}</button>
    <h3 *ngIf="displayName; else elseBlock">Displayed</h3>
    <ng-template #elseBlock>
      <h3></h3>
    </ng-template>

  <h2> Example 2: using ngIf-thenBlock-elseBlock:</h2>
  <h3 *ngIf="displayName;then thenBlock; else elseBlock">Displayed</h3>

  <ng-template #thenBlock>
    <h3>Displayed</h3>
  </ng-template>

  <ng-template #elseBlock>
    <h3></h3>
  </ng-template>
    
  <h2> Example 3: ngSwitch:</h2>
  <div [ngSwitch] ="color">
    <div *ngSwitchCase="'red'">You picked red color</div>
    <div *ngSwitchCase="'blue'">You picked blue color</div>
    <div *ngSwitchCase="'green'">You picked green color</div>
    <div *ngSwitchDefaul>Pick again !</div>
  </div>

  <h2> Example 3: ngFor:</h2>
  <div *ngFor="let color of colors; index as i"> <!--first,last,odd,even-->
    <h3>{{i}} => {{color}}</h3>
  </div>
  <hr>
  `,
  styleUrls: ['./comp-struc-dir.component.css']
})
export class CompStrucDirComponent implements OnInit {

  displayName = false; //the HTML element is removed from the DOM itself

  buttonStatus = "Insert (display)";

  toggleInsert(){
    if(!this.displayName){
    this.displayName=true;
    this.buttonStatus="Delete (hide)";
    }
    else{
      this.displayName = false;
      this.buttonStatus = "Insert (display)";
    }
  }

  color= "red";

  colors = ["red","blue","green"];
  constructor() { }

  ngOnInit(): void {
  }

}
