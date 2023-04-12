import * as React from "react";
import { Center, Divider } from "@chakra-ui/react";

export default function CustomSpacerOne() {
  return (
    <Center>
      <Divider
        // mt="2.5vw"
        // mb="2.5vw"
        my="1"
        width="30%"
        borderColor="#262626"
        /* borderWidth={1.2} */
        borderWidth="0"
        borderRadius="md"
      />
    </Center>
  );
}
