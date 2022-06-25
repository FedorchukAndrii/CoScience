import { Injectable } from '@angular/core';
import {Interest} from "../classes/interest";
import {Observable, of} from "rxjs";
import {INTERESTS} from "../mocks/interests";

@Injectable({
  providedIn: 'root'
})
export class InterestService {

  constructor() { }

  getInterests(): Observable<Interest[]> {
    const interests = of(INTERESTS);
    return interests;
  }
}
