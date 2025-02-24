export type User = {
  id: number;
  name: string;
  age: number;
  profilePic: string;
  bio: string;
  preferredLanguage: string;
  preference: "Men" | "Women" | "No Preference";
  dateOfBirth: DateOfBirth;
  email: string;
  phoneNumber?: number;
  location: Location;
};
export type Location = {
  latitude: number;
  longitude: number;
};
export type DateOfBirth = {
  _seconds: number;
  _nanoseconds: number;
};

export const isDateOfBirth = (dateOfBirth: any): dateOfBirth is DateOfBirth => {
  return (
    dateOfBirth &&
    typeof dateOfBirth._seconds === "number" &&
    typeof dateOfBirth._nanoseconds === "number"
  );
};
export const isLocation = (location: any): location is Location => {
  return (
    location &&
    typeof location.latitude === "number" &&
    typeof location.longitude === "number"
  );
};

export const assertUser = (user: any): asserts user is User => {
  if (!user) {
    throwError("User", "user", "object", user);
  }
  if (typeof user.id !== "number") {
    throwError("User", "id", "number", user.id);
  }
  if (typeof user.name !== "string") {
    throwError("User", "name", "string", user.name);
  }
  if (typeof user.age !== "number") {
    throwError("User", "age", "number", user.age);
  }
  if (typeof user.profilePic !== "string") {
    throwError("User", "profilePic", "string", user.profilePic);
  }
  if (typeof user.bio !== "string") {
    throwError("User", "bio", "string", user.bio);
  }
  if (typeof user.preferredLanguage !== "string") {
    throwError("User", "preferredLanguage", "string", user.preferredLanguage);
  }
  if (!isPreference(user.preference)) {
    throwError("User", "preference", "string", user.preference);
  }
  if (!isDateOfBirth(user.dateOfBirth)) {
    throwError("User", "dateOfBirth", "object", user.dateOfBirth);
  }
  if (typeof user.email !== "string") {
    throwError("User", "email", "string", user.email);
  }
  if (!isLocation(user.location)) {
    throwError("User", "location", "object", user.location);
  }
  if (user.phoneNumber && typeof user.phoneNumber !== "number") {
    throwError("User", "phoneNumber", "number", user.phoneNumber);
  }
};

export const isPreference = (
  preference: any
): preference is User["preference"] => {
  return /^(Men|Women|No Preference)$/.test(preference);
};

export function throwError(
  obj: string,
  variable: string,
  type: string,
  value: any
) {
  throw new Error(
    `Object '${obj}' must have a '${variable}' ${type} property.\nFound value: ${value}\n`
  );
}
