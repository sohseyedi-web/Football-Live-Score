import { useFootball } from "../../context/FootballProvider";
import { keyLeagues, matchesType } from "../../utils/types";
import LeagueTable from "./LeagueTable";

type LeagueLayoutType = {
  matchesList: matchesType[];
  keyLeagues: keyLeagues[];
};

const LeagueLayout = ({ matchesList, keyLeagues }: LeagueLayoutType) => {
  const { liveFootball } = useFootball();

  const filterLive = matchesList?.filter((match) => match.status === "IN_PLAY");

  const resultMatch = liveFootball ? filterLive : matchesList;

  const leagueResult = keyLeagues.map((key) =>
    resultMatch?.filter((res) => res.competition.code === key.key)
  );
  return (
    <>
      {resultMatch?.length === 0 ? (
        <div className="w-full mt-5 text-center text-lg font-semibold text-[#053B50]">
          هیچ مسابقه ای در حال برگزاری نیست
        </div>
      ) : (
        leagueResult.map((res) => <LeagueTable LeagueTable={res} />)
      )}
    </>
  );
};

export default LeagueLayout;
