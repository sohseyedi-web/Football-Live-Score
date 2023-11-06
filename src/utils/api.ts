import axios from "axios";
import { apiOption } from "./types";

const options: apiOption = {
  method: "GET",
  url: "https://api.football-data.org/v4/matches",
  headers: {
    "X-Auth-Token": "32a89dcc0a1b444aac822285752adb07",
    "Content-Type": "application/json",
  },
};

export const getAllMatches = async () => {
  try {
    const { data } = await axios.request(options);
    return data;
  } catch (error: any) {
    console.log(error.message);
  }
};
