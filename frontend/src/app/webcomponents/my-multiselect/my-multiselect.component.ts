import {Component, ElementRef, OnInit} from '@angular/core';
import {RoleService} from "../../shared/role.service";
import {Role} from "../../classes/role";
import {FormControl} from "@angular/forms";
import {COMMA, ENTER} from "@angular/cdk/keycodes";
import {MatChipInputEvent} from "@angular/material/chips";
import {MatAutocompleteSelectedEvent} from "@angular/material/autocomplete";
import {Observable} from "rxjs";

@Component({
  selector: 'app-my-multiselect',
  templateUrl: './my-multiselect.component.html',
  styleUrls: ['./my-multiselect.component.scss']
})
export class MyMultiselectComponent implements OnInit{
  placeholder = 'Select your interests';
  elements: Role[] = [];
  selectedElements: any[] = [];
  checked = false;

  constructor(private roleService: RoleService, el: ElementRef<HTMLElement>) {
  }

  ngOnInit(): void {
    this.getRoles();
    this.elements.forEach(element => {
      this.selectedElements.push(element);
    });
  }

  getRoles(): void {
    this.roleService.getRoles()
      .subscribe(roles => this.elements = roles);
  }

  onClick() {
    document.getElementById('input-field')?.focus();
    this.checked = !this.checked;
  }

  selectElement() {

  }

 remove(element: Role) {}
  fruitCtrl = new FormControl();
  separatorKeysCodes: number[] = [ENTER, COMMA];
  filteredFruits: Observable<any> = new Observable<any>();

  add(event: MatChipInputEvent): void {}
  selected(event: MatAutocompleteSelectedEvent): void {}
}

