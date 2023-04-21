/* eslint-disable react/jsx-key */
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
  SimpleGrid,
  Flex,
  CardFooter,
  background,
  Spacer,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import data from "../components/data.json";
import Diagram1 from "../components/diagram";
import { useStyleConfig, CheckboxGroup  } from "@chakra-ui/react";

import theme from "@/styles/theme";
import Link from "next/link";

export default function Form() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const col = ["purple", "green", "blue"];
  const hexcol = ["#ce93d8", "#a5d6a7", "#81d4fa"];

  /* FORM FRONTEND*/
  return (
    <form
      action="https://getform.io/f/6219fac4-4909-412f-8374-57fc5195395a"
      method="POST"
    >

      {/* PART 1 */}
      <Card sx={useStyleConfig("Card")} zIndex={1} id="kontakt" mb={5}>
        <CardHeader>
          <Heading>{data.form_titles.head2}</Heading>
        </CardHeader>

        {/* headline */}
        <CardBody mb={5}>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 2 }} gap={6}>
            <GridItem>
              <Box>
                {/* FORM 1 */}
                <Heading variant="layer3">{data.form_titles.sub1head1}</Heading>
                <Text variant="regular" mb="5">
                  {data.form_titles.sub1head2}
                </Text>
                <VStack align="left" ml="2">
                  {data.form_textElements1.map((textElement, index) => (
                    <FormControl id={"Grobe Vorstellung " + index}>
                      <Checkbox
                        colorScheme= {hexcol[index]}
                        variant={col[index]}
                        {...register("Grobe Vorstellung " + index)}
                        
                      >
                        <Text
                          pl="2"
                          variant="regular"
                          color={data.maincard.colors[index]}
                        >
                          {textElement}
                        </Text>
                      </Checkbox>
                    </FormControl>
                  ))}
                </VStack>

                <Heading variant="layer3" mt="10">
                  {data.form_titles.sub2head1}
                </Heading>

                {/* FORM 2 */}
                <Text variant="regular" mb="5">
                  {data.form_titles.sub2head2}
                </Text>

                <VStack align="left" ml="2">
                  {data.form_textElements2.map((textElement, index) => (
                    <FormControl id={"Anforderung " + index}>
                      <Checkbox
                        variant="regular"
                        key={index}
                        {...register("Anforderung " + index)}
                        value={textElement}
                        colorScheme= "brand.slightgrey"
                      >
                        <Text variant="regular" pl="2">
                          {textElement}
                        </Text>
                      </Checkbox>
                    </FormControl>
                  ))}
                </VStack>
              </Box>
              <Link href="#skipcheckboxes" passHref>
                <Button as="a" w="100%" mt="5%">
                  {" "}
                  Na dann los!{" "}
                </Button>
              </Link>
              
            </GridItem>



      {/* PART 2 */}
            {/* column right side */}
            <GridItem>
              <Image src={data.diagramIMG} alt="diagram" w="100%" />
            </GridItem>
          </SimpleGrid>
        </CardBody>
      </Card>

      <Card
        sx={useStyleConfig("Card")}
        transition="transform .5s"
        _hover={{
          transform: "scale(1.01)",
        }}
        id="skipcheckboxes"
      >
        <CardHeader>
          <Heading>{data.form_titles.sub3head1}</Heading>
          <Heading variant="layer2">{data.form_titles.sub3head2}</Heading>

          <Text variant="lessEmphasized" my="5">
            {data.form_titles.sub3head3.map((item, i) => (
              <>
                {item} <br />
              </>
            ))}
          </Text>
        </CardHeader>

        <CardBody>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 2 }} gap={6} rowGap="8">
            <GridItem w="100%"></GridItem>

            <GridItem>
              {/* FORM 3 */}
              <FormControl isRequired id="E-Mail">
                <FormLabel
                  fontSize="md"
                  fontWeight="bold"
                  color="#9e9e9e"
                  mb="2"
                >
                  Email:
                  {/* <Heading variant="layer3">Email:</Heading> */}
                </FormLabel>
                <Input
                  {...register("E-Mail")}
                  /* value="E-Mail" */ variant="regular"
                />
              </FormControl>
            </GridItem>

            <GridItem rowSpan={2}>
              {" "}
              <Flex h="100%" alignItems="flex-end" justifyContent="flex-start">
                <Box width="100%" maxW="25vh">
                  <Image
                    src={data.logo_g}
                    alt="visuarte"
                    opacity="100%"
                    width="55%"
                    maxW="30vh"
                    mb="25"
                    /* filter="invert(0.50)" */
                    /* filter="invert(0.87)" */
                  />
                  <Text variant="small">
                    Hofmannstrasse 10 | 81379 München <br />
                    t + 49 89 45 24 46 -18 <br />
                    f + 49 89 45 24 46 -12 <br />
                    m + 49 177 33 22 352
                    <br /> e ilja@visuarte.com
                    <br /> w www.visuarte.com
                  </Text>
                </Box>
              </Flex>
            </GridItem>
            <GridItem>
              {/* FORM 4 */}
              <FormControl id="Nachricht">
                <FormLabel
                  fontSize="md"
                  fontWeight="bold"
                  color="#9e9e9e"
                  mb="2"
                >
                  Nachricht:
                  {/* <Heading variant="layer3">Nachricht:</Heading> */}
                </FormLabel>

                <Textarea {...register("Nachricht")} variant="regular" value="Hallo Ilja, " />
              </FormControl>
            </GridItem>
            <GridItem>
              <Button type="submit" w="100%">
                Senden
              </Button>
            </GridItem>
          </SimpleGrid>
        </CardBody>
        <CardFooter></CardFooter>
      </Card>
    </form>
  );
}
