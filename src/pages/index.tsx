import Head from "next/head";
import theme from "@/styles/theme";
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

export default function Home() {
  return (
    <ChakraProvider theme={theme}>
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
        navItems= {data.navigation}
      />

      {/*bg*/}
      <Box
        bgGradient="linear(to-t, #151515, #484848)"
        id="unserearbeit"
        alignContent="center"
      >
        <Spacer height={50} />
        <UnityGame />

        <Center>
          <Stack
            spacing={4}
            margin="5"
            my={19}
            zIndex={6}
            minWidth="50vh"
            maxW="130vh"
          >
            <CustomSpacerOne />

            {/*maincard*/}
            <Card
              size="lg"
              transition="transform .5s"
              _hover={{
                transform: "scale(1.01)",
              }}
            >
              <CardHeader>
                <Heading size="xl">Was wir tun</Heading>
                <Heading size="l" color="grey">
                  Mit unseren 3 Kernkompetenzen erschaffen wir seit über 20
                  Jahren mediale Erlebniswelten - und das mit System.
                </Heading>
              </CardHeader>
              <CardBody mb="25">
                <Image
                  src="grafik-webseite.png"
                  margin="auto"
                  maxWidth="100%"
                  display="block"
                  alt="kernkompetenzen"
                />
              </CardBody>
            </Card>

            <CustomSpacerOne />

            {/*projectsamples*/}
            <VideoPlayer />

            <CustomSpacerOne />
            {/*contact*/}

            <Form />

            <CustomSpacerOne />
            {/*link*/}
            <Stack direction="row" id="agentur" zIndex={1}>
              <Box w="50vw">
                <Card h="100%">
                  <CardBody>
                    <iframe
                      src={data.endcards.video}
                      width="100%"
                      height="100%"
                      frameBorder="0"
                      allow="autoplay; fullscreen; picture-in-picture"
                    ></iframe>
                  </CardBody>
                </Card>
              </Box>
              <Spacer />
              <Box w="50vw">
                <Link href={data.endcards.website} isExternal>
                  <Card h="100%">
                    <CardBody textAlign="center">
                      <iframe
                        src={data.endcards.website}
                        width="100%"
                        scrolling="no"
                        height="500vw"
                        style={{ pointerEvents: "none" }}
                      />
                      <Center>
                        <Divider
                          borderWidth={1.5}
                          color="black"
                          my={5}
                          width="100%"
                          borderRadius="md"
                        />
                      </Center>
                      <Text fontSize="sm">
                        {data.endcards.label}
                      </Text>
                    </CardBody>
                  </Card>
                </Link>
              </Box>
            </Stack>
          </Stack>
        </Center>

        {/*FOOTER*/}
        <Spacer h={400} />
        <Footer />
      </Box>
    </ChakraProvider>
  );
}
