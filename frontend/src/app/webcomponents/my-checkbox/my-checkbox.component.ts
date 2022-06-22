import {Component, Input, OnInit} from '@angular/core';
import {CheckboxElement} from "../../interfaces/checkboxElement";

@Component({
  selector: 'app-my-checkbox',
  templateUrl: './my-checkbox.component.html',
  styleUrls: ['./my-checkbox.component.scss']
})
export class MyCheckboxComponent implements OnInit {

  @Input() elements?: Array<CheckboxElement> =  [];

  constructor() { }

  ngOnInit(): void {
  }

  onChange(id: number) {
   this.elements?.forEach(element => {
     if (element.id === id) {
       element.checked = !element.checked;
     }
   });
  }

}
