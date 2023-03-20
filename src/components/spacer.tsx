import * as React from "react";
import { Center, Divider } from "@chakra-ui/react";

export default function CustomSpacerOne() {
  return (
    <Center>
      <Divider
        mt="2.5vw"
        mb="2.5vw"
        width="30%"
        borderColor="white"
        borderWidth={1.2}
        borderRadius="md"
      />
    </Center>
  );
}
