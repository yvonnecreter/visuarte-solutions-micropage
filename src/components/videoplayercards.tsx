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
} from "@chakra-ui/react";
import data from "../components/data.json";

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
    <Stack direction="row" zIndex={9998}>
      <Box w="50vw">
        <Card h="100%" id="exponate">
          <CardHeader>
            {/*if else condition, ? = then, ():() = if else, <> is jsx wrapping*/}
            {currentVideoIndex == 99 ? (
              <>
                <Heading size="l">
                  {data.videoplayer_placeholder.subtitle}
                </Heading>
                <Heading size="l" color="grey">
                  {data.videoplayer_placeholder.infotext}
                </Heading>
              </>
            ) : (
              <>
                <Heading size="l">
                  {data.videoplayer_videos[currentVideoIndex].subtitle}
                </Heading>
                <Heading size="l" color="grey">
                  {data.videoplayer_videos[currentVideoIndex].infotext}
                </Heading>
              </>
            )}
          </CardHeader>

          <CardBody mt={-7}>
            {currentVideoIndex == 99 ? (
              <>
                <iframe
                  src={data.videoplayer_placeholder.video}
                  width="100%"
                  height="100%"
                />
              </>
            ) : (
              <>
                <iframe
                  src={data.videoplayer_videos[currentVideoIndex].video}
                  width="100%"
                  height="100%"
                />
              </>
            )}
          </CardBody>
        </Card>
      </Box>
      <Spacer />

      <Box w="50vw">
        <Card h="100%">
          <CardBody>
            {/*add images*/}
            <Grid templateColumns="repeat(3, 1fr)" gap={1} h="100%">
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
                    <Image
                      src={item.image}
                      alt={`Image ${i + 1}`}
                      boxSize="15vw"
                      objectFit="cover"
                      borderRadius="5"
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
      </Box>
    </Stack>
  );
}
