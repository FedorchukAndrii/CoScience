import {Component, OnInit} from '@angular/core';
import { Profile } from "../../classes/profile";
import {Role} from "../../classes/role";
import {RoleService} from "../../shared/role.service";
import {CheckboxElement} from "../../interfaces/checkboxElement";
import {InterestService} from "../../shared/interest.service";
import {Interest} from "../../classes/interest";
import {AuthService} from "../../shared/auth.service";
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {UserService} from "../../shared/user.service";

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.scss']
})
export class ProfileFormComponent implements OnInit {
  endpoint = environment.apiUrl;

  interests: Interest[] = [];
  roles: Role[] = [];
  checkedRoles: Role[] = [];
  model = new Profile(0,'', '', [], this.checkedRoles);
  submitted = false;

  constructor(
    private rolesService: RoleService,
    private interestService: InterestService,
    private authService: AuthService,
    private userService: UserService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.getRoles();
    this.getInterests();
    this.getUserId();
  }

  onSubmit() {
    return this.http.post(this.endpoint + 'profile/create/', this.model).subscribe(data => console.log(data));
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

  getUserId(): void {
    this.userService.getMe().subscribe(data => this.model.userId = parseInt(data.id));
  }

}
