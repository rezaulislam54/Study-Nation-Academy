import { useState } from "react";
import icon from "../assets/Logo/Logo-Full-Light.png";
import { Link, NavLink } from "react-router-dom";
import { VscDashboard, VscSignOut } from "react-icons/vsc";

const NavBar = () => {
  const [open, setopen] = useState(false);
  const [close, setclose] = useState(false);

  const navlinks = (
    <>
      <NavLink
        to={"/"}
        className={({ isActive, isPending }) =>
          isPending
            ? ""
            : isActive
            ? "text-yellow-300 font-semibold underline underline-offset-[6px] decoration-yellow-100 decoration-2"
            : "font-semibold"
        }
      >
        <li>
          <a>Home</a>
        </li>
      </NavLink>
      <NavLink
        to={"/about"}
        className={({ isActive, isPending }) =>
          isPending
            ? ""
            : isActive
            ? "text-yellow-300 font-semibold underline underline-offset-[6px] decoration-yellow-100 decoration-2"
            : "font-semibold"
        }
      >
        <li>
          <a>About</a>
        </li>
      </NavLink>
      <NavLink
        to={"/project"}
        className={({ isActive, isPending }) =>
          isPending
            ? ""
            : isActive
            ? "text-yellow-300 font-semibold underline underline-offset-[6px] decoration-yellow-100 decoration-2"
            : "font-semibold"
        }
      >
        <li>
          <a>Projects</a>
        </li>
      </NavLink>
      {/* <NavLink>
        <li>
          <a>Blogs</a>
        </li>
      </NavLink> */}
      <NavLink
        to={"/contact"}
        className={({ isActive, isPending }) =>
          isPending
            ? ""
            : isActive
            ? "text-white font-semibold underline underline-offset-[6px] decoration-yellow-100 decoration-2"
            : "font-semibold"
        }
      >
        <li>
          <a>Contact</a>
        </li>
      </NavLink>
    </>
  );
  return (
    <div className=" w-screen z-50 h-18 bg-[#000814] border-b-[1px] border-b-[#2c333f] translate-y-  transition-all duration-500">
      <div className="navbar justify-between container mx-auto">
        <div className="">
          <Link className="flex gap-2 items-center" to={"/"}>
            <img className="w-[160px] h-[42px]" src={icon} alt="" />
          </Link>
        </div>
        {/* <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal  px-1">{navlinks}</ul>
        </div> */}
        <div className="flex">
          <div className=" hidden md:flex font-clashDisplay text-[#dbddea]">
            <ul className="menu menu-horizontal text-white items-center text-xl px-1">
              {navlinks}
            </ul>
          </div>
          <div className="dropdown">
            <div tabIndex={0} role="button" className=" md:hidden">
              <label className="btn btn-circle bg-secondary hover:bg-white swap swap-rotate">
                {/* this hidden checkbox controls the state */}
                <input onClick={() => setopen(!open)} type="checkbox" />

                {/* hamburger icon */}
                <svg
                  className="swap-off  fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 512 512"
                >
                  <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
                </svg>

                {/* close icon */}
                <svg
                  className="swap-on fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 512 512"
                >
                  <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
                </svg>
              </label>
            </div>
            <ul
              tabIndex={0}
              className={`md:hidden justify-center fixed top-0 left-0 w-3/6 sm:w-2/5 h-screen z-50 bg-gray-800 text-secondary px-5  transition-transform transform  ${
                open ? "translate-x-0" : "-translate-x-full"
              } duration-700 ease-in-out`}
            >
              <div className="flex items-center justify-center h-[96px]">
                <div className="flex items-start gap-3">
                  {/* <small></small> */}
                  <div className="lg:hidden dropdown dropdown-end">
                    <div
                      tabIndex={0}
                      role="button"
                      onClick={() => setclose(!close)}
                      className="btn btn-ghost btn-circle avatar"
                    >
                      <div className="w-10 rounded-full">
                        <img
                          alt="Tailwind CSS Navbar component"
                          src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                        />
                      </div>
                    </div>
                    {close && (
                      <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content  z-[1000] divide-y-[1px] divide-[#2c333f] overflow-hidden rounded-md border-[1px] border-[#2c333f] bg-[#161d29] -mr-11 w-36 p-2 shadow"
                      >
                        <li>
                          <div
                            onClick={() => setclose(false)}
                            className="flex w-full items-center gap-x-1 py-[10px] px-[12px] text-sm text-[#afb2bf] hover:bg-[#2c333f] hover:text-[#dbddea]"
                          >
                            <VscDashboard className="text-lg" />
                            Dashboard
                          </div>
                        </li>
                        {/* <li>
                        <a>Settings</a>
                      </li> */}
                        <li>
                          <div
                            onClick={() => setclose(false)}
                            className="flex w-full items-center gap-x-1 py-[10px] px-[12px] text-sm text-[#afb2bf] hover:bg-[#2c333f] hover:text-[#dbddea]"
                          >
                            <VscSignOut className="text-lg" />
                            Logout
                          </div>
                        </li>
                      </ul>
                    )}
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center flex-col gap-4 lg:hidden font-clashDisplay font-semibold border-t py-12">
                {navlinks}
              </div>
            </ul>
          </div>
        </div>
        <div className="hidden md:block dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
