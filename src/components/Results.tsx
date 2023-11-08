import { useFootball } from "../context/FootballProvider";
import { matchesType } from "../utils/types";

const Results = ({ matchesList }: { matchesList: matchesType[] }) => {
  const { liveFootball } = useFootball();

  const filterLive = matchesList?.filter((match) => match.status === "IN_PLAY");

  const resultMatch = liveFootball ? filterLive : matchesList;

  return (
    <>
      {resultMatch?.length === 0 ? (
        <div className="w-full mt-5 text-center text-lg font-semibold text-[#053B50]">
          هیچ مسابقه ای در حال برگزاری نیست
        </div>
      ) : (
        resultMatch?.map((data) => (
          <div
            key={data.id}
            className={`flex items-center py-1 my-2 border-b border-gray-400 last:border-none`}
          >
            <p className="w-[10%] lg:text-lg text-sm font-semibold text-[#053B50]">
              {new Date(data?.utcDate).toLocaleTimeString("fa-IR").slice(0, -3)}
            </p>

            <div className="flex-1 flex items-center justify-center w-[90%]">
              <div className="flex items-center gap-x-2 text-[#053B50] w-[45%]">
                <img
                  src={data?.homeTeam?.crest}
                  alt={data?.homeTeam?.name}
                  className="lg:w-8 lg:h-8 h-6 w-6 object-contain"
                />
                <h3 className="md:text-lg text-sm font-semibold text-[#053B50]">
                  {data?.homeTeam?.name}
                </h3>
              </div>
              <div className="flex items-center lg:gap-x-5 gap-x-2 text-[#053B50]">
                <span className="lg:text-xl text-base">
                  {data?.score?.fullTime.home ?? 0}
                </span>
                {data?.status === "IN_PLAY" ? (
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                ) : (
                  "-"
                )}
                <span className="lg:text-xl text-base">
                  {data?.score?.fullTime.away ?? 0}
                </span>
              </div>
              <div className="flex items-center justify-end gap-x-2 text-[#053B50] w-[48%]">
                <h3 className="md:text-lg text-sm font-semibold">
                  {data?.awayTeam?.name}
                </h3>
                <img
                  src={data?.awayTeam?.crest}
                  alt={data?.awayTeam?.name}
                  className="lg:w-8 lg:h-8 h-6 w-6 object-contain"
                />
              </div>
            </div>
          </div>
        ))
      )}
    </>
  );
};

export default Results;
