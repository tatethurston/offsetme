import NextLink from "next/link";
import { Link as ChakraLink } from "@chakra-ui/react";
import { FC } from "react";

interface LinkProps {
  href: string;
}
export const Link: FC<LinkProps> = ({ href, children }) => (
  <NextLink href={href} passHref>
    <ChakraLink>{children}</ChakraLink>
  </NextLink>
);
