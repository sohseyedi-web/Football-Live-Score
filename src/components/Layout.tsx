import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { useState, useEffect } from "react";
import axios from "axios";
import Results from "./Results";

const Layout = () => {
  const [matches, setMatches] = useState([]);

  const getData = async () => {
    const { data } = await axios.get(
      "https://api.football-data.org/v4/matches",
      {
        headers: {
          "X-Auth-Token": "32a89dcc0a1b444aac822285752adb07",
          "Content-Type": "application/json",
        },
      }
    );
    console.log(data);
  };

  useEffect(() => {
    getData();
  }, [matches]);

  return (
    <section className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 flex h-full">
        <Sidebar />
        <main className="flex-1 px-2 py-3">
          <Results/>
        </main>
      </main>
    </section>
  );
};

export default Layout;
