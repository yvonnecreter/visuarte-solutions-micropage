import Head from "next/head";
import theme from "@/styles/theme";
import {
  ChakraProvider,
  Box,
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
} from "@chakra-ui/react";
import Header from "@/components/header";
import UnityGame from "@/components/unitygame";
import Form from "@/components/form";
import Footer from "@/components/footer";
import Anim from "@/components/anim";
import MainCard from "@/components/maincard";

export default function Home() {
  return (
    <ChakraProvider theme={theme}>
      {/*PAGE INFORMATION*/}
      <Head>
        <title>visuarte Solutions</title>
        <meta name="description" content="visuarte Solutions Application" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/*HEADER*/}
      <Header
        logo={<Image src="logo.png" w="20" alt="visuarte" />}
        navItems={[
          { label: "Wie Wir Arbeiten", href: "#unserearbeit" },
          { label: "Exponate", href: "#exponate" },
          { label: "Kontakt", href: "#kontakt" },
          { label: "Agentur", href: "#agentur" },
        ]}
      />

    <Anim/>

      {/*BACKGROUND*/}
      <Box bgGradient="linear(to-t, #151515, #484848)" id="unserearbeit">
        <Spacer h={1100} />
        <UnityGame />

        <MainCard/>
        <Stack spacing={4} margin="5" my={19} mt="2160px" 
        zIndex={6}>
          {/*CARDS*/}
          <Stack direction="row" zIndex={9998}>
            <Box w="50vw">
              <Card h="100%" id="exponate">
                <CardBody>
                  <iframe
                    src="https://player.vimeo.com/video/586284805"
                    width="100%"
                    height="100%"
                    frameborder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </CardBody>
              </Card>
            </Box>
            <Spacer />
            <Box w="50vw">
              <Card h="100%">
                <CardBody>
                  <Grid templateColumns="repeat(3, 1fr)" gap={1} h="100%">
                    {[
                      "portfolio-image-1.jpg",
                      "portfolio-image-2.jpg",
                      "portfolio-image-3.jpg",
                      "portfolio-image-4.jpg",
                      "portfolio-image-5.jpg",
                      "portfolio-image-6.jpg",
                    ].map((imagePath, i) => (
                      <GridItem key={i}>
                        <Image
                          src={imagePath}
                          alt={`Image ${i + 1}`}
                          boxSize="15vw"
                          objectFit="cover"
                          borderRadius="5"
                        />
                      </GridItem>
                    ))}
                  </Grid>
                </CardBody>
              </Card>
            </Box>
          </Stack>

          <Card zIndex={1}  id="kontakt" >
            <CardHeader>
              <Heading size="l" color="grey" marginBottom={4}>
                Kontakt
              </Heading>
              <Heading size="xl">Zu Ihrem Projekt</Heading>
              <Heading size="l" color="grey">
                Holen Sie uns mit ein paar Angaben einfach mal unverbindlich ab,
                was Sie beschäftigt
              </Heading>
            </CardHeader>
            <CardBody>
              <Form />
            </CardBody>
          </Card>

          <Stack direction="row" id="agentur" zIndex={1}>
            <Box w="50vw">
              <Card h="100%">
                <CardBody>
                  <iframe
                    src="https://player.vimeo.com/video/586284805"
                    width="100%"
                    height="100%"
                    frameborder="0"
                    objectFit="cover"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </CardBody>
              </Card>
            </Box>
            <Spacer />
            <Box w="50vw">
              <Link href="https://visuarte.com" isExternal>
                <Card h="100%">
                  <CardBody>
                    <iframe
                      src="https://visuarte.com"
                      width="100%"
                      scrolling="no"
                      height="500vw"
                      style={{ pointerEvents: "none" }}
                    />
                  </CardBody>
                </Card>
              </Link>
            </Box>
          </Stack>
        </Stack>

        {/*FOOTER*/}
        <Spacer h={400} />
        <Footer />
      </Box>
    </ChakraProvider>
  );
}
