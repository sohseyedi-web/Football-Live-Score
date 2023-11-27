import HeaderMatches from "./common/HeaderMatches";
import { useFootball } from "../context/FootballProvider";
import Loading from "./common/Loading";
import getTime from "./../utils/getDate";
import LeagueLayout from "./leagueContent/LeagueLayout";
import { useQuery } from "@tanstack/react-query";
import { getMatches } from "../utils/http";

const Layout = () => {
  const { dayTime, keyLeagues } = useFootball();
  const time = getTime(dayTime);

  const { data, isLoading } = useQuery({
    queryKey: ["getMatches", time],
    queryFn: () => getMatches(time),
  });

  return (
    <main className="max-w-7xl mx-auto bg-gray-100 my-3 rounded-lg shadow-md">
      <HeaderMatches />
      <hr />
      {isLoading ? (
        <Loading />
      ) : (
        <LeagueLayout matchesList={data?.matches} keyLeagues={keyLeagues} />
      )}
    </main>
  );
};

export default Layout;
