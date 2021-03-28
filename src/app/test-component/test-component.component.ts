import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';

@Component({
  

  selector: 'app-test-component',
  template: `
    <h2>{{"Hello "+parentData}}</h2>

  <button (click)="fireEvent()">Send event</button>
  `,
  styleUrls: ['./test-component.component.css']
})
export class TestComponentComponent implements OnInit {

  @Input() parentData;

  @Output() childEvent = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  fireEvent(){
    this.childEvent.emit("Yo, nice work");
  }

}
