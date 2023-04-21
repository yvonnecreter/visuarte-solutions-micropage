import { useState } from "react";
import {
  Box,
  Divider,
  Link,
  Center,
  Text,
  Card,
  CardBody,
  CardHeader,
  Grid,
  GridItem,
  AspectRatio,
  Heading,
  Image,
  Spacer,
  Stack,
  SimpleGrid,
} from "@chakra-ui/react";
import data from "../components/data.json";
import { useStyleConfig } from "@chakra-ui/react";

export default function LinkCards() {
  return (
    <>
      {/*link*/}
      {/*<Stack direction="row" id="agentur" zIndex={1}>*/}
      <SimpleGrid columns={{ base: 1, md: 2, lg: 2 }} gap="3">
        <GridItem>
          <Card sx={useStyleConfig("Card")} variant="videoplayer" h="100%" textAlign="center">
            <CardBody>
              <iframe
                src={data.endcards.video}
                width="100%"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                style={{ objectFit: "contain", aspectRatio: "16/9" }}
              ></iframe>
              
              <Center>
                  <Divider
                    borderWidth={1.5}
                    color="black"
                    borderColor={"#616161"}
                    my={5}
                    width="100%"
                    borderRadius="md"
                  />
                </Center>
                <Text fontSize="sm" variant={"emphasized"} mb="2">{data.endcards.labels1[0]}</Text>
                <Text fontSize="sm" variant={"regular"}>{data.endcards.labels1[1]}</Text>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem>
          <Link href={data.endcards.website} isExternal>
            <Card sx={useStyleConfig("Card")} h="100%">
              <CardBody textAlign="center">
                <video
                  src="images/web_preview_without_url.mp4"
                  style={{ objectFit: "contain", aspectRatio: "16/9" }}
                  loop
                  autoPlay
                  muted
                />
                <Center>
                  <Divider
                    borderWidth={1.5}
                    color="black"
                    borderColor={"#616161"}
                    my={5}
                    width="100%"
                    borderRadius="md"
                  />
                </Center>
                <Text fontSize="sm" variant={"emphasized"} mb="2">{data.endcards.labels2[0]}</Text>
                <Text fontSize="sm" variant={"regular"}>{data.endcards.labels2[1]}</Text>
              </CardBody>
            </Card>
          </Link>
        </GridItem>
      </SimpleGrid>
    </>
  );
}
