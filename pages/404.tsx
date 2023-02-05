import React from "react";

import { Button } from "@mui/material";
import ALink from "../components/UI/Alink";

import style from "../styles/notFound.module.scss";

const NotFound = () => {
  return (
    <div className={style.notFound}>
      <div className={style.item}>
        <h1>Not Found: Error 404</h1>
        <ALink href={"/"}>
          <Button
            variant={"outlined"}
            color={"secondary"}
            className={style.button}
          >
            Back Main Page
          </Button>
        </ALink>
      </div>
    </div>
  );
};

export default NotFound;
