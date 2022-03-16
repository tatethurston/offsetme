import { NextPage } from "next";
import { Text, Link } from "@chakra-ui/react";
import { SimplePage } from "../src/components/SimplePage";
import { ButtonLink } from "../src/components/ButtonLink";

const ErrorPage: NextPage = () => (
  <SimplePage heading="500 | Error">
    <Text>
      Sorry! An error occurred. If you keep running into an issue, please
      contact us at{" "}
      <Link href="mailto:info@offsetme.app">info@offsetme.app</Link>
    </Text>
    <ButtonLink primary href="/">
      Home
    </ButtonLink>
  </SimplePage>
);

export default ErrorPage;
