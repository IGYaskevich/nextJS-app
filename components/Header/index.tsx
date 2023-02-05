import React from "react";
import ALink from "../UI/Alink";
import style from "./styles.module.scss";

const Header = () => {
  return (
    <div className={style.header}>
      <div className={style.navbar}>
        <ALink href={"/"}>Main Page</ALink>
        <ALink href={"/users"}>Users</ALink>
      </div>
    </div>
  );
};

export default Header;
