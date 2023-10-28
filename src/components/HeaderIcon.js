import { Avatar } from "@mui/material";
import React from "react";

const HeaderIcon = ({ title, Icon, logo, size }) => {
  return (
    <div className="flex flex-col items-center text-gray-600 hover:text-black cursor-pointer">
      {Icon && <Icon size={size} />}
      {logo && (
        <Avatar
          style={{ objectFit: "contain", height: "25px", width: "25px" }}
        />
      )}
      <p className="text-xs">{title}</p>
    </div>
  );
};

export default HeaderIcon;
