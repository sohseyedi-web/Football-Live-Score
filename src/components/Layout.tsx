import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { useState, useEffect } from "react";
import Results from "./Results";
import {
  getAllMatches,
  getMatchesCL,
  getMatchesIsFinished,
  getMatchesTommorow,
} from "./../utils/api";
import HeaderResults from "./common/HeaderResults";
import { useFootball } from "../context/FootballProvider";
import Loading from "./common/Loading";

const Layout = () => {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(false);
  const { dayTime, activeNavbar } = useFootball();

  const getAllData = async () => {
    setLoading(true);
    try {
      if (dayTime === "0") {
        const data = await getMatchesIsFinished();
        setMatches(data?.matches);
      } else if (dayTime === "1") {
        const data = await getAllMatches();
        const ensasn = await getMatchesCL();
        console.log(ensasn);
        setMatches(data?.matches);
      } else {
        const data = await getMatchesTommorow();
        setMatches(data?.matches);
      }
    } catch (error: any) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllData();
  }, [dayTime]);

  return (
    <>
      <Navbar />
      <section className="flex ">
        <Sidebar />
        <main className="flex-1 ">
          <div className=" bg-slate-100 p-2 my-3 rounded-lg lg:w-[80%] max-w-7xl mx-auto">
            <HeaderResults />
            <hr />
            {loading ? <Loading /> : <Results matchesList={matches} />}
          </div>
        </main>
      </section>
    </>
  );
};

export default Layout;
