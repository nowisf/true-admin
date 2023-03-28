import {
  Card,
  CardBody,
  CardHeader,
  FormLabel,
  Heading,
  Input,
  Stack,
  Link,
  Button,
} from "@chakra-ui/react";
import React from "react";
import { GradientBackground } from "../components/GradientBackground";

export default function Login() {
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const email = event.currentTarget.email.value;
    const password = event.currentTarget.password.value;

    console.log({ email, password });
  };

  return (
    <GradientBackground>
      <Card boxShadow="dark-lg" width={["95vw", "30vw"]}>
        <CardBody>
          <CardHeader>
            <Heading size="lg" textAlign="center">
              True Admin
            </Heading>
          </CardHeader>
          <form onSubmit={onSubmit}>
            <Stack spacing={5}>
              <div>
                <FormLabel htmlFor="email">Email</FormLabel>
                <Input size="sm" type="email" name="email" />
              </div>
            </Stack>
            <Stack mt={4}>
              <Button colorScheme="telegram" type="submit" onClick={() => null}>
                Send
              </Button>

              <Link textAlign="center" href="/login">
                ᐊ Go back
              </Link>
            </Stack>
          </form>
        </CardBody>
      </Card>
    </GradientBackground>
  );
}
