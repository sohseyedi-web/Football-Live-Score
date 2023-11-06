import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { useState, useEffect } from "react";
import Results from "./Results";
import { getAllMatches, getMatchesIsFinished } from "./../utils/api";
import HeaderResults from "./common/HeaderResults";

const Layout = () => {
  const [matches, setMatches] = useState([]);
  const [finishMatch, setFinishMatch] = useState([]);
  const [dayTime, setDayTime] = useState(false);

  const getData = async () => {
    const data = await getAllMatches();
    setMatches(data?.matches);
  };

  const prevGetDate = async () => {
    const data = await getMatchesIsFinished();
    setFinishMatch(data?.matches);
  };

  useEffect(() => {
    if (dayTime) {
      prevGetDate();
    } else {
      getData();
    }
  }, [dayTime]);

  return (
    <section className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 flex h-full">
        <Sidebar />
        <main className="flex-1 px-2 py-3">
          <section className="lg:w-[70%] max-w-7xl mx-auto bg-slate-100 p-2">
            <HeaderResults setDayTime={setDayTime} dayTime={dayTime} />
            <hr />
            <Results matchesList={dayTime === false ? matches : finishMatch} />
          </section>
        </main>
      </main>
    </section>
  );
};

export default Layout;
