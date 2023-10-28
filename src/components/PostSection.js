import React from "react";
import { Avatar } from '@mui/material'
import { BsGlobeAmericas } from "react-icons/bs";
import { AiOutlineDislike } from "react-icons/ai";
import { FaRegCommentDots } from "react-icons/fa";
import { BiRepost } from "react-icons/bi";
import { FaTelegramPlane } from "react-icons/fa";
const PostSection = () => {
  const following = true;
  return (
    <div className="bg-white mt-3 p-3 rounded-lg">
      <div className="flex gap-4 text-sm items-center">
        <Avatar />
        <div className="flex flex-col w-full">
          <div className="flex gap-4 items-center">
              <h2 className="font-bold">Dinesh</h2>
              <div className="flex items-center w-full justify-between">
                {following && (<h2 className="text-xs">following</h2>)}
                <button className="text-blue-800 hover:bg-blue-200 p-1 rounded-lg">+follow</button>
              </div>
          </div>
          <div>
            <h2 className="text-xs">Web Developer</h2>
          </div>
          <div className="flex items-center">
              <h5>1w.</h5>
              <BsGlobeAmericas />
          </div>
        </div>
      </div>
   
      <div>
        <img src alt="" className="w-fit" />
      </div>
      <div>
        <h2>84</h2>
        <h2>32 comments</h2>
        <h3>4 repost</h3>
      </div>
      <hr />
      <div>
        <div>
          <AiOutlineDislike className="rotate-180" />
          <h1>Like</h1>
        </div>
        <div>
          <FaRegCommentDots />
          <h1>Comment</h1>
        </div>
        <div>
          <BiRepost />
          <h1>Repost</h1>
        </div>
        <div>
          <FaTelegramPlane />
          <h1>Send</h1>
        </div>
      </div>
    </div>
  );
};

export default PostSection;
