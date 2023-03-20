import * as React from "react";
import {
  Box,
  VStack,
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Textarea,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";

type FormData = {
  textElements1: boolean[];
  textElements2: boolean[];
  email: string;
  message: string;
};

const textElements1 = [
  "Wir benötigen ein spannendes, wirkungsvolles Konzept für unsere Ziele und ein nachhaltiges Messeerlebnis",
  "Wir benötigen eine Story, 3D Objekte, emotionale Bilder, brilliante Animationen oder eine Videoproduktion",
  "Wir möchten interaktive, erlebbare Exponate und digitale Inszenierungen anbieten, die im Kopf bleiben",
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

function FormWIP() {
  const { register, handleSubmit } = useForm<FormData>();
  const onSubmit = (data: FormData) => {
    // handle form submission here
  };

  const [selectedTexts1, setSelectedTexts1] = React.useState([]);
  const [selectedTexts2, setSelectedTexts2] = React.useState([]);

  const handleCheckboxChange1 = (event) => {
    const { value } = event.target;
    setSelectedTexts1((prevSelectedTexts) =>
      prevSelectedTexts.includes(value)
        ? prevSelectedTexts.filter((text) => text !== value)
        : [...prevSelectedTexts, value]
    );
  };

  const handleCheckboxChange2 = (event) => {
    const { value } = event.target;
    setSelectedTexts2((prevSelectedTexts) =>
      prevSelectedTexts.includes(value)
        ? prevSelectedTexts.filter((text) => text !== value)
        : [...prevSelectedTexts, value]
    );
  };

  return (
    <Box>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl>
          <Heading size="md" mt="5">
            Schon eine grobe Vorstellung?
          </Heading>
          <VStack align="left">
            <FormLabel>Sprechen Sie uns an auf...</FormLabel>

            {textElements1.map((textElement, index) => (
              <Checkbox
                key={index}
                {...register(`textElements1.${index}`)}
                onChange={handleCheckboxChange1}
              >
                {textElement}
              </Checkbox>
            ))}
          </VStack>
        </FormControl>

        <Heading size="md" mt="10">
          Welche Wünsche dürfen wir Ihnen erfüllen?
        </Heading>
        <FormControl>
          <VStack align="left">
            <FormLabel>Oft bei uns angefragt...</FormLabel>
            {textElements2.map((textElement, index) => (
              <Checkbox
                key={index}
                {...register(`textElements2.${index}`)}
                onChange={handleCheckboxChange2}
              >
                {textElement}
              </Checkbox>
            ))}
          </VStack>
        </FormControl>

        <VStack align="left">
          <FormControl id="email" mt="5">
            <FormLabel>Email:</FormLabel>
            <Input type="email" {...register("email")} />
          </FormControl>

          {/* Add the selected texts to the message field */}
          <FormControl id="message" my="5">
            <FormLabel>Message:</FormLabel>
            {/* Add the selected texts to the message field */}
            <Textarea
              {...register("message")}
              defaultValue={`${selectedTexts1.join(
                "\n"
              )}\n${selectedTexts2.join("\n")}`}
            />
          </FormControl>
        </VStack>

        <Button type="submit" mt="5">
          Submit
        </Button>
      </form>
    </Box>
  );
}












export default function Form() {
  const { register, handleSubmit } = useForm<FormData>();
  const onSubmit = (data: FormData) => {
    // handle form submission here
  };

  return (
    <Box>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl>
          <Heading size="md" mt="5">
            Schon eine grobe Vorstellung?
          </Heading>
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
          Welche Wünsche dürfen wir Ihnen erfüllen?
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

        <VStack align="left" mt="10">
          <FormControl id="email">
            <FormLabel>Email:</FormLabel>
            <Input type="email" {...register("email")} />
          </FormControl>

          <FormControl id="message" my="5">
            <FormLabel>Nachricht:</FormLabel>
            <Textarea {...register("message")} />
          </FormControl>

          <Button type="submit">Senden</Button>
        </VStack>
      </form>
    </Box>
  );
}
