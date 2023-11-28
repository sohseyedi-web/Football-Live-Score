import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useFootball } from "../context/FootballProvider";
import getTime from "../utils/getDate";
import { getMatches } from "../utils/http";
import { keyLeagues, matchesType } from "../utils/types";

type LeagueLayoutType = {
  matchesList: matchesType[];
  keyLeagues: keyLeagues[];
};

export const useLeagueList = () => {
  const [leagueResult, setLeagueResult] = useState<[]>([]);

  const { liveFootball, keyLeagues, dayTime } = useFootball();
  const time = getTime(dayTime);

  const { data, isLoading } = useQuery({
    queryKey: ["getMatches", time],
    queryFn: () => getMatches(time),
  });


  const filterLive = data?.matches.filter(
    (match: matchesType) => match.status === "IN_PLAY"
  );

  const resultMatch = liveFootball ? filterLive : data?.matches;

  useEffect(() => {
    const league = keyLeagues.map((key: keyLeagues) =>
      resultMatch?.filter(
        (res: matchesType) => res.competition.code === key.key
      )
    );
    setLeagueResult(league);
  }, [liveFootball, data,keyLeagues]);

  return { leagueResult, isLoading, resultMatch };
};
