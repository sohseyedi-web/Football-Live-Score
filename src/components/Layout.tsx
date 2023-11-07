import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { useState, useEffect } from "react";
import Results from "./Results";
import {
  getAllMatches,
  getMatchesIsFinished,
  getMatchesTommorow,
} from "./../utils/api";
import HeaderResults from "./common/HeaderResults";
import { useFootball } from "../context/FootballProvider";
import Loading from "./common/Loading";

const Layout = () => {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(false);
  const { dayTime } = useFootball();

  const getAllData = async () => {
    setLoading(true);
    try {
      if (dayTime === "0") {
        const data = await getMatchesIsFinished();
        setMatches(data?.matches);
      } else if (dayTime === "1") {
        const data = await getAllMatches();
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
    <section className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 flex h-full">
        <Sidebar />
        <main className="flex-1 px-2 py-3">
          <section className="lg:w-[70%] max-w-7xl mx-auto bg-slate-100 p-2">
            <HeaderResults />
            <hr />
            {loading ? (
              <Loading/>
            ) : (
              <Results matchesList={matches} />
            )}
          </section>
        </main>
      </main>
    </section>
  );
};

export default Layout;
