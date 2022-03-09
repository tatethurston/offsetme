import Image from "next/image";
import {
  Box,
  Button,
  Container,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { FC } from "react";
import { Link } from "./Link";

interface NavLinkProps {
  href: string;
  primary?: boolean;
}

const NavLink: FC<NavLinkProps> = ({ href, children, primary = false }) => {
  const props = primary
    ? {
        colorScheme: "green",
        bg: "green.400",
        _hover: { bg: "green.500" },
      }
    : {};
  return (
    <NextLink href={href} passHref>
      <a>
        <Button
          mx="3"
          rounded="full"
          variant={primary ? "solid" : "ghost"}
          {...props}
        >
          {children}
        </Button>
      </a>
    </NextLink>
  );
};

const Logo = () => (
  <NextLink href="/" passHref>
    <a style={{ height: "32px" }}>
      <Image
        alt="home"
        height="32px"
        width="32px"
        src="/../public/favicon-32x32.png"
      />
    </a>
  </NextLink>
);

const Footer: FC = () => (
  <Box
    bg="gray.50"
    color="gray.700
      "
    as="footer"
  >
    <Container as={Stack} maxW="6xl" py={10}>
      <SimpleGrid
        templateColumns={{ sm: "1fr 1fr", md: "2fr 1fr 1fr 1fr 1fr" }}
        spacing={8}
      >
        <Stack spacing={6}>
          <Box>
            <Logo />
          </Box>
          <Text fontSize="sm">© OffsetMe. All rights reserved.</Text>
        </Stack>
        <Stack align="flex-start"></Stack>
        <Stack align="flex-start"></Stack>
        <Stack align="flex-start"></Stack>
        <Stack align="flex-start">
          <Text fontWeight="500" fontSize="lg" mb={2}>
            Legal
          </Text>
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/terms">Terms</Link>
        </Stack>
      </SimpleGrid>
    </Container>
  </Box>
);

const Nav: FC = () => (
  <Box
    as="nav"
    py="5"
    display="flex"
    justifyContent="space-between"
    alignItems="center"
  >
    <Box display="flex" alignItems="center">
      <Logo />
      <NavLink href="/faq">FAQ</NavLink>
    </Box>
    <Box display="flex" alignItems="center">
      <NavLink href="/login">Login</NavLink>
      <NavLink primary href="/signup">
        Sign Up
      </NavLink>
    </Box>
  </Box>
);

export const Page: FC = ({ children }) => (
  <>
    <Container maxW="container.lg">
      <Nav />
    </Container>
    <main>{children}</main>
    <Container maxW="container.lg">
      <Footer />
    </Container>
  </>
);
