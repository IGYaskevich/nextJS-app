import { FC } from "react";

import axios from "axios";
import { useRouter } from "next/router";

import { UsersType } from "./types";

import MainLayout from "../../components/MainLayout";

type PropsType = {
  user: UsersType;
};
const User: FC<PropsType> = (props) => {
  const { user } = props;

  // We can get URL data by useRouter() nextJS
  const { query } = useRouter();

  return (
    <MainLayout keywords={user.name}>
      <div id={`userID-${user.id}`}>
        <h1>User with id {user.id}</h1>
        <div>User name {user.name}</div>
      </div>
    </MainLayout>
  );
};

export default User;

export async function getServerSideProps(context: any) {
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/users/${context.params.id}`
  );
  return {
    props: { user: response.data }, // will be passed to the page component as props
  };
}
