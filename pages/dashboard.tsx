import { InferGetServerSidePropsType, NextPage } from "next";
import { DashboardPage } from "../src/components/DashboardPage";
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
  return <DashboardPage />;
};

export default Login;
