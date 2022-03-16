import { NextPage } from "next";
import { Text } from "@chakra-ui/react";
import { SimplePage } from "../src/components/SimplePage";
import { ButtonLink } from "../src/components/ButtonLink";

const NotFound: NextPage = () => (
  <SimplePage heading="404 | Page Not Found">
    <Text>Sorry! We couldn't find that page.</Text>
    <ButtonLink primary href="/">
      Home
    </ButtonLink>
  </SimplePage>
);

export default NotFound;
