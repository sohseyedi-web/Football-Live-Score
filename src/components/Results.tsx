import { useFootball } from "../context/FootballProvider";
import { matchesType } from "../utils/types";
import LeageTable from "./common/LeageTable";

const Results = ({ matchesList }: { matchesList: matchesType[] }) => {
  const { liveFootball } = useFootball();

  const filterLive = matchesList?.filter((match) => match.status === "IN_PLAY");

  const resultMatch = liveFootball ? filterLive : matchesList;
  const keyWords = [
    { id: 2021, code: "PL", name: "پریمیر لیگ" },
    { id: 2003, code: "DED", name: "اریدیوسه هلند" },
    { id: 2014, code: "PD", name: "لالیگا اسپانیا" },
    { id: 2021, code: "ELC", name: "چمپیونشیپ انگلیس" },
    { id: 2019, code: "SA", name: "سری آ ایتالیا" },
    { id: 2002, code: "BL1", name: "بوندس لیگا" },
    { id: 2017, code: "PPL", name: "لیگا پرتغال" },
    { id: 2015, code: "FL1", name: "لیگ ۱ فرانسه " },
  ];

  const resoo = keyWords.map((key) =>
    resultMatch?.filter((res) => res.competition.code === key.code)
  );

  console.log(resoo);

  return (
    <>
      {resultMatch?.length === 0 ? (
        <div className="w-full mt-5 text-center text-lg font-semibold text-[#053B50]">
          هیچ مسابقه ای در حال برگزاری نیست
        </div>
      ) : (
        resoo.map((res) => <LeageTable leageTable={res}/>)
      )}
    </>
  );
};

export default Results;
