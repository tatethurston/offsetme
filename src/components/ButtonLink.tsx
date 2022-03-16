import { Button, ButtonProps } from "@chakra-ui/react";
import NextLink from "next/link";
import { FC } from "react";

interface ButtonLinkProps extends ButtonProps {
  href: string;
  primary?: boolean;
}

export const ButtonLink: FC<ButtonLinkProps> = ({
  href,
  children,
  primary = false,
  ...rest
}) => {
  const props = primary
    ? {
        _hover: { bg: "green.500" },
        bg: "green.400",
        colorScheme: "green",
        variant: "solid",
      }
    : rest;

  return (
    <NextLink href={href} passHref>
      <a>
        <Button px="6" rounded="full" {...props}>
          {children}
        </Button>
      </a>
    </NextLink>
  );
};
