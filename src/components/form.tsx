import * as React from "react";
import {
  Box,
  Text,
  Image,
  Grid,
  GridItem,
  CardHeader,
  Card,
  CardBody,
  VStack,
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Textarea,
  Spacer,
  Flex,
  createIcon,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import data from "../components/data.json";
import Diagram1 from "../components/diagram";

type FormData = {
  textElements1: boolean[];
  textElements2: boolean[];
  email: string;
  message: string;
};

export default function Form() {
  const { register, handleSubmit } = useForm<FormData>();
  const onSubmit = (data: FormData) => {
    // handle form submission here
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Card zIndex={1} id="kontakt" mb={5}>
        <CardHeader>
          <Heading size="l" color="grey" marginBottom={4}>
            {data.form_titles.head1}
          </Heading>
          <Heading size="xl">{data.form_titles.head2}</Heading>
          <Heading size="l" color="grey">
            {data.form_titles.head3}
          </Heading>
        </CardHeader>

        {/* headline */}
        <CardBody mb={5}>
          <Grid templateColumns="repeat(2, 1fr)" gap={6}>
            <GridItem>
              <Box>
                <FormControl>
                  <Heading size="md">{data.form_titles.sub1head1}</Heading>
                  <FormLabel>{data.form_titles.sub1head2}</FormLabel>
                  <VStack align="left" ml="2">
                    {data.form_textElements1.map((textElement, index) => (
                      <Checkbox
                        key={index}
                        {...register(`textElements1.${index}`)}
                      >
                        {textElement}
                      </Checkbox>
                    ))}
                  </VStack>
                </FormControl>

                <Heading size="md" mt="10">
                  {data.form_titles.sub2head1}
                </Heading>
                <FormControl>
                  <FormLabel>{data.form_titles.sub2head2}</FormLabel>
                  <VStack align="left" ml="2">
                    {data.form_textElements2.map((textElement, index) => (
                      <Checkbox
                        key={index}
                        {...register(`textElements2.${index}`)}
                      >
                        {textElement}
                      </Checkbox>
                    ))}
                  </VStack>
                </FormControl>
              </Box>
            </GridItem>

            {/* column right side */}
            <GridItem>
              <Image
                src="diagram.png"
                alt="diagram"
                w="100%"
              />
            </GridItem>
          </Grid>
        </CardBody>
      </Card>

      <Card
        transition="transform .5s"
        _hover={{
          transform: "scale(1.01)",
        }}
      >
        <CardBody>
          <Heading>{data.form_titles.sub3head1}</Heading>
          <Heading size="sm" color={"grey"}>
            {data.form_titles.sub3head2}
          </Heading>
          <Grid templateColumns="repeat(2, 1fr)" gap={6} mt="5">
            <GridItem w="100%">
              <Flex flexDirection="column" h="100%">
                <Text mt="4vw">{data.form_titles.sub3head3}</Text>
                <Spacer />
                <Box width="70%" maxW="20vh">
                  <Image
                    src="logo.png"
                    alt="visuarte"
                    style={{ filter: "invert(1)" }}
                    w="auto"
                    maxW="100%"
                    mt={5}
                  />
                  <Text fontSize="xs" lineHeight={1.3}>
                    {" "}
                    <br />
                    Hofmannstrasse 10 | 81379 München <br />
                    t + 49 89 45 24 46 <br />
                    f + 49 89 45 24 46 - 12 <br />
                    m + 49 172 14 72 64 4
                    <br /> e ilja@visuarte.com
                    <br /> w www.visuarte.com
                  </Text>
                </Box>
              </Flex>
            </GridItem>
            <GridItem w="100%">
              <Flex direction="column" h="100%" align="left">
                <FormControl id="email">
                  <FormLabel>Email:</FormLabel>
                  <Input type="email" {...register("email")} />
                </FormControl>

                <FormControl id="message" my="5">
                  <FormLabel>Nachricht:</FormLabel>
                  <Textarea {...register("message")} />
                </FormControl>
                <Spacer />
                <Button type="submit">Senden</Button>
              </Flex>
            </GridItem>
          </Grid>
        </CardBody>
      </Card>
    </form>
  );
}
