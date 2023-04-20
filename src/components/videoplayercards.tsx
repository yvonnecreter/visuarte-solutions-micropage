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
  AspectRatio,
  SimpleGrid,
  Flex,
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
    <Card sx={useStyleConfig("Card")} id="videoplayercards">
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
          gap="10"
          templateColumns="1.5fr 1fr"
        >
          {/*<Stack direction="row" zIndex={9998}>*/}
          <GridItem>
            {/** VIDEO LEFT */}
            {currentVideoIndex == 99 ? (
              <AspectRatio maxW="100%" ratio={16 / 9}>
                <video
                  src={data.videoplayer_placeholder.video}
                  style={{ objectFit: "contain", aspectRatio: "16/9" }}
                  loop
                  autoPlay
                  muted
                />
                {/* <iframe
                  src={`${data.videoplayer_placeholder.video}?title=0&byline=0&portrait=0`}
                  allowFullScreen
                /> */}
              </AspectRatio>
            ) : (
              <AspectRatio maxW="100%" ratio={16 / 9}>
                <iframe
                  src={`${data.videoplayer_videos[currentVideoIndex].video}?title=0&byline=0&portrait=0`}
                  allowFullScreen
                />
              </AspectRatio>
            )}
            <Spacer />
          </GridItem>

          {/** THUMBNAILS ON THE RIGHT */}
          <GridItem height="100%">

            
          <Grid templateColumns="repeat(3, 1fr)" h="2%" gap="1">
            <GridItem bg={data.maincard.colors[0]} h="50%" /* borderRadius={"full"} *//>
            <GridItem bg={data.maincard.colors[1]} h="50%" /* borderRadius={"full"} *//>
            <GridItem bg={data.maincard.colors[2]} h="50%" /* borderRadius={"full"} *//>
          </Grid>

            {/*add images*/}
            <Grid templateColumns="repeat(3, 1fr)" gap={1} height="98%">
              {data.videoplayer_videos.map((item, i) => (
                <GridItem key={i} height="100%">
                  <Box
                    height="100%"
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
                      fit="cover"
                      src={item.image}
                      alt={`Image ${i + 1}`}
                      height="100%"
                      // boxSize={{
                      //   base: "30vw",
                      //   md: "10vw",
                      //   lg: "10vw",
                      // }}
                      // maxH={{
                      //   base: "30vw",
                      //   md: "20vh",
                      //   lg: "20vh",
                      // }}
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
          </GridItem>
        </SimpleGrid>
      </CardBody>
    </Card>
  );
}
