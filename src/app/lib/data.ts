import { User, Person } from "next-auth/providers/notion";
export async function getUserFromDb(
  email: string,
  password: string
): Promise<User | null> {
  try {
    console.log(password);
    const newPerson: Person = { email: email };
    const newUser: User = {
      id: "1",
      name: "Rassiel",
      type: "Leader",
      avatar_url: "",
      object: "user",
      person: newPerson,
    };
    return newUser;
  } catch (error) {
    console.error("Failed to fetch user:", error);
    return null;
  }
}
