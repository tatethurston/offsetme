import { NextPage } from "next";
import { Flex, Stack, Heading, Text, Container } from "@chakra-ui/react";

const VerifyRequest: NextPage = () => (
  <Flex minH="100vh" align="center" justify="center">
    <Container maxW="container.md" p="12">
      <Stack
        textAlign="center"
        align="center"
        spacing={{ base: 8, md: 10 }}
        py={{ base: 10, md: 28 }}
      >
        <Heading as="h1" size="lg">
          Check your email
        </Heading>
        <Text>A sign in link has been sent to your email address.</Text>
      </Stack>
    </Container>
  </Flex>
);

export default VerifyRequest;
