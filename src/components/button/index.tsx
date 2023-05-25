import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  ChakraProvider,
  Divider,
  Heading,
  Stack,
  Image,
  Text,
} from "@chakra-ui/react";
import React from "react";
export type ButtonProps = {
  children: any;
  className?: string;
};
/**
 * Button
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} The sum of the two numbers.
 */
export default function ({ children, className }: ButtonProps) {
  return (
    <ChakraProvider>
      <Button className={className + " !important"}>{children}</Button>
    </ChakraProvider>
  );
}
