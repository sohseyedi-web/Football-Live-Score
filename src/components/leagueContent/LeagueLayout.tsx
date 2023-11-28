import LeagueTable from "./LeagueTable";
import { useLeagueList } from "./../../hooks/useLeagueList";

const LeagueLayout = () => {
  const { leagueResult, resultMatch } = useLeagueList();


  return (
    <>
      {resultMatch?.length === 0 || leagueResult?.length === 0 ? (
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
