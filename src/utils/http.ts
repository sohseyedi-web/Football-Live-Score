import axios from "axios";

const http = axios.create({
  baseURL: "https://api.football-data.org/v4",
  headers: {
    "X-Auth-Token": "32a89dcc0a1b444aac822285752adb07",
    "Content-Type": "application/json",
  },
});

export const getMatches = async (time: string) => {
  const { data } = await http.get(`/matches?date=${time}`);
  return data;
};
