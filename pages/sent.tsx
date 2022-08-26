import { NextPage } from "next";
import { Flex, Stack, Heading, Text, Container } from "@chakra-ui/react";

const Sent: NextPage = () => (
  <Flex minH="100vh" align="center" justify="center">
    <Container maxW="container.md" p="12">
      <Stack
        textAlign="center"
        align="center"
        spacing={{ base: 8, md: 10 }}
        py={{ base: 10, md: 28 }}
      >
        <Heading as="h1" size="lg">
          You've joined
        </Heading>
        <Text>
          Thank you for joining our waitlist! We will send you an email when we
          are ready for you to create your account.
        </Text>
      </Stack>
    </Container>
  </Flex>
);

export default Sent;
