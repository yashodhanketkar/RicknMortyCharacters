import MainUI from "../components/mainUI";
import { Routes, Route, Outlet } from "react-router-dom";
import CharactersDisplay from "./character";
import LinkFactory from "../components/link";
import Episodes from "./episodes";
import LocationsDisplay from "./locations";

interface page {
  url: string;
  name: string;
}

const pages: page[] = [
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

const Layout = () => {
  return (
    <MainUI>
      <div className="flex flex-col sm:flex-row mb-4 gap-2 justify-around items-center px-8">
        {pages.map((page: page, i: number) => (
          <LinkFactory key={i} {...page} />
        ))}
      </div>
      <Routes>
        <Route path="/characters" element={<CharactersDisplay />} />
        <Route path="/episodes" element={<Episodes />} />
        <Route path="/locations" element={<LocationsDisplay />} />
      </Routes>
      <Outlet />
    </MainUI>
  );
};

export default Layout;
