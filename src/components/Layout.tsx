import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { useState, useEffect } from "react";
import Results from "./Results";
import { getAllMatches, getMatchesIsFinished } from "./../utils/api";
import HeaderResults from "./common/HeaderResults";
import { useFootball } from "../context/FootballProvider";

const Layout = () => {
  const [matches, setMatches] = useState([]);
  const [finishMatch, setFinishMatch] = useState([]);
  const { dayTime } = useFootball();

  const getData = async () => {
    const data = await getAllMatches();
    setMatches(data?.matches);
  };

  const prevGetDate = async () => {
    const data = await getMatchesIsFinished();
    setFinishMatch(data?.matches);
  };

  useEffect(() => {
    if (dayTime == "1") {
      getData();
    } else {
      prevGetDate();
    }
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
            <Results matchesList={dayTime == "1" ? matches : finishMatch} />
          </section>
        </main>
      </main>
    </section>
  );
};

export default Layout;
