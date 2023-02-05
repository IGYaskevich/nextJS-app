import React, { FC } from "react";
import axios from "axios";

import MainLayout from "../components/MainLayout";
import ALink from "../components/UI/Alink";

import { UsersType } from "./users/types";

interface IProps {
  users: Array<UsersType>;
}

const Users: FC<IProps> = (props: IProps) => {
  const { users } = props;

  return (
    <MainLayout keywords={"users"}>
      <h1>Users page</h1>
      <div>
        {users.length > 1 &&
          // users.map(({ name, id }) => (
          users.map(({ name, id }) => (
            <li key={id}>
              <ALink href={`/users/${id}`}>{name}</ALink>
            </li>
          ))}
      </div>
    </MainLayout>
  );
};

// getServerSideProps (Server-Side Rendering)s
export async function getStaticProps() {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  return { props: { users: response.data } };
}

export default Users;
