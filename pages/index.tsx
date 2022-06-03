import { NextPage } from "next";
import Link from "next/link";
import {
  Box,
  Container,
  Flex,
  Heading,
  Icon,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FcBiomass, FcDonate, FcEngineering } from "react-icons/fc";
import { FC, ReactElement } from "react";
import { Page } from "../src/components/Page";
import { ButtonLink } from "../src/components/ButtonLink";

interface FeatureProps {
  title: string;
  text: string;
  icon: ReactElement;
}

const Feature: FC<FeatureProps> = ({ title, text, icon }) => {
  return (
    <Stack>
      <Flex
        w={16}
        h={16}
        align="center"
        justify="center"
        color="white"
        rounded="full"
        bg="gray.100"
        mb={1}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>{title}</Text>
      <Text color={"gray.600"}>{text}</Text>
    </Stack>
  );
};

const Home: NextPage = () => (
  <Page>
    <Container maxW="container.lg">
      <Stack
        textAlign="center"
        align="center"
        spacing={{ base: 8, md: 10 }}
        py={{ base: 10, md: 28 }}
      >
        <Heading
          fontWeight={600}
          fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
          lineHeight="110%"
        >
          Use your network to build something climate{" "}
          <Text as="span" color="green.300">
            positive
          </Text>
        </Heading>
        <Text color="gray.500" maxW="3xl">
          Accept donations. Reduce carbon. Help the planet.
        </Text>
        <Stack spacing={6} direction="row">
          <ButtonLink primary href="/signup">
            Get started
          </ButtonLink>
          <Link
            href={{
              pathname: "login",
              query: { bob: "tate" },
              search: "monkey=foo",
            }}
          >
            Foo
          </Link>
          <ButtonLink href="/faq">Learn more</ButtonLink>
        </Stack>
      </Stack>
    </Container>
    <Box bg="white" width="100%">
      <Container maxW="container.lg" bg="white">
        <Stack spacing={{ base: 8, md: 10 }} py={{ base: 10, md: 28 }}>
          <Box p={4}>
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
              <Feature
                icon={<Icon as={FcBiomass} w={10} h={10} />}
                title="Pick Your Project"
                text="Give your network an easy way to contribute to the carbon offset projects you choose."
              />
              <Feature
                icon={<Icon as={FcDonate} w={10} h={10} />}
                title="Accept Donations"
                text="With just a few clicks or taps anyone from your network can donate to your chosen carbon offset projects."
              />
              <Feature
                icon={<Icon as={FcEngineering} w={10} h={10} />}
                title="Recurring Donations"
                text="Accept automatic monthly or yearly recurring donations from your biggest supporters."
              />
            </SimpleGrid>
          </Box>
        </Stack>
      </Container>
    </Box>
  </Page>
);

export default Home;
