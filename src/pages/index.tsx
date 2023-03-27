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

export default function Home() {
  return (
    <ChakraProvider theme={theme} >
      {/*info*/}
      <Head>
        <title>visuarte Solutions</title>
        <meta name="description" content="visuarte Solutions Application" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="favicon.ico" />
      </Head>

      {/*header*/}
      <Header
        logo={<Image src="logo.png" w="20" alt="visuarte" />}
        navItems={data.navigation}
      />

      {/*bg*/}
      <Box 
        bgGradient="linear(to-t, #151515, #484848)"
        id="unserearbeit"
        alignContent="center"
      >
        <Spacer height={50} />

        <Center>
          <Stack
            spacing={4}
            margin="5"
            my={19}
            zIndex={6}
            minWidth="50vh"
            maxW="120vh"
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
        <Spacer h="20vh" />
        <Footer />
      </Box>
    </ChakraProvider>
  );
}
