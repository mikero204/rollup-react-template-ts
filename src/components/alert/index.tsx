import React from "react";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  ChakraProvider,
} from "@chakra-ui/react";
export type AlertProps = {
  status: string;
  title: string;
  content: string;
};
export default function ({ status, title, content }: AlertProps) {
  if (status === "error") {
    return (
      <ChakraProvider>
        <Alert status="error">
          <AlertIcon />
          <AlertTitle>{title}</AlertTitle>
          <AlertDescription>{content}</AlertDescription>
        </Alert>
      </ChakraProvider>
    );
  } else {
    return (
      <ChakraProvider>
        <Alert status="success">
          <AlertIcon />
          <AlertTitle>{title}</AlertTitle>
          <AlertDescription>{content}</AlertDescription>
        </Alert>
      </ChakraProvider>
    );
  }
}
