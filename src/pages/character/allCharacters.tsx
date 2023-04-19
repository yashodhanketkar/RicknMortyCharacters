import { useQuery } from "react-query";
import {
  QueryError,
  QueryLoading,
  RefetchButton,
} from "../../components/query";
import { getNextUrl } from "../../common/regex";
import { Link } from "react-router-dom";
import BASE_URI from "../../common/pages";

export const setStatus = (status: Character["status"]): string => {
  if (status === "Alive") return "text-green-600";
  else if (status === "Dead") return "text-red-600";
  else return "";
};

const CharactersDisplay = (): React.ReactElement => {
  const { data, isError, isLoading, refetch } = useQuery({
    queryKey: ["characters"],
    queryFn: (): Promise<Character[]> =>
      fetch(`${BASE_URI}/character/`)
        .then((res) => res.json())
        .then((data) => data.results),
    refetchOnWindowFocus: false,
  });

  if (isLoading) return <QueryLoading />;

  if (isError || !data) return <QueryError />;

  return (
    <>
      <div className="flex gap-4 flex-col sm:flex-row flex-wrap items-center sm:justify-around">
        {data.map((character: Character) => (
          <Link
            to={`/characters/${getNextUrl(character.id.toString())}`}
            key={character.id}
            className="drop-shadow-md shadow-gray-600 px-4 py-2 rounded-md flex flex-col gap-2 w-96 items-center bg-gray-200 hover:shadow-md hover:shadow-gray-800 duration-500 transition-all hover:rounded-2xl hover:bg-white hover:text-gray-900"
          >
            <p className="text-black text-2xl font-semibold">
              {character.name}
            </p>
            <p className={`${setStatus(character.status)} font-semibold`}>
              ({character.status})
            </p>
            <a href={character.origin.url}>Origin: {character.origin.name}</a>
            <a href={character.location.url}>
              Current Location: {character.location.name}
            </a>
            <p className="flex gap-1">
              {character.type ? character.type : "Normal " + character.species}
              <span>({character.gender})</span>
            </p>
            <img
              src={character.image}
              alt={character.name}
              className="w-fit rounded-full sm:rounded-3xl md:rounded-md drop-shadow-lg sm:drop-shadow-md"
            />
            <p>
              {"Number of appearances: "}
              <span className="font-semibold">{character.episode.length}</span>
            </p>
          </Link>
        ))}
      </div>
      <RefetchButton refetch={refetch} hidden={true} />
    </>
  );
};

export default CharactersDisplay;
