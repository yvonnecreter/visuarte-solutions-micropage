import { useState } from "react";
import {
  Box,
  Divider,
  Center,
  Text,
  Card,
  CardBody,
  CardHeader,
  Grid,
  GridItem,
  Heading,
  Image,
  Spacer,
  Stack,
  SimpleGrid,
} from "@chakra-ui/react";
import data from "../components/data.json";
import theme from "@/styles/theme";
import { useStyleConfig } from "@chakra-ui/react";

export default function VideoPlayer() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(99);
  const [hoveredImageIndex, setHoveredImageIndex] = useState<number | null>(
    null
  );
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null
  );
  const [imageSelected, setImageSelected] = useState(false);

  return (
    <Card sx={useStyleConfig("Card")} >
      {" "}
      <CardHeader>
        {/*if else condition, ? = then, ():() = if else, <> is jsx wrapping*/}
        {currentVideoIndex == 99 ? (
          <>
            <Heading variant="layer3">
              {data.videoplayer_placeholder.subtitle}
            </Heading>
            <Text variant="lessEmphasized" mt="2">
              {data.videoplayer_placeholder.infotext}
            </Text>
          </>
        ) : (
          <>
            <Heading variant="layer3">
              {data.videoplayer_videos[currentVideoIndex].subtitle}
            </Heading>
            <Text variant="lessEmphasized" mt="2">
              {data.videoplayer_videos[currentVideoIndex].infotext}
            </Text>
          </>
        )}
      </CardHeader>


      <CardBody>
        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 2 }}
          gap="1"
          templateColumns="2fr 1fr"
        >
          {/*<Stack direction="row" zIndex={9998}>*/}
          <GridItem>

            <Card bg="transparent" h="100%" id="exponate" p="0">
              {/** VIDEO LEFT */}
              <CardBody>
                {currentVideoIndex == 99 ? (
                  <iframe
                    src={`${data.videoplayer_placeholder.video}?title=0&byline=0&portrait=0`}
                    style={{ width: "100%", height: "100%" }}
                  />
                ) : (
                  <iframe
                    src={`${data.videoplayer_videos[currentVideoIndex].video}?title=0&byline=0&portrait=0`}
                    style={{ width: "100%", height: "100%" }}
                  />
                )}
              </CardBody>
            </Card>
            <Spacer />
          </GridItem>


          {/** THUMBNAILS ON THE RIGHT */}
          <GridItem>
            <Card bg="transparent">
              <CardBody>
                {/*add images*/}
                <Grid templateColumns="repeat(3, 1fr)" gap={1}>
                  {data.videoplayer_videos.map((item, i) => (
                    <GridItem key={i}>
                      <Box
                        transition="transform .3s"
                        transform={
                          hoveredImageIndex !== null && hoveredImageIndex !== i
                            ? "scale(0.95)"
                            : ""
                        }
                        onMouseEnter={() => setHoveredImageIndex(i)}
                        onMouseLeave={() => setHoveredImageIndex(null)}
                        _hover={{
                          filter: "brightness(1)",
                          transform: "scale(1.05)",
                        }}
                        _active={{
                          transform: "scale(0.95)",
                        }}
                        filter={
                          selectedImageIndex !== null && selectedImageIndex == i
                            ? "brightness(0.5)"
                            : ""
                        }
                      >

                        {/* Size of Images here */}
                        <Image
                          src={item.image}
                          alt={`Image ${i + 1}`}
                          boxSize={{
                            base: "30vw",
                            md: "10vw",
                            lg: "10vw",
                          }}
                          maxH={{
                            base: "30vw",
                            md: "20vh",
                            lg: "20vh",
                          }}
                          objectFit="cover"
                          // borderRadius="5"
                          borderRadius="0"
                          onClick={() => {
                            setCurrentVideoIndex(i);
                            setSelectedImageIndex(i);
                          }}
                        />
                      </Box>
                    </GridItem>
                  ))}
                </Grid>
              </CardBody>
            </Card>
          </GridItem>
        </SimpleGrid>
      </CardBody>
    </Card>
  );
}
