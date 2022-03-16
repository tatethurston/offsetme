import { NextPage } from "next";
import { Page } from "./Page";
import { Container, Heading, Stack } from "@chakra-ui/react";

interface SimplePageProps {
  heading: string;
}

export const SimplePage: NextPage<SimplePageProps> = ({
  heading,
  children,
}) => (
  <Page>
    <Container maxW="container.md" p="12">
      <Stack
        textAlign="center"
        align="center"
        spacing={{ base: 8, md: 10 }}
        py={{ base: 10, md: 28 }}
      >
        <Heading as="h1" size="lg">
          {heading}
        </Heading>
        {children}
      </Stack>
    </Container>
  </Page>
);
