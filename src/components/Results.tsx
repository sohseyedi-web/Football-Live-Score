import { useFootball } from "../context/FootballProvider";
import { matchesType } from "../utils/types";
import LeagueTable from "./common/LeagueTable";

const Results = ({ matchesList }: { matchesList: matchesType[] }) => {
  const { liveFootball } = useFootball();

  const filterLive = matchesList?.filter((match) => match.status === "IN_PLAY");

  const resultMatch = liveFootball ? filterLive : matchesList;
  const keyWords = ["PL", "DED", "PD", "ELC", "SA", "BL1", "PPL", "FL1"];

  const leagueResult = keyWords.map((key) =>
    resultMatch?.filter((res) => res.competition.code === key)
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

export default Results;
