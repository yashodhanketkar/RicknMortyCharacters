import { useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import {
  QueryError,
  QueryLoading,
  RefetchButton,
} from "../../components/query";
import BASE_URI from "../../common/pages";

const EpisodeDisplay = (): React.ReactElement => {
  const { id } = useParams();
  const [showCharAPI, setShowCharAPI] = useState(false);

  const {
    data: episodeObj,
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ["episode"],
    queryFn: (): Promise<Episode> =>
      fetch(`${BASE_URI}/episodes/${id}`).then((res) => res.json()),
    refetchOnWindowFocus: false,
  });

  if (isLoading) return <QueryLoading />;
  if (isError || !episodeObj) return <QueryError />;

  return (
    <div className="flex flex-col items-center gap-4">
      <h1 className="text-3xl text-black font-semibold inline-flex gap-1">
        {episodeObj.name}
      </h1>
      <p>{`Aired on: ${episodeObj.air_date}`}</p>
      <p className="font-semibold">
        Total number of characters appeared: {episodeObj.characters.length}
      </p>
      <button
        onClick={() => setShowCharAPI(!showCharAPI)}
        className="px-2 py-1 bg-black text-white rounded"
      >
        Show characters
      </button>
      <div className={`flex flex-col gap-2 ${showCharAPI ? "" : "hidden"}`}>
        {episodeObj.characters.map((character: string, i: number) => (
          <a
            href={character}
            target={"_blank"}
            rel="noopener noreferer"
            key={i}
          >
            {character}
          </a>
        ))}
      </div>
      <RefetchButton refetch={refetch} hidden={true} />
    </div>
  );
};

export default EpisodeDisplay;
