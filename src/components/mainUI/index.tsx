const MainUI = ({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement => {
  return (
    <div className="text-center min-h-screen w-screen relative">
      <header className="bg-gray-900 text-gray-200 text-3xl p-4 font-semibold absolute top-0 w-full">
        Hifives - RicknMortyAPI
      </header>
      <main className="pt-24 pb-16 p-4 text-left">{children}</main>
      <footer className="bg-gray-900 text-gray-200 w-full p-2 absolute bottom-0">
        2023 © yashodhan
      </footer>
    </div>
  );
};

export default MainUI;
