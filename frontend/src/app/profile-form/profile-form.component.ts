import {Component, OnInit} from '@angular/core';
import { Profile } from "../classes/profile";
import {Role} from "../classes/role";
import {RoleService} from "../shared/role.service";

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.scss']
})
export class ProfileFormComponent implements OnInit {

  interests = ['Angular', 'React', 'Vue'];
  roles: Role[] = [];
  checkedRoles: Role[] = [];
  model = new Profile(188, 'Johny', 'Noxwill', this.interests[0], this.checkedRoles);
  submitted = false;

  constructor(private rolesService: RoleService) {
  }

  onSubmit() { this.submitted = true; }

  ngOnInit(): void {
    this.getRoles();
  }

  getRoles(): void {
    this.rolesService.getRoles()
      .subscribe(roles => this.roles = roles);
  }

  onChange(id: number) {
    const idx = this.roles.findIndex(t => t.id === id);
    this.roles[idx].checked = !this.roles[idx].checked;
    if (this.roles[idx].checked) {
      this.checkedRoles.push(this.roles[idx]);
      this.model.roles = this.checkedRoles;
    } else {
      this.model.roles = this.checkedRoles.filter(t => t.checked);
    }
  }
}
