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
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import data from "../components/data.json";
import Diagram1 from "../components/diagram";
import theme from "@/styles/theme";
import { useStyleConfig } from "@chakra-ui/react";

/* function onSubmit(values: any) {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      resolve();
    }, 3000);
  });
} */

export default function Form() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  /*  function onSubmit(values: any) {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        resolve();
      }, 3000);
    });
  } */

  /* function onSubmit(data: any) {
    console.log(data);
  } */

  /* FORM FRONTEND*/
  return (
    <form
      action="https://getform.io/f/6219fac4-4909-412f-8374-57fc5195395a"
      method="POST"
    >
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
                <Text variant="regular" mb="5">{data.form_titles.sub1head2}</Text>
                <VStack align="left" ml="2">
                  {data.form_textElements1.map((textElement, index) => (
                    <FormControl id={"Grobe Vorstellung " + index}>
                      <Checkbox
                        variant="regular"
                        {...register("Grobe Vorstellung " + index)}
                        value={textElement}
                        key={index}
                      >
                        <Text pl="2" variant="regular">
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
                <Text variant="regular" mb="5">{data.form_titles.sub2head2}</Text>

                <VStack align="left" ml="2">
                  {data.form_textElements2.map((textElement, index) => (
                    <FormControl id={"Anforderung " + index}>
                      <Checkbox
                        variant="regular"
                        key={index}
                        {...register("Anforderung " + index)}
                        value={textElement}
                      >
                        <Text variant="regular" pl="2">
                          {textElement}
                        </Text>
                      </Checkbox>
                    </FormControl>
                  ))}
                </VStack>
              </Box>
            </GridItem>

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
                  color="#565656"
                  mb="2"
                >
                  Email:
                  {/* <Heading variant="layer3">Email:</Heading> */}
                </FormLabel>
                <Input {...register("E-Mail")} /* value="E-Mail" */ />
              </FormControl>
            </GridItem>

            <GridItem rowSpan={2}>
              {" "}
              <Flex h="100%" alignItems="flex-end" justifyContent="flex-start">
                <Box width="100%" maxW="25vh">
                  <Image
                    src={data.logo}
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
            <GridItem>
              {/* FORM 4 */}
              <FormControl id="Nachricht">
                <FormLabel
                  fontSize="md"
                  fontWeight="bold"
                  color="#565656"
                  mb="2"
                >
                  Nachricht:
                  {/* <Heading variant="layer3">Nachricht:</Heading> */}
                </FormLabel>

                <Textarea {...register("Nachricht")} />
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
