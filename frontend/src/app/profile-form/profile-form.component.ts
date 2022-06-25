import {Component, OnInit} from '@angular/core';
import { Profile } from "../classes/profile";
import {Role} from "../classes/role";
import {RoleService} from "../shared/role.service";
import {CheckboxElement} from "../interfaces/checkboxElement";
import {InterestService} from "../shared/interest.service";
import {Interest} from "../classes/interest";

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.scss']
})
export class ProfileFormComponent implements OnInit {

  interests: Interest[] = [];
  roles: Role[] = [];
  checkedRoles: Role[] = [];
  model = new Profile(188, 'Johny', 'Noxwill', this.interests, this.checkedRoles);
  submitted = false;

  constructor(private rolesService: RoleService, private interestService: InterestService) {
  }

  onSubmit() { this.submitted = true; }

  ngOnInit(): void {
    this.getRoles();
    this.getInterests();
  }

  getRoles(): void {
    this.rolesService.getRoles()
      .subscribe(roles => this.roles = roles);
  }

  getInterests(): void {
    this.interestService.getInterests()
      .subscribe(interests => this.interests = interests);
  }

  addCheckedRoles (checkedElements: CheckboxElement[]) {
    this.model.roles = checkedElements;
  }
}
