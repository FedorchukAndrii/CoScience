import { Injectable } from '@angular/core';
import { Role} from "../classes/role";
import { ROLES } from '../mocks/roles';
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor() { }

  getRoles(): Observable<Role[]> {
    const roles = of(ROLES);
    return roles;
  }
}
