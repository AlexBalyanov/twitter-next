import Link from "next/link";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-7xl font-bold mb-4">
        4 0 4
      </h1>
      <p className="text-neutral-600 mb-6">
        This page doesn't exist. Or maybe it's moved.
      </p>
      <Link
        href="/"
        className="text-sm text-blue-500 hover:underline"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;