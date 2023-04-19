const BASE_URI = "https://rickandmortyapi.com/api/";

export interface page {
  url: string;
  name: string;
}

export const pages: page[] = [
  {
    url: "/characters",
    name: "Characters",
  },
  {
    url: "/episodes",
    name: "Episodes",
  },
  {
    url: "/locations",
    name: "Locations",
  },
];

export default BASE_URI;
