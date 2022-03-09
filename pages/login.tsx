import { InferGetServerSidePropsType, NextPage } from "next";
import db from "../src/db";

type LoaderData = InferGetServerSidePropsType<typeof getServerSideProps>;

export const getServerSideProps = async function () {
  const users = await db.select("email").from("users");
  return {
    props: {
      users,
    },
  };
};

const Login: NextPage<LoaderData> = ({ users }) => {
  return (
    <>
      {users.map(({ email }) => (
        <p key={email}>Hi {email}</p>
      ))}
    </>
  );
};

export default Login;
