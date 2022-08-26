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
  FormErrorMessage,
} from "@chakra-ui/react";
import { useState } from "react";
import { useRouter } from "next/router";

const SignUp: NextPage = () => {
  const [form, setForm] = useState({ email: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<any>();
  const router = useRouter();

  return (
    <Flex minH="100vh" align="center" justify="center">
      <Stack spacing="8" mx="auto" maxW="lg" py="12" px="6">
        <Stack align="center">
          <Heading as="h1" size="lg" textAlign="center">
            Join our waitlist
          </Heading>
          <Text color="gray.600" textAlign="center">
            Offset Me is under active development. If you would like to join our
            first cohort of users, please join our waitlist!
          </Text>
        </Stack>
        <Box rounded="lg" bg="white" boxShadow="lg" p="8">
          <form
            onSubmit={async (e) => {
              e.preventDefault();
              setIsLoading(true);
              try {
                await fetch(
                  "https://ikozwkp1n5.execute-api.us-west-1.amazonaws.com/prod",
                  {
                    method: "POST",
                    headers: {
                      "content-type": "application/json",
                    },
                    mode: "no-cors",
                    body: JSON.stringify({
                      waitlist: "offsetme.app",
                      email: form.email,
                    }),
                  }
                );
                router.push("/sent");
              } catch (e) {
                console.error(e);
                setError(e);
                setIsLoading(false);
              }
            }}
          >
            <Stack spacing="10">
              <FormControl isInvalid={error} id="email">
                <FormLabel>Email</FormLabel>
                <Input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) =>
                    setForm({ ...form, email: e.currentTarget.value })
                  }
                />
                <FormErrorMessage>
                  An error occurred please try again.
                </FormErrorMessage>
              </FormControl>
              <Button
                type="submit"
                isLoading={isLoading}
                loadingText="Sending link..."
                _hover={{ bg: "green.500" }}
                bg="green.400"
                colorScheme="green"
              >
                Join the Waitlist
              </Button>
            </Stack>
          </form>
        </Box>
      </Stack>
    </Flex>
  );
};

export default SignUp;
