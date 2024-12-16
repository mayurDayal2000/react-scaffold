import { Link } from "react-router";

function NotFoundPage() {
  return (
    <>
      <h1>404 - This world was not found!</h1>
      <Link to="/">Teleport Me</Link>
    </>
  );
}

export default NotFoundPage;
