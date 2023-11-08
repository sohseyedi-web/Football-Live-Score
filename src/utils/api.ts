import getTime from "./getDate";
import { http } from "./http";
import { apiOption } from "./types";

const prevOptions: apiOption = {
  params: { date: getTime(-1) },
};
const nextOptions: apiOption = {
  params: { date: getTime(1) },
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
