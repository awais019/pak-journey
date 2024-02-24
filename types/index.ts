export type User = {
  id: String;
  firstName: String;
  lastNmae: String;
  email: String;
  gender: Gender;
  dob: Date;
  email_verified: Boolean;
};
enum Gender {
  MALE,
  FEMALE,
}
