import { Component, OnInit } from '@angular/core';
import {RoleService} from "../../shared/role.service";
import {Role} from "../../classes/role";

@Component({
  selector: 'app-my-multiselect',
  templateUrl: './my-multiselect.component.html',
  styleUrls: ['./my-multiselect.component.scss']
})
export class MyMultiselectComponent implements OnInit {
  placeholder = 'Select your interests';
  elements: Role[] = [];
  constructor(private roleService: RoleService) { }

  ngOnInit(): void {
    this.getRoles();
  }

  getRoles(): void {
    this.roleService.getRoles()
      .subscribe(roles => this.elements = roles);
  }
}
