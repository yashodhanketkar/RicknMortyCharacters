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
