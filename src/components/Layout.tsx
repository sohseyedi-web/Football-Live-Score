import Navbar from "./Navbar";
import HeaderMatches from "./common/HeaderMatches";
import { useFootball } from "../context/FootballProvider";
import Loading from "./common/Loading";
import getTime from "./../utils/getDate";
import LeagueLayout from "./leagueContent/LeagueLayout";
import { useQuery } from "@tanstack/react-query";
import { getMatches } from "../utils/http";

const Layout = () => {
  const { dayTime } = useFootball();
  const time = getTime(dayTime);

  const { data, isLoading } = useQuery({
    queryKey: ["getMatches", time],
    queryFn: () => getMatches(time),
  });


  

  // const getAllData = async () => {
  //   setLoading(true);
  //   try {
  //     const { data } = await http.get(`/matches?date=${time}`);
  //     setMatches(data?.matches);
  //   } catch (error: any) {
  //     console.log(error.message);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // useEffect(() => {
  //   getAllData();
  // }, [dayTime]);

  // return (
  //   <>
  //     <Navbar />
  //     <section className="flex ">
  //       <Sidebar />
  //       <main className="flex-1 ">
  //         <div className=" bg-slate-100 p-2 my-3 rounded-lg lg:w-[80%] max-w-7xl mx-auto">
  //           <HeaderResults />
  //           <hr />
  //           {loading ? <Loading /> : <Results matchesList={data} />}
  //         </div>
  //       </main>
  //     </section>
  //   </>
  // );

  return (
    <>
      <Navbar />
      <main className="max-w-7xl mx-auto bg-gray-100 my-3 rounded-lg shadow-md">
        <HeaderMatches />
        <hr />
        {isLoading ? <Loading /> : <LeagueLayout matchesList={data?.matches} />}
      </main>
    </>
  );
};

export default Layout;
