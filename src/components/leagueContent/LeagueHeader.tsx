import { useTranslation } from "react-i18next";
import { matchesType } from "../../utils/types";

const LeagueHeader = ({leagueTable} : {leagueTable : matchesType[]}) => {

    const { t } = useTranslation();

  return (
    <header className="flex rounded-sm items-center gap-x-2 px-2 bg-green-600 py-1">
      <img
        className="w-8 h-8 object-cover"
        src={leagueTable[0]?.competition.emblem}
        alt={t(leagueTable[0]?.competition.name)}
      />
      <h3 className="text-white lg:text-base text-sm">{t(leagueTable[0]?.competition.name)}</h3>
    </header>
  );
};

export default LeagueHeader;
