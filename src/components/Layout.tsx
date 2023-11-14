import Navbar from "./Navbar";
import { useState, useEffect } from "react";
import Results from "./Results";
import HeaderResults from "./common/HeaderResults";
import { useFootball } from "../context/FootballProvider";
import Loading from "./common/Loading";
import { http } from "../utils/http";
import getTime from "./../utils/getDate";

const Layout = () => {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(false);
  const { dayTime } = useFootball();
  const time = getTime(dayTime);

  const getAllData = async () => {
    setLoading(true);
    try {
      const { data } = await http.get(`/matches?date=${time}`);
      setMatches(data?.matches)
    } catch (error: any) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllData();
  }, [dayTime]);

  // return (
  //   <>
  //     <Navbar />
  //     <section className="flex ">
  //       <Sidebar />
  //       <main className="flex-1 ">
  //         <div className=" bg-slate-100 p-2 my-3 rounded-lg lg:w-[80%] max-w-7xl mx-auto">
  //           <HeaderResults />
  //           <hr />
  //           {loading ? <Loading /> : <Results matchesList={matches} />}
  //         </div>
  //       </main>
  //     </section>
  //   </>
  // );

  return (
    <>
      <Navbar />
      <main className="max-w-7xl mx-auto bg-gray-100 my-3 rounded-lg shadow-md">
        <HeaderResults />
        <hr />
        {loading ? <Loading /> : <Results matchesList={matches} />}
      </main>
    </>
  );
};

export default Layout;
