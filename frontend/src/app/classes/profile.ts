// Description to a user's profile-form (e.g. first name, last name, interests, etc.)

import {Role} from "./role";

export class Profile {
  constructor(
    public id: number,
    public firstname: string,
    public lastname: string,
    public interests?: string, // array of Interest
    public roles?: Role[], // Role
    public bio?: string,
    public location?: Location,
    public city?: string,
  ) {
  }
}
