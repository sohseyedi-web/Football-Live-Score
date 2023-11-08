import axios from "axios";
import { apiOption } from "./types";

const todayDate = new Date();
const getDateYesterday = new Date(todayDate.getTime());
const getDateTomorrow = new Date(todayDate.getTime());
getDateYesterday.setDate(todayDate.getDate() - 1);
getDateTomorrow.setDate(todayDate.getDate() + 1);

const preYear = getDateYesterday.getFullYear();
const preMonth = String(getDateYesterday.getMonth() + 1).padStart(2, "0");
const preday = String(getDateYesterday.getDate()).padStart(2, "0");

const nextYear = getDateTomorrow.getFullYear();
const nextMonth = String(getDateTomorrow.getMonth() + 1).padStart(2, "0");
const nextDay = String(getDateTomorrow.getDate()).padStart(2, "0");

const yesterday = [preYear, preMonth, preday].join("-");
const tomorrow = [nextYear, nextMonth, nextDay].join("-");

const basicOption: apiOption = {
  headers: {
    "Content-Type": "application/json",
    "X-Auth-Token": "32a89dcc0a1b444aac822285752adb07",
  },
};
const prevOptions: apiOption = {
  params: { date: yesterday },
  headers: {
    "X-Auth-Token": "32a89dcc0a1b444aac822285752adb07",
    "Content-Type": "application/json",
  },
};
const nextOptions: apiOption = {
  params: { date: tomorrow },
  headers: {
    "X-Auth-Token": "32a89dcc0a1b444aac822285752adb07",
    "Content-Type": "application/json",
  },
};

export const getAllMatches = async () => {
  try {
    const { data } = await axios.get(
      "https://api.football-data.org/v4/matches",
      basicOption
    );
    return data;
  } catch (error: any) {
    console.log(error.message);
  }
};

export const getMatchesIsFinished = async () => {
  try {
    const { data } = await axios.get(
      "https://api.football-data.org/v4/matches",
      prevOptions
    );
    return data;
  } catch (error: any) {
    console.log(error.message);
  }
};
export const getMatchesTommorow = async () => {
  try {
    const { data } = await axios.get(
      "https://api.football-data.org/v4/matches",
      nextOptions
    );
    return data;
  } catch (error: any) {
    console.log(error.message);
  }
};
export const getMatchesCL = async () => {
  try {
    const { data } = await axios.get(
      "https://api.football-data.org/v4/competitions/CL/matches",
      basicOption
    );
    return data;
  } catch (error: any) {
    console.log(error.message);
  }
};
