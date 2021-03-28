import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp1',
  template: `
    <h2 class="{{successClass}} text-special">
      Welcome
    </h2>
    <input [id]="myid" [type] = "mytype" bind-disabled="cb1_disabled">{{cb1}}

    <h2 [class.text-danger]="hasError">Has error check</h2> <!-- Only for applying one class (not scalable) -->

    <h2 [ngClass]="msgClass">NGCLASS check</h2> 

    <h2 [style.color] = "hasError ? 'red':'green'">Style Binding</h2>

    <h2 [style.color] = "highlightColor">Style Binding 2</h2>

    <h2 [ngStyle] = "titleStyles">Style Binding NGSTYLE </h2>

    <button (click) ="onClick($event)">Greet 1</button> 
    <button (click) ="greeting = 'Welcome to event binding!!'">Greet 2</button> {{greeting}}

    <br><br><input type="text" #myinput>
    <button (click)="logMessage(myinput.value)">Log it ! </button>

    <br><br><input type="checkbox" (click)="logCheckbox($event)">{{cb_status}}

    <p>Two-way binding with ngmodel : </p>
    <input [(ngModel)]="name" type="text">
    {{name}}
    <hr>
    `,
  styles: [`
    .text-success{
      color:green;
    }
    .text-danger{
      color:red;
    }
    .text-special{
      font-style:italic;
    }
  `]
})
export class Comp1Component implements OnInit {


  
  myid = "testid";
  mytype= "checkbox";
  cb1="Checkbox 1";
  cb1_disabled=false;

  successClass="text-success";

  isSpecial = "true";

  hasError = true;

  msgClass = {
    "text-success": !this.hasError,
    "text-danger" : this.hasError,
    "text-special": this.isSpecial
  }
  
  highlightColor = "orange";

  titleStyles = {
    color: "blue",
    fontStyle: "italic",
  }

  greeting = "";
  onClick(event){
    console.log(event);
    //setTimeout(function(){ this.greeting = "Hello!!"; }, 1000);
    
    this.greeting = "Hello !!";
  }

  //Data from <input> to TS
  logMessage(input){
    console.log("Your input is : ",input);
  }

  // Checkbox trick
  cb_status = "Checkbox is not checked";
  count = 0;
  logCheckbox(input){
    this.count++;
    if(this.count % 2 != 0)
    this.cb_status = "Checkbox is checked";
    else
    this.cb_status = "Checkbox is not checked";
  }

  // Two-way data binding - ngmodel from FormsModule
  name = "";





  constructor() { }

  ngOnInit(): void {
  }

}
