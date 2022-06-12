import {Component, OnInit} from '@angular/core';
import { Profile } from "../classes/profile";

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.scss']
})
export class ProfileFormComponent implements OnInit {
  interests = ['Angular', 'React', 'Vue'];
  model = new Profile(188, 'Johny', 'Noxwill', this.interests[0]);
  submitted = false;

  onSubmit() { this.submitted = true; }

  ngOnInit(): void {
  }
}
