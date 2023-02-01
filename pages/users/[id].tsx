import { useRouter } from "next/router";
import axios from "axios";
import MainLayout from "../../components/MainLayout";

const User = (props: any) => {
  const { user } = props;
  const { query } = useRouter();
  return (
    <MainLayout keywords={user.name}>
      <h1>User with id {user.id}</h1>
      <div>User name {user.name}</div>
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
