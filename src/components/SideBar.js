import React from "react";
import { Avatar } from "@mui/material";
import banner from "../assets/banner.jpg";
const SideBar = () => {
  return (
    <div className="md:mx-3 lg:basis-1/4 md:basis-1/3 w-  md:block">
      <div className="bg-white md:rounded-lg overflow-hidden shadow-md">
      <div className="flex flex-col items-center h-56 relative">
  <img src={banner} alt="" />

  <div className="absolute top-16 md:top-7 flex flex-col items-center">
    <div className="flex items-center">
      <Avatar style={{ width: "70px", height: "70px", padding: "5px" }} />
    </div>

    <h1 className="font-semibold mt-4">Dineswar S</h1>
    <h4 className="text-center font-extralight text-xs my-2 px-3">
      Full Stack Developer | Web Development Enthusiast | JavaScript | React.js | Java | HTML/CSS | Seeking Full-Time Opportunities
    </h4>
  </div>
</div>

        <hr />
        <div className="my-3 px-3 hover:bg-gray-200 cursor-pointer hidden md:block">
          <h4 className="text-xs font-light">Connections</h4>
          <h4 className="text-sm font-semibold ">Connect with alumni</h4>
        </div>
        <hr />
        <div className="p-3 hover:bg-gray-200 cursor-pointer hidden md:block">
          <h4 className="font-extralight text-xs">
            Access exclusive tools & insights
          </h4>
          <a href="" className="text-sm underline">
            Try Premium for free
          </a>
        </div>
        <hr />
        <div className="p-3 hover:bg-gray-200 cursor-pointer rounded-b-lg hidden md:block">
          <h2 className="text-sm ">My items</h2>
        </div>
      </div>

      <div className="mt-3 bg-white rounded-lg overflow-hidden shadow-md hidden md:block">
        <div className="flex flex-col text-blue-600 text-sm gap-2 font-semibold p-3 ">
          <a href="" className="hover:underline">
            Groups
          </a>
          <a href="" className="hover:underline">
            Events
          </a>
          <a href="" className="hover:underline">
            Followed Hastags
          </a>
        </div>
        <hr />
        <div className="flex justify-center py-3 hover:bg-gray-200 cursor-pointer">
          <h1>Discover more</h1>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
