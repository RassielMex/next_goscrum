import {
  RegisterLeaderUser,
  RegisterMemberUser,
  RegisterUser,
  Task,
  TaskWithUser,
  Team,
  TeamfromDB,
  UserCredentials,
  UserFromDB,
} from "../models/definitions";

import { v4 as uuidv4 } from "uuid";

export async function getUserFromDb(credentials: UserCredentials) {
  try {
    const getUserResp = await fetch(
      `${process.env.API_BASE}/users/credentials`,
      {
        method: "POST",
        body: JSON.stringify(credentials),
        headers: { "Content-Type": "application/json" },
      }
    );
    const jsonResp = await getUserResp.json();
    if (jsonResp.statusCode === 404) {
      return null;
    }
    return jsonResp;
  } catch (error) {
    console.error("Failed to fetch user:", error);
    return null;
  }
}

export async function createTask(task: Task) {
  try {
    const response = await fetch(`${process.env.API_BASE}/tasks`, {
      method: "POST",
      body: JSON.stringify(task),
      headers: { "Content-Type": "application/json" },
    });
    const jsonResponse = await response.json();
    //console.log(jsonResponse);
    if (jsonResponse.statusCode === 400) {
      return null;
    }
    return jsonResponse;
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
      const createTeamResp = await fetch(`${process.env.API_BASE}/teams`, {
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
        `${process.env.API_BASE}/teams/identifier/${memberUser.teamIdentifier}`,
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        }
      );
      const jsonGetTeamResp = (await getTeamResp.json()) as TeamfromDB;
      //console.log(jsonGetTeamResp);
      userData = {
        name: memberUser.name,
        email: memberUser.email,
        password: memberUser.password,
        role: memberUser.role,
        teamId: jsonGetTeamResp.id,
      };
      //console.log(userData);
    }

    const resp = await fetch(`${process.env.API_BASE}/users`, {
      method: "POST",
      body: JSON.stringify(userData),
      headers: { "Content-Type": "application/json" },
    });
    const jsonResp = await resp.json();
    //console.log("User created from DB:", jsonResp);
    return jsonResp as UserFromDB;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function getTasks(teamId: string) {
  try {
    const tasksResponse = await fetch(
      `${process.env.API_BASE}/tasks/?teamId=${teamId}`,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    );
    const jsonResp = await tasksResponse.json();
    //console.log("Taks:", jsonResp);
    if (jsonResp.length <= 0) {
      return null;
    }
    return jsonResp as TaskWithUser[];
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function getUsers(teamId: string) {
  try {
    const usersResponse = await fetch(
      `${process.env.API_BASE}/users/?teamId=${teamId}`,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    );
    const jsonResp = await usersResponse.json();
    //console.log(jsonResp);
    if (jsonResp.length <= 0) {
      return null;
    }
    return jsonResp as UserFromDB[];
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function getTeamIdentifier(id: number) {
  try {
    const teamResponse = await fetch(`${process.env.API_BASE}/teams/${id}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    const team = (await teamResponse.json()) as Team;
    //console.log(team);
    if (!team.identifier) {
      return null;
    }
    return team.identifier;
  } catch (error) {
    console.log(error);
    return null;
  }
}
