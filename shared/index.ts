export type User = {
  id: string;
  name: string;
  age: number;
  profilePic: string;
  bio: string;
  preferredLanguage: string;
  preference: "Men" | "Women" | "No Preference";
  dateOfBirth: string;
  email: string;
  phoneNumber?: number;
};
