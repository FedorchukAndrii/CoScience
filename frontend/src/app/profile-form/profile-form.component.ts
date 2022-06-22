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
    this.roles.forEach(role => {
      if (role.id === id) {
        role.checked = !role.checked;
      }
    });
    this.model.roles = this.roles.filter(t => t.checked);
  }
}
