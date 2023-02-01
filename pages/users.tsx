import React, { useState } from "react";
import { ALink } from "../components/UI/Alink";
import axios from "axios";
import MainLayout from "../components/MainLayout";

interface IProps {
  users: any;
}

const Users = (props: IProps) => {
  const { users } = props;

  return (
    <MainLayout keywords={"users"}>
      <h1>Users page</h1>
      <div>
        {users.length > 1 &&
          users.map(
            (
              // @ts-ignore
              { name, id }
            ) => (
              <li key={id}>
                <ALink href={`/users/${id}`} name={name} />
              </li>
            )
          )}
      </div>
    </MainLayout>
  );
};

export async function getStaticProps() {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );

  return { props: { users: response.data } };
}

export default Users;
