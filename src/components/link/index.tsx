import { Link } from "react-router-dom";

interface IProps {
  link: {
    url: string;
    name: string;
  };
}

const LinkFactory = (props: IProps["link"]): React.ReactElement => {
  const { url, name } = props;

  return (
    <Link
      className="px-4 py-2 bg-gray-800 text-white rounded-lg text-center w-96 sm:w-full"
      to={url}
    >
      {name}
    </Link>
  );
};

export default LinkFactory;
