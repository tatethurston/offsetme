import { NextPage } from "next";
import { Text } from "@chakra-ui/react";
import { SimplePage } from "../src/components/SimplePage";
import { ButtonLink } from "../src/components/ButtonLink";

const LogOut: NextPage = () => (
  <SimplePage heading="Signed Out">
    <Text>You've successfully signed out.</Text>
    <ButtonLink primary href="/login">
      Login
    </ButtonLink>
  </SimplePage>
);

export default LogOut;
