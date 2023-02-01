import React, { FC, ReactNode } from "react";
import Header from "../Header";
import Head from "next/head";

interface IProps {
  children: ReactNode;
  keywords?: string;
}

const MainLayout: FC<IProps> = ({ children, keywords = "" }) => {
  return (
    <>
      <Head>
        <meta>{`Learn NextJS ${keywords}`}</meta>
        <title>Learn NextJS</title>
      </Head>
      <div>
        <Header />
        {children}
      </div>
    </>
  );
};

export default MainLayout;
