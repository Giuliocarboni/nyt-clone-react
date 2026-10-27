import { Link } from "react-router";

function NotFound() {
  return (
    <div className="py-6 mx-auto max-w-[1200px] ">
      <h1>Page not found</h1>
      <Link to="/" className="underline">
        Back to home
      </Link>
    </div>
  );
}

export default NotFound;
