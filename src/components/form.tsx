import React, { useState, useRef, useEffect } from "react";
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
  AspectRatio,
  background,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import data from "./data.json";
import Diagram1 from "./diagram";
import { useStyleConfig, CheckboxGroup } from "@chakra-ui/react";
import theme from "@/styles/theme";
import Link from "next/link";

let amount = 0;

export default function Form() {
  /* FORM FUNCTIONS */
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const [formTextElements, setFormTextElements] = useState(
    data.form_textElements1
  );
  let [value, setValue] = React.useState("Hallo Ilja, \n \n");
  let handleInputChange = (e: { target: { value: any } }) => {
    let inputValue = e.target.value;
    setValue(inputValue);
  };

  let handleCheckboxChange = (e: {
    target: { id: any; value: any; checked: any };
  }) => {
    let checkboxValue = e.target.value;
    let checkboxId = e.target.id;

    if (e.target.checked) {
      setValue((prevValue) => prevValue + "" + checkboxValue + ". \n");
      handlePolaroidChecked(checkboxId);
      amount++;
      setFormTextElements((prevFormTextElements) => [
        ...prevFormTextElements,
        checkboxValue,
      ]);
      
      /* console.log("id: "+checkboxId); */
    } else {
      handlePolaroidUnchecked(checkboxId);
      amount--;
      setValue((prevValue) => prevValue.replace(checkboxValue + ". \n", ""));
      setFormTextElements((prevFormTextElements) =>
        prevFormTextElements.filter((item) => item !== checkboxValue)
      );
      
    }
  };


  const [activePolaroidMap, setActivePolaroidMap] = useState<{
    [key: string]: HTMLDivElement;
  }>({});
  const handlePolaroidChecked = (checkboxId: string) => {
    const box = document.createElement("div");
    box.style.marginTop = `${
      50 + Math.floor(amount/4)%4 * (gridItemDimensions.height / 6)
    }px`;
    box.style.marginLeft = `${
      20 + amount%4 * ((gridItemDimensions.width) / 6)
    }px`;
    box.style.position = "absolute";
    box.setAttribute("id", "box: " + checkboxId);
    const div = document.createElement("div");
    div.style.background = "white";
    div.style.height = "100%";
    div.style.transform = `rotate(${Math.random()*20-10}deg)`;
    const image = document.createElement("img");
    image.src = "images/placeholder_flat.svg";
    image.alt = "placeholder";
    image.height = 220;
    image.width = 200;
    image.style.padding = "10px";
    image.style.backgroundColor = "brand.white";
    image.style.paddingBottom = "50px";
    div.appendChild(image);
    box.appendChild(div);
    setActivePolaroidMap((prevState) => ({
      ...prevState,
      [checkboxId]: box,
    }));
    console.log(activePolaroidMap);
  };
  const handlePolaroidUnchecked = (checkboxId: string) => {
    setActivePolaroidMap((prevState) => {
      const newState = { ...prevState };
      delete newState[checkboxId];
      return newState;
    });
    console.log(activePolaroidMap);
  };
  const gridItemRef = useRef<HTMLDivElement>(null);

  /* LAYOUTING */
  

  /* STYLING */
  const col = ["purple", "green", "blue"];
  const hexcol = ["#ce93d8", "#a5d6a7", "#81d4fa"];

  /* POLAROID */
  const [gridItemDimensions, setGridItemDimensions] = useState({
    width: 0,
    height: 0,
  });
  useEffect(() => {
    if (gridItemRef.current) {
      const { offsetWidth, offsetHeight } = gridItemRef.current;
      setGridItemDimensions({ width: offsetWidth, height: offsetHeight });
      while (gridItemRef.current.firstChild) {
        gridItemRef.current.removeChild(gridItemRef.current.firstChild);
      }

      if (Object.keys(activePolaroidMap).length === 0) {
        const box = document.createElement("div");
        box.style.marginTop = `${50}px`;
        box.style.marginLeft = `${20}px`;
        box.style.position = "absolute";
        const div = document.createElement("div");
        div.style.background = "white";
        div.style.height = "100%";
        div.style.transform = `rotate(${Math.random() * 40 - 20}deg)`;
        const image = document.createElement("img");
        image.src = "images/placeholder_question.svg";
        image.alt = "placeholder";
        image.height = 220;
        image.width = 200;
        image.style.padding = "10px";
        image.style.backgroundColor = "brand.white";
        image.style.paddingBottom = "50px";
        div.appendChild(image);
        box.appendChild(div);
        gridItemRef.current.appendChild(box);
      } else {
        Object.values(activePolaroidMap).forEach((divElement) => {
          if (gridItemRef.current) {
            gridItemRef.current.appendChild(divElement);
          }
        });
      }
    }
  }, [activePolaroidMap]);

  /*FRONTEND*/
  return (
    <form
      action="https://getform.io/f/6219fac4-4909-412f-8374-57fc5195395a"
      method="POST"
    >
      {/* PART 1 */}
      <Card
        sx={useStyleConfig("Card")}
        zIndex={1}
        id="ihrprojekt"
        mb={5}
        scrollMarginTop={"5vh"}
      >
        <CardHeader>
          <Heading>{data.form_titles.head2}</Heading>
        </CardHeader>

        {/* HEADLINE */}
        <CardBody mb={5}>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 2 }} gap={6}>
            <GridItem h="100%" w="100%" ref={gridItemRef}>
              {/* <SimpleGrid columns={{ base: 2, md: 3, lg: 3 }} gap={6} ref={gridItemRef}>
              </SimpleGrid> */}
            </GridItem>

            <GridItem>
              <Box>
                {/* FORM 1 */}
                <Heading variant="layer3">{data.form_titles.sub1head1}</Heading>
                <Text variant="regular" mb="5">
                  {data.form_titles.sub1head2}
                </Text>
                <VStack align="left" ml="2">
                  {data.form_textElements1.map((textElement, index) => (
                    <FormControl
                      id={"Grobe Vorstellung " + index}
                      key={"f1" + index}
                    >
                      <Checkbox
                        colorScheme={hexcol[index]}
                        variant={col[index]}
                        key={"form1" + index}
                        value={textElement}
                        onChange={handleCheckboxChange}
                      >
                        <Text pl="2" variant="regular" key={"t" + index}>
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
                    <FormControl id={"Anforderung " + index} key={"f2" + index}>
                      <Checkbox
                        variant="regular"
                        key={"f2" + index}
                        /* {...register("Anforderung " + index)} */
                        value={textElement}
                        colorScheme="brand.slightgrey"
                        onChange={handleCheckboxChange}
                      >
                        <Text variant="regular" pl="2" key={"t2" + index}>
                          {textElement}
                        </Text>
                      </Checkbox>
                    </FormControl>
                  ))}
                </VStack>
              </Box>
              <Link href="#letstalk" passHref>
                <Button /* as="a" */ w="100%" mt="5%" key="b">
                  {" "}
                  Na dann los!{" "}
                </Button>
              </Link>
            </GridItem>
          </SimpleGrid>
        </CardBody>
      </Card>

      <Box style={{position: "relative"}} w="100%" h="0">
        <Box style={{position: "absolute", top:"70px", left: "-20%"}} w="140%" h="19px" backgroundColor={"brand.purple"} overflow={"visible"}/>
        <Box style={{position: "absolute", top:"95px", left: "-20%"}} w="140%" h="19px" backgroundColor={"brand.green"} overflow={"visible"}/>
        <Box style={{position: "absolute", top:"120px", left: "-20%"}} w="140%" h="19px" backgroundColor={"brand.blue"} overflow={"visible"}/>
      </Box>
      <Card
        sx={useStyleConfig("Card")}
        transition="transform .5s"
        _hover={{
          transform: "scale(1.01)",
        }}
        id="letstalk"
        scrollMarginTop={"5vh"}
        backdropFilter="auto"
        backdropBlur={"14px"}>
        <CardHeader>
          <Heading>{data.form_titles.sub3head1}</Heading>
          <Heading variant="layer2">{data.form_titles.sub3head2}</Heading>

          <Text variant="lessEmphasized" my="5">
            {data.form_titles.sub3head3.map((item, i) => (
              <React.Fragment key={i}>
                {item} <br />
              </React.Fragment>
            ))}
          </Text>
        </CardHeader>

        <CardBody>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 2 }} gap={6} rowGap="8">
            <GridItem w="100%"></GridItem>

            <GridItem>
              {/* FORM 3 */}
              <FormControl isRequired id="E-Mail" key="f3">
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
                  key="emailinput"
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
                    /* width={{ xl: "80%" , "2xl": "55%"}} */
                    /* maxW={{ "2xl": "30vh"}} */
                    minW={{ xl: "50px", "2xl": "50px" }}
                    maxW={{ base: "260px", xl: "200px", "2xl": "250px" }}
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
              <FormControl id="Nachricht" key="f4">
                <FormLabel
                  fontSize="md"
                  fontWeight="bold"
                  color="#9e9e9e"
                  mb="2"
                >
                  Nachricht:
                  {/* <Heading variant="layer3">Nachricht:</Heading> */}
                </FormLabel>

                <Textarea
                  {...register("Nachricht")}
                  value={value}
                  onChange={handleInputChange}
                  key="textarea"
                  variant="regular"
                  h="300px"
                />
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
