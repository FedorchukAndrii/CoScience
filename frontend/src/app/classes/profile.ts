// Description to a user's profile-form (e.g. first name, last name, interests, etc.)

export class Profile {
  constructor(
    public id: number,
    public firstname: string,
    public lastname: string,
    public interests?: string, // array of Interest
    public bio?: string,
    public location?: Location,
    public city?: string,
  ) {
  }
}
