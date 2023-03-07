import { Routes, Route, Outlet } from "react-router-dom";
import LinkFactory from "../components/link";
import MainUI from "../components/mainUI";
import CharactersDisplay, { CharacterDisplay } from "./character";
import Episodes, { EpisodeDisplay } from "./episodes";
import LocationsDisplay, { LocationDisplay } from "./locations";
import { page, pages } from "../common/pages";

const Layout = (): React.ReactElement => {
  return (
    <MainUI>
      <div className="flex flex-col sm:flex-row mb-4 gap-2 justify-around items-center px-8">
        {pages.map((page: page, i: number) => (
          <LinkFactory key={i} {...page} />
        ))}
      </div>
      <Routes>
        <Route path="/characters" element={<CharactersDisplay />} />
        <Route path="/characters/:id" element={<CharacterDisplay />} />
        <Route path="/episodes" element={<Episodes />} />
        <Route path="/episodes/:id" element={<EpisodeDisplay />} />
        <Route path="/locations" element={<LocationsDisplay />} />
        <Route path="/locations/:id" element={<LocationDisplay />} />
      </Routes>
      <Outlet />
    </MainUI>
  );
};

export default Layout;
