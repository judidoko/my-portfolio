import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

function NavBar() {
  return (
    <header className="bg-blue-800 h-24">
      <div className="container font-Roboto mr-auto ml-12 flex justify-between">
        <nav className="flex h-24">
          <NavLink
            to="/"
            exact="true"
            className="inline-flex items-center py-6 px-3 mr-4 my-6 text-blue-100 rounded hover:text-amber-800 active:bg-blue-600 focus:bg-blue-600 text-4xl font-bold"
          >
            Juddoko
          </NavLink>
          <NavLink
            to="/post"
            className="inline-flex items-center py-6 px-3 mr-4 my-6 text-blue-200 rounded hover:text-amber-800 active:bg-blue-600 focus:bg-blue-600"
          >
            Blog-Posts
          </NavLink>
          <NavLink
            to="/project"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-blue-200 hover:text-amber-800 active:bg-blue-600 focus:bg-blue-600"
          >
            Projects
          </NavLink>
          <NavLink
            to="/about"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-blue-200 hover:text-amber-800 active:bg-blue-600 focus:bg-blue-600"
          >
            About Me!
          </NavLink>
        </nav>
        <div className="inline-flex py-3 px-3 my-6">
          <SocialIcon
            url="https://twitter.com/judidoko"
            className="mr-4"
            target="blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://www.linkedin.com/in/idoko-jude-201233199/"
            className="mr-4"
            target="blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://github.com/judidoko"
            className="mr-4"
            target="blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
        </div>
      </div>
    </header>
  );
}

export default NavBar;
