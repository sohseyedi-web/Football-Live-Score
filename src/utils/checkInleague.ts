import { keyLeagues } from "./types";

export function checkInLeague(leagues: keyLeagues[], item: keyLeagues) {
  return leagues.find((c) => c.id === item.id);
}
