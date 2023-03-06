export const QueryLoading = () => {
  return (
    <h1 className="flex gap-2">
      Loading data<p className="animate-spin">⌛</p>
    </h1>
  );
};

export const QueryError = () => {
  return (
    <h1 className="flex gap-2">
      Enable to load data<p className="animate-ping">❌</p>
    </h1>
  );
};
