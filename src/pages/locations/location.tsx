import { useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import BASE_URI from "../../common/pages";
import {
  QueryError,
  QueryLoading,
  RefetchButton,
} from "../../components/query";

const LocationDisplay = (): React.ReactElement => {
  const { id } = useParams();
  const [showCharAPI, setShowCharAPI] = useState(false);

  const {
    data: locationObj,
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ["location"],
    queryFn: (): Promise<Locations> =>
      fetch(`${BASE_URI}/locations/${id}`).then((res) => res.json()),
    refetchOnWindowFocus: false,
  });

  if (isLoading) return <QueryLoading />;
  if (isError || !locationObj) return <QueryError />;

  return (
    <div className="flex flex-col items-center gap-4">
      <h1 className="text-3xl text-black font-semibold inline-flex gap-1">
        {locationObj.name}
      </h1>
      <p>{`Located in ${locationObj.dimension} dimension`}</p>
      <p className="font-semibold">
        Total population: {locationObj.residents.length}
      </p>
      <button
        onClick={() => setShowCharAPI(!showCharAPI)}
        className="px-2 py-1 bg-black text-white rounded"
      >
        Show characters
      </button>
      <div className={`flex flex-col gap-2 ${showCharAPI ? "" : "hidden"}`}>
        {locationObj.residents.map((character: string, i: number) => (
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

export default LocationDisplay;
