const MainUI = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="text-center min-h-screen w-screen relative">
      <header className="bg-gray-900 text-gray-200 text-3xl p-4 font-semibold">
        Hifives - RicknMortyAPI
      </header>
      <main className="p-4 text-left">{children}</main>
      <footer className="bg-gray-900 text-gray-200 w-full p-2">
        2023 © yashodhan
      </footer>
    </div>
  );
};

export default MainUI;
