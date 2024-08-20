import React from "react";
import { Button, Navbar, TextInput } from "flowbite-react";
import { NavLink, useLocation } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";

export default function Header() {
  const path = useLocation().pathname;
  return (
    <Navbar className=" border-b-2">
      <NavLink
        to="/"
        className={
          " self-center text-sm sm:text-xl whitespace-nowrap font-semibold dark:text-white  "
        }
      >
        <span className=" rounded-lg text-white px-2 py-1 bg-gradient-to-r from-indigo-500 via-violet-500 to-pink-500">
          Ayne's
        </span>
        Blog
      </NavLink>
      <form action="#">
        <TextInput
          type="text"
          placeholder="Search..."
          rightIcon={FaSearch}
          className=" hidden lg:inline"
        />
      </form>
      <Button className="w-12 h-10 lg:hidden" color="gray" pill>
        <FaSearch />
      </Button>
      <div className="flex gap-2 md:order-2">
        <Button className="w-12 h-10 hidden sm:inline" color="gray" pill>
          <FaMoon />
        </Button>
        <NavLink to="/sign-in">
          <Button gradientDuoTone="purpleToBlue" outline>
            Sign In
          </Button>
        </NavLink>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link active={path === "/"} as={"div"}>
          <NavLink to="/">Home</NavLink>
        </Navbar.Link>
        <Navbar.Link active={path === "/about"} as={"div"}>
          <NavLink to="/about">About</NavLink>
        </Navbar.Link>
        <Navbar.Link active={path === "/projects"} as={"div"}>
          <NavLink to="/projects">Projects</NavLink>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
