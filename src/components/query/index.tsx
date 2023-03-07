interface IProps {
  refetchbutton: {
    refetch: () => void;
    hidden: boolean;
  };
}

export const QueryLoading = (): React.ReactElement => {
  return (
    <h1 className="flex gap-2">
      Loading data<p className="animate-spin">⌛</p>
    </h1>
  );
};

export const QueryError = (): React.ReactElement => {
  return (
    <h1 className="flex gap-2">
      Enable to load data<p className="animate-ping">❌</p>
    </h1>
  );
};

export const RefetchButton = (
  props: IProps["refetchbutton"]
): React.ReactElement => {
  const { refetch, hidden } = props;

  return (
    <button
      onClick={() => refetch()}
      className={`${
        hidden ? "hidden" : ""
      } w-fit px-4 py-2 bg-blue-700 text-white hover:bg-blue-600 transition-all duration-500 rounded shadow-blue-600 hover:drop-shadow-md`}
    >
      Refetch
    </button>
  );
};
