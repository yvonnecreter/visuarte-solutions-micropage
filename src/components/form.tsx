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
  Spacer, SimpleGrid,
  Flex,
  createIcon,
  CardFooter,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import data from "../components/data.json";
import Diagram1 from "../components/diagram";
import theme from "@/styles/theme";
import { useStyleConfig } from "@chakra-ui/react";

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
      <Card sx={useStyleConfig("Card")} zIndex={1} id="kontakt" mb={5}>
        <CardHeader>
          <Heading variant="layer2" marginBottom={4}>
            {data.form_titles.head1}
          </Heading>
          <Heading>{data.form_titles.head2}</Heading>
          <Heading variant="layer2">{data.form_titles.head3}</Heading>
        </CardHeader>

        {/* headline */}
        <CardBody mb={5}>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 2 }} gap={6} >
            <GridItem>
              <Box>
                <FormControl>
                  <Heading variant="layer3">
                    {data.form_titles.sub1head1}
                  </Heading>
                  <FormLabel>
                    <Text variant="regular">{data.form_titles.sub1head2}</Text>
                  </FormLabel>
                  <VStack align="left" ml="2">
                    {data.form_textElements1.map((textElement, index) => (
                      <Checkbox variant="regular"
                        color="grey"
                        key={index}
                        {...register(`textElements1.${index}`)}
                      >
                        <Text 
                        pl="2"
                         variant="regular">{textElement}</Text>
                      </Checkbox>
                    ))}
                  </VStack>
                </FormControl>

                <Heading variant="layer3" mt="10">
                  {data.form_titles.sub2head1}
                </Heading>
                <FormControl>
                  <FormLabel>
                    <Text variant="regular">{data.form_titles.sub2head2}</Text>
                  </FormLabel>
                  <VStack align="left" ml="2">
                    {data.form_textElements2.map((textElement, index) => (
                      <Checkbox variant="regular"
                        key={index}
                        {...register(`textElements2.${index}`)}
                      >
                        <Text variant="regular" 
                        pl="2">{textElement}</Text>
                      </Checkbox>
                    ))}
                  </VStack>
                </FormControl>
              </Box>
            </GridItem>

            {/* column right side */}
            <GridItem>
              <Image src="diagram.png" alt="diagram" w="100%" />
            </GridItem>
          </SimpleGrid>
        </CardBody>
      </Card>

      {/* SECOND CARD */}
      <Card
        sx={useStyleConfig("Card")}
        transition="transform .5s"
        _hover={{
          transform: "scale(1.01)",
        }}
      >
        <CardHeader>
          <Heading>{data.form_titles.sub3head1}</Heading>
          <Heading variant="layer2">{data.form_titles.sub3head2}</Heading>
              <Text variant="lessEmphasized" mt="50"> {data.form_titles.sub3head3}</Text>
        </CardHeader>
        
        <CardBody>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 2 }}
            gap={6} rowGap="8"
          >
            <GridItem w="100%">
            </GridItem>

            <GridItem>
                <FormControl id="email">
                  <FormLabel>
                    <Heading variant="layer3">Email:</Heading>
                  </FormLabel>
                  <Input type="email" {...register("email")} />
                </FormControl>
            </GridItem>

            <GridItem rowSpan={2}> <Flex h="100%" alignItems="flex-end" justifyContent="flex-start">
              <Box width="100%" maxW="25vh">
                <Image
                  src="logo.png"
                  alt="visuarte"
                  style={{ filter: "invert(1)" }}
                  opacity="65%"
                  width="55%"
                  maxW="30vh"
                  mb="25"
                />
                <Text variant="small">
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
            <GridItem >
              <FormControl id="message">
                <FormLabel>
                  <Heading variant="layer3">Nachricht:</Heading>
                </FormLabel>
                <Textarea {...register("message")} />
              </FormControl>
            </GridItem>
            <GridItem>
              
          <Button type="submit" w="100%">
            Senden
          </Button>
            </GridItem>
          </SimpleGrid>
        </CardBody>
        <CardFooter>
        </CardFooter>
      </Card>
    </form>
  );
}
