import { NextPage } from "next";
import { Text } from "@chakra-ui/react";
import { SimplePage } from "../../src/components/SimplePage";
import { ButtonLink } from "../../src/components/ButtonLink";

const AuthError: NextPage = () => (
  <SimplePage heading="403 | Expired Link">
    <Text>
      Oops! Looks like that login link has expired or already been used.
    </Text>
    <ButtonLink primary href="/login">
      Send me a new link
    </ButtonLink>
  </SimplePage>
);

export default AuthError;
