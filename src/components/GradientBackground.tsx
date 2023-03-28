import { Center } from "@chakra-ui/react";
import { ReactNode } from "react";

interface GradientBackgroundProps {
  children: ReactNode;
}

export const GradientBackground = ({ children }: GradientBackgroundProps) => {
  return (
    <Center h="100vh" bgGradient="radial-gradient(circle at center, blue.600, gray.800) ">
      {children}
    </Center>
  );
};
