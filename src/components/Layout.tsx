import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { useState, useEffect } from "react";
import Results from "./Results";
import { getAllMatches } from "./../utils/api";

const Layout = () => {
  const [matches, setMatches] = useState([]);

  const getData = async () => {
    const data = await getAllMatches();
    setMatches(data?.matches);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <section className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 flex h-full">
        <Sidebar />
        <main className="flex-1 px-2 py-3">
          <Results matchesList={matches} />
        </main>
      </main>
    </section>
  );
};

export default Layout;
