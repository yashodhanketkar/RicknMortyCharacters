import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import BASE_URI from "../../common/pages";
import { getNextUrl } from "../../common/regex";
import {
  QueryError,
  QueryLoading,
  RefetchButton,
} from "../../components/query";

const PopulationStatus = (population: number): string => {
  if (population === 0) return "bg-red-600 text-white";
  if (population > 100) return "bg-green-600 text-white";
  return "";
};

const LocationsDisplay = (): React.ReactElement => {
  const { data, refetch, isLoading, isError } = useQuery({
    queryKey: ["locations"],
    queryFn: (): Promise<Locations[]> =>
      fetch(`${BASE_URI}/location/`)
        .then((res) => res.json())
        .then((data) => data.results),
    refetchOnWindowFocus: false,
  });

  if (isLoading) return <QueryLoading />;

  if (isError || !data) return <QueryError />;

  return (
    <div className="flex flex-col sm:flex-row flex-wrap gap-4">
      {data.map((location: Locations) => (
        <Link
          to={`/locations/${getNextUrl(location.id.toString())}`}
          key={location.id}
          className={` ${PopulationStatus(
            location.residents.length
          )} drop-shadow-md shadow-gray-600 py-2 rounded-lg w-96 flex-grow lg:w-1/3 text-center bg-gray-200`}
        >
          <h1
            className={`text-2xl ${
              location.residents.length > 100 || location.residents.length === 0
                ? "text-white"
                : "text-black"
            }`}
          >
            {location.name}
          </h1>
          <p>{location.type}</p>
          <p>Dimension: {location.dimension}</p>
          <p>Population: {location.residents.length}</p>
        </Link>
      ))}
      <RefetchButton refetch={refetch} hidden={true} />
    </div>
  );
};

export default LocationsDisplay;
