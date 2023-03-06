interface origin {
  name: string;
  url: string;
}

interface location {
  name: string;
  url: string;
}

interface Character {
  id: number;
  name: string;
  status: "Alive" | "Dead" | "unknown";
  species: "Human" | "Alien";
  type: string;
  gender: "Male" | "Female";
  origin: origin;
  location: location;
  image: string;
  episode: string[];
  url: string;
  created: string;
}

interface Episode {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  url: string;
  created: string;
}

interface Locations {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: string[];
  url: string;
  created: string;
}
