import { Avatar } from "@mui/material";
import React, { useEffect, useState } from "react";

const HeaderIcon = ({ id, title, Icon, logo, size, style }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <div key={id} className="flex flex-col items-center text-gray-600 hover:text-black cursor-pointer ">
      {Icon && <Icon size={size} className={style} />}
      {logo && windowWidth >= 770 ? (
        <Avatar
          style={{ objectFit: "contain", height: "25px", width: "25px" }}
        />
      ) : null}
      {windowWidth >= 770 && <p className={`text-xs ${style}`} >{title}</p>}
    </div>
  );
};

export default HeaderIcon;
