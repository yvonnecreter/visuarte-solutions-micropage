import Head from "next/head";
import { useStyleConfig } from "@chakra-ui/react";
import {
  ChakraProvider, Show, Hide,
  Box,
  Divider,
  Spacer,
  Image,
  Text,
  Link,
  Stack,
  Code,
  GridItem,
  Grid,
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Heading,
  useBreakpointValue,
  Flex,
  Center,
} from "@chakra-ui/react";
import Header from "@/components/header";
import UnityGame from "@/components/unitygame";
import Form from "@/components/form";
import Footer from "@/components/footer";
import VideoPlayer from "@/components/videoplayercards";
import CustomSpacerOne from "@/components/spacer";
import data from "../components/data.json";
import ColumnCard from "@/components/columncard";
import ColumnCard2 from "@/components/columncard2";
import LinkCards from "@/components/linkcards";
import MotionBox from "@/components/motionbox";
import { ArrowDownIcon } from "@chakra-ui/icons";
import { MapIcon, VidIcon, TapIcon } from "@/components/icons";
import * as React from "react";
import { create } from "zustand";
import { Button } from "chakra-ui";
import ColorPicker from "@/components/colorpicker";
import { extendTheme, withDefaultColorScheme } from '@chakra-ui/react';
import useStore from "@/components/store";
import theme from "@/styles/theme";



/* interface MyState {
  bears: number;
  increasePopulation: () => void;
}

const useStore = create((set) => ({
  colors: ["red", "green", "blue"],
  addColor: (color: string) => set((state: MyState) => ({ colors: [...state.colors, color] })),
}));

function ColorsList() {
  const colors = useStore((state) => state.colors);
  return (
    <ul>
      {colors.map((color: string) => (
        <li key={color}>{color}</li>
      ))}
    </ul>
  );
}


/*   const [color, setColor] = React.useState("");
  const addColor = useStore((state) => state.addColor);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    addColor(color)
    setColor('')
  } */
  export default function Home() {
    /* COLOR MANGAGEMENT */
    const [colors] = useStore((state) => [state.colors]);
    const theme2 = extendTheme({
      colors: {
        brand: {
          purple: colors[0],
          green: colors[1],
          blue: colors[2],
        },
      },
    }, theme);

  return (
    <ChakraProvider theme={theme2}>
      {/*info*/}
      <Head>
        <title>visuarte Solutions</title>
        <meta name="description" content="visuarte Solutions Application" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="images/favicon.ico" />
      </Head>

      {/*header*/}
      <Header navItems={data.navigation} />

      {/* INFO 
      const breakpoints = {
        sm: '30em', // 480px
        md: '48em', // 768px
        lg: '62em', // 992px
        xl: '80em', // 1280px
        '2xl': '96em', // 1536px*/}

      {/* <ArrowDownIcon
              w={8}
              h={8}
              color="black"
              as="a"
              href="#waswirtun"
              zIndex="5"
            /> */}

      {/*bg*/}
      <Box
        /* bgGradient="linear(to-t, #212121, #424242)" */
        bgGradient="linear(to-t, #212121, #1e1e1f)"
        w={"100vw"}
        h={"100vh"}
        position={"fixed"}
        scrollBehavior={"smooth"}
      />
      <Spacer
        height={{
          base: "8vh",
          md: "8vh",
          lg: "6vh",
        }}
      />
      <Center>
        <Stack
          spacing={4}
          margin="5"
          my={19}
          zIndex={6}
          minWidth={{
            base: "95%",
            md: "95%",
            lg: "95%",
            xl: "85%",
            "2xl": "70%",
          }}
          maxWidth={{
            base: "95%",
            md: "95%",
            lg: "95%",
            xl: "95%",
            "2xl": "80%",
          }}
          mt="-1"
          /* minHeight={"50vw"} */
        >
          <UnityGame />
          <Show above='lg'>
          <CustomSpacerOne />

          {/* <ColumnCard2 /> */}
          <ColumnCard />
          <CustomSpacerOne />

          {/*projectsamples*/}
          <VideoPlayer />

          <CustomSpacerOne />
          {/*contact*/}

          <Form />
          <CustomSpacerOne />
          <LinkCards />
    
        <Spacer h="14vh" />
        <ColorPicker/>
        </Show>
        </Stack>
      </Center>
      {/*FOOTER*/}
      <Spacer h={{base:"0", lg:"14vh" }}/>
      <Footer />
    </ChakraProvider>
  );
}
