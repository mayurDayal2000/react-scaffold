import { Link } from "react-router";

function NotFoundPage() {
  return (
    <div className="flex items-center justify-center flex-col gap-y-4">
      <h1 className="text-center text-4xl my-5 mb-3">
        404 - This world was not found!
      </h1>
      <Link
        to="/"
        className="p-2 rounded-md bg-blue-600 hover:bg-blue-500 text-sm"
      >
        Teleport Me
      </Link>
    </div>
  );
}

export default NotFoundPage;
