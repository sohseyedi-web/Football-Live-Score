import HeaderMatches from "./common/HeaderMatches";
import Loading from "./common/Loading";
import LeagueLayout from "./leagueContent/LeagueLayout";
import { useLeagueList } from "./../hooks/useLeagueList";

const Layout = () => {
  const { isLoading } = useLeagueList();

  return (
    <main className="max-w-7xl mx-auto bg-gray-100 my-3 rounded-lg shadow-md">
      <HeaderMatches />
      <hr />
      {isLoading ? <Loading /> : <LeagueLayout />}
    </main>
  );
};

export default Layout;
