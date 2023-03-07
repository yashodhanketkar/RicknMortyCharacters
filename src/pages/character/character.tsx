import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import {
  QueryError,
  QueryLoading,
  RefetchButton,
} from "../../components/query";
import { setStatus } from "./allCharacters";
import { getNextUrl } from "../../common/regex";

const CharacterDisplay = (): React.ReactElement => {
  const { id } = useParams();

  const {
    data: character,
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ["character"],
    queryFn: (): Promise<Character> =>
      fetch(`https://rickandmortyapi.com/api/character/${id}`).then((res) =>
        res.json()
      ),
    refetchOnWindowFocus: false,
  });

  if (isLoading) return <QueryLoading />;
  if (isError || !character) return <QueryError />;

  return (
    <div className="flex flex-col items-center gap-4">
      <h1 className="text-3xl text-black font-semibold inline-flex gap-1">
        {character.name}
        <span className={`${setStatus(character.status)}`}>
          ({character.status})
        </span>
      </h1>
      <img src={character.image} alt={character.name} />
      <p className="inline-flex gap-1">
        This person is from
        <a
          href={`/locations/${getNextUrl(character.origin.url)}`}
          className="font-semibold"
        >
          {character.origin.name}
        </a>
        and currently resides in
        <a
          href={`/locations/${getNextUrl(character.location.url)}`}
          className="font-semibold"
        >
          {character.location.name}
        </a>
      </p>
      <p>Species: {character.species}</p>
      {character.type && <p>Notable: {character.type}</p>}
      <div className="flex flex-col">
        <p className="font-semibold">Appeared in:</p>
        <ul className="flex flex-wrap gap-4">
          {character.episode.map((episode: string, i: number) => (
            <a
              href={`/episodes/${getNextUrl(episode)}`}
              key={i}
              className="bg-gray-400 rounded p-2 w-32 text-center m-auto"
            >
              Episode.{getNextUrl(episode)}
            </a>
          ))}
        </ul>
      </div>
      <RefetchButton refetch={refetch} hidden={true} />
    </div>
  );
};

export default CharacterDisplay;
