export interface User {
  _id: string;
  firstName: string;
  lastName: string;
  picture: string;
  dateOfBirth: Date;
  likes: string[];
  passes: string[];
}
