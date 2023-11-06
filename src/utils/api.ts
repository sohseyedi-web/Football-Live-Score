import axios from "axios";
import { apiOption } from "./types";

const todayDate = new Date();
const getDateMonth = new Date(todayDate.getTime());
getDateMonth.setDate(todayDate.getDate() - 1);
const year = getDateMonth.getFullYear();
const month = String(getDateMonth.getMonth() + 1).padStart(2, "0");
const day = String(getDateMonth.getDate()).padStart(2, "0");

const yesterday = [year, month, day].join("-");

const allOptions: apiOption = {
  method: "GET",
  url: "https://api.football-data.org/v4/matches",
  headers: {
    "X-Auth-Token": "32a89dcc0a1b444aac822285752adb07",
    "Content-Type": "application/json",
  },
};
const paramsOptions: apiOption = {
  method: "GET",
  url: "https://api.football-data.org/v4/matches",
  params: { date: yesterday },
  headers: {
    "X-Auth-Token": "32a89dcc0a1b444aac822285752adb07",
    "Content-Type": "application/json",
  },
};

export const getAllMatches = async () => {
  try {
    const { data } = await axios.request(allOptions);
    return data;
  } catch (error: any) {
    console.log(error.message);
  }
};

export const getMatchesIsFinished = async () => {
  try {
    const { data } = await axios.request(paramsOptions);
    return data;
  } catch (error: any) {
    console.log(error.message);
  }
};
