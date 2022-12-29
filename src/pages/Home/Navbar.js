import React from "react";
import category from '../../category.svg'
import { Link } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = React.useState(true)

  const toggleNav = () => {
    setNav(!nav)
  }

  return (
    <nav className="flex justify-between align-center py-4">
      <Link to='/' className="text-3xl text-blue">mytask</Link>

      <ul className={`flex flex-col md:flex-row px-5 py-12 md:p-3 bg-blue md:bg-transparent text-white md:text-black gap-6 text-lg fixed z-20 w-1/2 md:w-min left-0 top-0 bottom-0 ${nav ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 md:static transition-transform`}>
        <li>
          <Link to="/addtask" onClick={toggleNav}>addtask</Link>
        </li>
        <li>
          <Link to="/completedtask" onClick={toggleNav}>completedtask</Link>
        </li>
        <li>
          <Link to="/mytask" onClick={toggleNav}>mytask</Link>
        </li>

        <button onClick={toggleNav} className="absolute top-2 right-4 text-5xl block md:hidden">&times;</button>
      </ul>

      <div className="flex items-center gap-3 md:gap-6">
        <Link
          to="/login"
          className="hidden md:inline-block font-semibold py-2 px-4 text-base rounded border-[1.5px] md:border-blue"
        >
          login
        </Link>
        <Link
          to="/register"
          className="hidden md:inline-block font-semibold py-2 px-4 text-base rounded border-[1.5px] border-blue bg-blue text-white"
        >
          register
        </Link>

        <button
          className="inline-block md:hidden focus:outline-none"
          onClick={toggleNav}
        >
          <img src={category} alt='nav icon' className="p-2 h-10 w-10 rounded border-[1.5px]" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
