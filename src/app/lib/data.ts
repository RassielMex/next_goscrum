//import { User } from "next-auth";
import {
  RegisterLeaderUser,
  RegisterMemberUser,
  RegisterUser,
  Task,
  Team,
  TeamfromDB,
} from "../models/definitions";

import { v4 as uuidv4 } from "uuid";

export async function getUserFromDb(email: string, password: string) {
  try {
    console.log(password);
    return { email };
  } catch (error) {
    console.error("Failed to fetch user:", error);
    return null;
  }
}

export async function postTask(task: Task) {
  try {
    const response = await fetch("", {
      body: JSON.stringify(task),
    });
    const jsonResponde = await response.json();
    console.log(jsonResponde);
    return jsonResponde;
  } catch (error) {
    console.log(error);
  }
}

export async function registerUser(
  user: RegisterLeaderUser | RegisterMemberUser
) {
  try {
    let userData: RegisterUser;
    if (user.role === "leader") {
      const leaderUser = user as RegisterLeaderUser;
      const identifier = uuidv4();
      const team: Team = { identifier };
      //console.log(team);
      const createTeamResp = await fetch("http://localhost:8080/api/teams", {
        method: "POST",
        body: JSON.stringify(team),
        headers: { "Content-Type": "application/json" },
      });
      const jsonCreateTeamResp = (await createTeamResp.json()) as TeamfromDB;
      //console.log(jsonCreateTeamResp);
      userData = { ...leaderUser, teamId: jsonCreateTeamResp.id };
    } else {
      const memberUser = user as RegisterMemberUser;

      const getTeamResp = await fetch(
        `http://localhost:8080/api/teams/identifier/${memberUser.teamIdentifier}`,
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        }
      );
      const jsonGetTeamResp = (await getTeamResp.json()) as TeamfromDB;
      //console.log(jsonGetTeamResp);
      userData = { ...user, teamId: jsonGetTeamResp.id };
      //console.log(userData);
    }

    const resp = await fetch("http://localhost:8080/api/users", {
      method: "POST",
      body: JSON.stringify(userData),
      headers: { "Content-Type": "application/json" },
    });
    const jsonResp = await resp.json();
    //console.log("User created from DB:", jsonResp);
    return jsonResp;
  } catch (error) {
    console.log(error);
  }
}
