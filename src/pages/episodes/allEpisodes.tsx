import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import {
  QueryError,
  QueryLoading,
  RefetchButton,
} from "../../components/query";
import { getNextUrl } from "../../common/regex";
import BASE_URI from "../../common/pages";

const Episodes = (): React.ReactElement => {
  const { data, refetch, isError, isLoading } = useQuery({
    queryKey: ["episodes"],
    queryFn: (): Promise<Episode[]> =>
      fetch(`${BASE_URI}/episodes/`)
        .then((res) => res.json())
        .then((data) => data.results),
    refetchOnWindowFocus: false,
  });

  if (isLoading) return <QueryLoading />;

  if (isError || !data) return <QueryError />;

  return (
    <div className="flex flex-row flex-wrap gap-4">
      {data.map((episode: Episode) => (
        <Link
          to={`/episodes/${getNextUrl(episode.id.toString())}`}
          key={episode.id}
          className="drop-shadow-md shadow-gray-600 py-2 rounded-lg w-96 flex-grow lg:w-1/3 text-center bg-gray-200"
        >
          <h1 className="text-2xl text-black">{episode.name}</h1>
          <p>{episode.episode}</p>
          <p>{episode.air_date}</p>
          <p>Total characters: {episode.characters.length}</p>
        </Link>
      ))}
      <RefetchButton refetch={refetch} hidden={true} />
    </div>
  );
};

export default Episodes;
