import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <section className="">
      <Navbar />

      <div className="h-96 flex flex-col justify-center gap-4">
        <h1 className="text-blue text-2xl md:text-4xl uppercase">Manage your tasks in one place</h1>
        <p className="text-gray-500">My task is the best task managing app on the entire internet</p>

        <Link
          to="/mytask"
          className="self-start py-2 px-4 text-base rounded bg-blue text-white"
        >
          My tasks
        </Link>
      </div>

      <p className="text-base text-gray-500 absolute bottom-3 left-1/2 -translate-x-1/2">Copyright by mytask, 1011</p>
    </section>
  );
};

export default Home;
