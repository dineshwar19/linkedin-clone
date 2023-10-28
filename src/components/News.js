import React from "react";
import { BsFillInfoSquareFill } from "react-icons/bs";
import { BsChevronCompactDown } from "react-icons/bs";
const News = () => {
  return (
    <div className="mx-3 lg:basis-1/3 hidden lg:block h-fit ">
      <div className="bg-white rounded-lg overflow-hidden shadow-md">
        <div className="p-3">
          <div className="flex justify-between items-center">
            <h1 className="font-semibold">LinkedIn News</h1>
            <BsFillInfoSquareFill />
          </div>
        </div>

        <ul className=" flex flex-col gap-1 cursor-pointer">
          <li className=" px-3 py-1 hover:bg-gray-200">
            <li className="list-disc  list-inside">
              Rise of emotive marketing
            </li>
            <div className="flex items-center gap-5 text-xs font-divght">
              <p>2d ago</p>
              <li className=" list-disc">1532 Readers</li>
            </div>
          </li>
          <li className=" px-3 py-1 hover:bg-gray-200 cursor-pointer">
          <li className="list-disc  list-inside">
              Rise of emotive marketing
            </li>
            <div className="flex items-center gap-5 text-xs font-divght">
              <p>2d ago</p>
              <li className=" list-disc">1532 Readers</li>
            </div>
          </li>
          <li className=" px-3 py-1 hover:bg-gray-200 cursor-pointer">
          <li className="list-disc  list-inside">
              Rise of emotive marketing
            </li>
            <div className="flex items-center gap-5 text-xs font-divght">
              <p>2d ago</p>
              <li className=" list-disc">1532 Readers</li>
            </div>
          </li>
          <li className=" px-3 py-1 hover:bg-gray-200 cursor-pointer">
          <li className="list-disc  list-inside">
              Rise of emotive marketing
            </li>
            <div className="flex items-center gap-5 text-xs font-divght">
              <p>2d ago</p>
              <li className=" list-disc">1532 Readers</li>
            </div>
          </li>
          <li className=" px-3 py-1 hover:bg-gray-200 cursor-pointer">
            <li className="list-disc  list-inside">Rise of emotive marketing</li>
            <div className="flex items-center gap-5 text-xs font-divght">
              <p>2d ago</p>
              <li className=" list-disc">1532 Readers</li>
            </div>
          </li>
        </ul>

        <div className="flex items-center my-3 cursor-pointer">
          <button className="px-3 text-sm text-gray-500 font-semibold">
            Show More
          </button>
          <BsChevronCompactDown />
        </div>
      </div>
    </div>
  );
};

export default News;
