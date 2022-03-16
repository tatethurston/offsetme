import { NextPage } from "next";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  Text,
} from "@chakra-ui/react";
import { signIn, useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const Login: NextPage = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session?.user) {
      router.replace("/dashboard");
    }
  }, [router, session?.user]);

  return (
    <Flex minH="100vh" align="center" justify="center">
      <Stack spacing="8" mx="auto" maxW="lg" py="12" px="6">
        <Stack align="center">
          <Heading as="h1" size="lg" align="center">
            Sign in to your account
          </Heading>
          <Text color="gray.600">We'll email you a magic sign in link 🪄</Text>
        </Stack>
        <Box rounded="lg" bg="white" boxShadow="lg" p="8">
          <Stack spacing="10">
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.currentTarget.value)}
              />
            </FormControl>
            <Button
              isLoading={isLoading}
              loadingText="Sending link..."
              _hover={{ bg: "green.500" }}
              bg="green.400"
              colorScheme="green"
              onClick={() => {
                setIsLoading(true);
                signIn("email", {
                  email,
                  callbackUrl: "/dashboard",
                });
              }}
            >
              Send me a sign in link
            </Button>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};

export default Login;
