import React from "react";
import { ALink } from "../UI/Alink";
import style from "./styles.module.scss";

const Header = () => {
  return (
    <div className={style.header}>
      <div className={style.navbar}>
        <ALink href={"/"} name={"Main Page"} />
        <ALink href={"/users"} name={"Users"} />
      </div>
    </div>
  );
};

export default Header;
