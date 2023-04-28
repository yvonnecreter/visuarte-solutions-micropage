import Head from "next/head";
import theme from "@/styles/theme";
import { useStyleConfig } from "@chakra-ui/react";
import {
  ChakraProvider,
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
import LinkCards from "@/components/linkcards";
import MotionBox from "@/components/motionbox";
import { ArrowDownIcon } from "@chakra-ui/icons";

import { MapIcon, VidIcon, TapIcon } from "@/components/icons";

export default function Home() {
  return (
    <ChakraProvider theme={theme}>
      {/*info*/}
      <Head>
        <title>visuarte Solutions</title>
        <meta name="description" content="visuarte Solutions Application" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="images/favicon.ico" />
      </Head>

      {/*header*/}
      <Header navItems={data.navigation}/>

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
        bgGradient="linear(to-t, #212121, #424242)"
        w={"100vw"}
        h={"100vh"}
        position={"fixed"}
        scrollBehavior={"smooth"}
      />
      <Spacer
        height={{
          base: "6vh",
          md: "6vh",
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
            sm: "95%",
            md: "95%",
            lg: "95%",
            xl: "85%",
            "2xl": "70%",
          }}
          maxWidth={{
            sm: "95%",
            md: "95%", 
            lg: "95%",
            xl: "95%",
            "2xl": "80%",
          }}
          /* minWidth="50vh"
            maxWidth={[
              "100%",
              "100%",
              "100%",
              "100%",
              "1920px",
            ]} */
          /* maxWidth={[
              "120vh",
            ]} */
          /* w={[
              "100%",
              "100%",
              "100%",
              "100%",
              "120vh",
            ]} */
          /* base:"100vw",
              md:"100vw",
              lg: "80vw" */
          /* lg: "120vh" */

          mt="-1"
        >
          <UnityGame />
          <CustomSpacerOne />

          <ColumnCard />

          <CustomSpacerOne />

          {/*projectsamples*/}
          <VideoPlayer />

          <CustomSpacerOne />
          {/*contact*/}

          <Form />

          <CustomSpacerOne />
          <LinkCards />
        </Stack>
      </Center>
      {/*FOOTER*/}
      <Spacer h="14vh" />
      <Footer />
    </ChakraProvider>
  );
}
