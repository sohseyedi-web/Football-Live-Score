import { useFootball } from "../context/FootballProvider";
import { matchesType } from "../utils/types";
import LeageTable from "./common/LeageTable";

const Results = ({ matchesList }: { matchesList: matchesType[] }) => {
  const { liveFootball } = useFootball();

  const filterLive = matchesList?.filter((match) => match.status === "IN_PLAY");

  const resultMatch = liveFootball ? filterLive : matchesList;

  const leageTablePL = resultMatch?.filter(
    (match) => match.competition.code === "PL"
  );
  const leageTableDed = resultMatch?.filter(
    (match) => match.competition.code === "DED"
  );

  return (
    <>
      {resultMatch?.length === 0 ? (
        <div className="w-full mt-5 text-center text-lg font-semibold text-[#053B50]">
          هیچ مسابقه ای در حال برگزاری نیست
        </div>
      ) : (
        <>
          <LeageTable leageTable={leageTablePL} nameLeage={"پریمیر لیگ"} />
          <LeageTable leageTable={leageTableDed} nameLeage={"اردیویسه هلند "} />
        </>
      )}
    </>
  );
};

export default Results;
