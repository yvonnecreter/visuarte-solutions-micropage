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
  GridItem, AspectRatio,
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
          <Card sx={useStyleConfig("Card")} variant="videoplayer" h="100%">
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
        </GridItem>
        <GridItem>
          <Link href={data.endcards.website} isExternal>
            <Card sx={useStyleConfig("Card")} h="100%">
              <CardBody textAlign="center">
                <AspectRatio ratio={16 / 9}>
                  <iframe
                    title="website"
                    src="web_preview_without_url.mp4"
                    allowFullScreen
                  />
                </AspectRatio>
                {/* <iframe
                  src={data.endcards.website}
                  // width="100%"
                  // scrolling="no"
                  height="500vw"
                  style={{ pointerEvents: "none" }}
                /> */}
                <Center>
                  <Divider
                    borderWidth={1.5}
                    color="black"
                    my={5}
                    width="100%"
                    borderRadius="md"
                  />
                </Center>
                <Text fontSize="sm">{data.endcards.label}</Text>
              </CardBody>
            </Card>
          </Link>
        </GridItem>
      </SimpleGrid>
    </>
  );
}
