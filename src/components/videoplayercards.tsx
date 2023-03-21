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

const videos = [
  "https://player.vimeo.com/video/296462573",
  "https://player.vimeo.com/video/787902161",
  "https://player.vimeo.com/video/768721892",
  "https://player.vimeo.com/video/987654321",
  "https://player.vimeo.com/video/987654321",
  "https://player.vimeo.com/video/165005613",
  "https://player.vimeo.com/video/586284805",
];

const subtitles = [
  "Projektbeschreibung 1",
  "Projektbeschreibung 2",
  "Projektbeschreibung 3",
  "Projektbeschreibung 4",
  "Projektbeschreibung 5",
  "Projektbeschreibung 6",
];

export default function VideoPlayer() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(6);
  const [hoveredImageIndex, setHoveredImageIndex] = useState<number | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  return (
    <Stack direction="row" zIndex={9998}>
      <Box w="50vw">
        <Card h="100%" id="exponate">
          <CardHeader>
            <Heading>{subtitles[currentVideoIndex]}</Heading>
            <Heading size="l" color="grey">
              {subtitles[currentVideoIndex]}
            </Heading>
          </CardHeader>
          <CardBody mt={-7}>
            <iframe
              src={videos[currentVideoIndex]}
              width="100%"
              height="100%"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen={true}
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
                      src={imagePath}
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
