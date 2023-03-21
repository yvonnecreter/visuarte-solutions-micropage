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
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";

type FormData = {
  textElements1: boolean[];
  textElements2: boolean[];
  email: string;
  message: string;
};

const textElements1 = [
  "Wir benötigen ein wirkungsvolles Konzept für unsere Ziele und ein nachhaltiges Markenerlebnis",
  "Wir benötigen eine Story, 3D Objekte, emotionale Bilder, 2D/3D Animationen oder eine Filmproduktion",
  "Wir möchten interaktive, erlebbare Exponate und digitale Inszenierungen für einen nachhaltigen Effekt",
];

const textElements2 = [
  "Wir brauchen einen Eyecatcher, eine Attraktion",
  "Wir wollen emotionalisieren und Impulse setzen",
  "Wir wollen schnell eine bestimmte Atmosphäre schaffen",
  "Wir wollen mehr zeigen, als es räumlich möglich ist",
  "Wir möchten Teile der Exponate nach der Messe weiterverwenden ( z.B. Showroom)",
  "Wir möchten auf (interaktive) Anfrage mehr Details zeigen können",
  "Ein Objekt ist zu groß oder zu klein, um es LIVE auf der Messe zu präsentieren",
  "Wir benötigen einen Mindmarker, der im Gedächtnis bleibt",
  "Wir möchten Give-Aways anbieten, um nach der Messe in Erinnerung zu bleiben",
  "Wir wollen unkompliziert und schnell Leads generieren",
  "Wir wollen zügig Informationen & Services bereitstellen, um erste Fragen digital zu beantworten",
  "Wir benötigen einen speziellen Fokus auf unser Produkt / auf unsere Marke",
  "Wir brauchen auf der Messe mehr Fernwirkung",
  "Wir müssen Erklärungsbedürftiges einfach darstellen",
];

export default function Form() {
  const { register, handleSubmit } = useForm<FormData>();
  const onSubmit = (data: FormData) => {
    // handle form submission here
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Card zIndex={1} id="kontakt" mb={5} >
        <CardHeader>
          <Heading size="l" color="grey" marginBottom={4}>
            Wir sind für Sie da
          </Heading>
          <Heading size="xl">Zu Ihrem Vorhaben</Heading>
          <Heading size="l" color="grey">
            Holen Sie uns mit ein paar Angaben einfach mal unverbindlich ab, was
            Sie beschäftigt
          </Heading>
        </CardHeader>
        <CardBody mb={5}>
          <Box>
            <FormControl>
              <Heading size="md">... schon eine grobe Vorstellung?</Heading>
              <VStack align="left">
                <FormLabel>Sprechen Sie uns an auf...</FormLabel>
                {textElements1.map((textElement, index) => (
                  <Checkbox key={index} {...register(`textElements1.${index}`)}>
                    {textElement}
                  </Checkbox>
                ))}
              </VStack>
            </FormControl>

            <Heading size="md" mt="10">
              ... oder kennen Sie bereits Ihre Anforderungen?
            </Heading>
            <FormControl>
              <VStack align="left">
                <FormLabel>Oft bei uns angefragt...</FormLabel>
                {textElements2.map((textElement, index) => (
                  <Checkbox key={index} {...register(`textElements2.${index}`)}>
                    {textElement}
                  </Checkbox>
                ))}
              </VStack>
            </FormControl>
          </Box>
        </CardBody>
      </Card>
      <Card transition="transform .5s"
              _hover={{
                transform: "scale(1.01)",
              }}>
        <CardBody>
          <Heading>Wir sind für Sie da</Heading>
          <Heading size="sm" color={"grey"}>
            Schreiben Sie hier doch gleich eine Mail an Herrn Ilja Knezovic
          </Heading>
          <Grid templateColumns="repeat(2, 1fr)" gap={6} mt="5">
            <GridItem w="100%">
              <Flex flexDirection="column" h="100%">
                <Text>
                  Wir melden uns bei Ihnen und nehmen uns gerne die Zeit.
                </Text>
                <Spacer />
                <Box width="70%" maxW="20vh">
                  <Image
                    src="logo.png"
                    alt="visuarte"
                    style={{ filter: "invert(1)" }}
                    w = "auto"
                    maxW="100%"
                    mt={5}
                  />
                  <Text fontSize="xs" fontWeight="bold" lineHeight={1.3}>
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
              <Box>
                <VStack align="left">
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
                </VStack>
              </Box>
            </GridItem>
          </Grid>
        </CardBody>
      </Card>
    </form>
  );
}