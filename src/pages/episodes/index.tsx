import { useQuery } from "react-query";
import { QueryError, QueryLoading } from "../../components/query";

const Episodes = () => {
  const { data, refetch, isError, isLoading } = useQuery({
    queryKey: ["episodes"],
    queryFn: (): Promise<Episode[]> =>
      fetch("https://rickandmortyapi.com/api/episode")
        .then((res) => res.json())
        .then((data) => data.results),
  });

  if (isLoading) return <QueryLoading />;

  if (isError || !data) return <QueryError />;

  return (
    <div className="flex flex-row flex-wrap gap-4">
      {data.map((episode: Episode) => (
        <div
          className="drop-shadow-md shadow-gray-600 py-2 rounded-lg w-96 flex-grow lg:w-1/3 text-center bg-gray-200"
          key={episode.id}
        >
          <h1 className="text-2xl text-black">{episode.name}</h1>
          <p>{episode.air_date}</p>
          <p>Total characters: {episode.characters.length}</p>
        </div>
      ))}
    </div>
  );
};

export default Episodes;
