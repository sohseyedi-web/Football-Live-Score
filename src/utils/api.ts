import axios from "axios";
import { http } from "./http";
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

const prevOptions: apiOption = {
  params: { date: yesterday },
};
const nextOptions: apiOption = {
  params: { date: tomorrow },
};

export const getAllMatches = async () => {
  try {
    const { data } = await http.get("/matches");
    return data;
  } catch (error: any) {
    console.log(error.message);
  }
};

export const getMatchesIsFinished = async () => {
  try {
    const { data } = await http.get("/matches", prevOptions);
    return data;
  } catch (error: any) {
    console.log(error.message);
  }
};
export const getMatchesTommorow = async () => {
  try {
    const { data } = await http.get("/matches", nextOptions);
    return data;
  } catch (error: any) {
    console.log(error.message);
  }
};
