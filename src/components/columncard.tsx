import * as React from "react";
import { useEffect } from "react";
import {
  chakra,
  useBreakpointValue,
  shouldForwardProp,
  Container,
  Card,
  keyframes,
  CardBody,
  CardHeader,
  Heading,
  Image,
  Grid,
  Text,
  GridItem,
  Box,
  Flex,
  Center,
  Spacer,
  Icon,
  Divider,
} from "@chakra-ui/react";
import data from "../components/data.json";
import { useStyleConfig } from "@chakra-ui/system";
import {
  motion,
  useAnimation,
  isValidMotionProp,
  AnimatePresence,
  AnimateSharedLayout,
} from "framer-motion";
import MotionBox from "./motionbox";
import useStore from "./store";
import { CheckCircleIcon } from "@chakra-ui/icons";

export default function ColumnCard() {
  /* COLOR MANAGEMENT*/
  const desktop = useBreakpointValue({ base: false, md: true });
  const [colors] = useStore((state) => [state.colors]);

  return (
    <Card
      sx={useStyleConfig("Card")}
      id="waswirtun"
      scrollMarginTop={"5vh"}
      zIndex="1"
      backdropFilter={"auto"}
      backdropBlur={"0px"}
    >
      <CardHeader>
        <Heading variant="layer1">{data.maincard.head1}</Heading>
        <Heading variant="layer2">{data.maincard.head1_2}</Heading>
        <Spacer h="2vh" />
        <Heading variant="layer3">{data.maincard.head2}</Heading>
      </CardHeader>

      <CardBody height={"440px"} pb="35px">
        {/* Condition: {true && <div/>}, Condition + Else: {true ? <div/> : <div/>} */}

        {desktop ? (
          <Grid
            templateRows="0.3 1fr 1fr 1fr"
            templateColumns="1.2fr 0.5fr 2.7fr 1fr 1.5fr 1fr 0.5fr 1.5fr"
            gap={5}
            autoFlow="column"
            mt="20px"
          >
            {/*column 1: lifecycle*/}
            <GridItem rowSpan={3} position="relative">
              <Flex alignItems="center" justifyContent="center">
                <Text variant="stronglyEmphasized" position="absolute">
                  {data.maincard.head3[0]}
                </Text>
              </Flex>
              <Flex
                alignItems="center"
                h="100%"
                justifyContent="center"
                flexFlow={"column"}
              >
                <Image
                  src={data.maincard.table.element5}
                  alt={data.maincard.table.element5}
                  filter={"blur(2px)"}
                  opacity="100%"
                  w="100%"
                  transition="transform 2s"
                  _hover={{
                    transform: "scale(1.1)",
                  }}
                />
              </Flex>
            </GridItem>

            <GridItem rowSpan={3} width="100%">
              <Flex alignItems="center" justifyContent="center" h="100%">
                <Image
                  src={data.maincard.arrowsplit}
                  alt={data.maincard.arrowsplit}
                  filter={"invert(1)"}
                  height="73%"
                  opacity="20%"
                />
              </Flex>
            </GridItem>

            {/*column 3: categories*/}
            {data.maincard.table.element2.map((item, i) => (
              <React.Fragment key={i}>
                <GridItem width="100%" textAlign="center">
                  <Flex alignItems="center" justifyContent="center" h="100%">
                    <Box
                      borderRadius={"full"}
                      background={colors[i]}
                      h="15px"
                      w="15px"
                      mr="20px"
                      _hover={{
                        transform: "scale(1.1)",
                      }}
                      as="a"
                      transition="transform 1s"
                      href="#impressionen"
                    />
                    <Flex
                      alignItems="center"
                      justifyContent="center"
                      as="a"
                      href="#impressionen"
                      px="5"
                      /* borderWidth={3} */ borderWidth={2}
                      borderRadius="12"
                      borderColor={colors[i]}
                      transition="transform 1s"
                      _hover={{
                        transform: "scale(1.1)",
                      }}
                      h="50%"
                      boxShadow="2xl"
                      /* background={window.colors[i]} */
                      opacity="90%"
                    >
                      <Text
                        variant="regular"
                        textTransform={"uppercase"}
                        letterSpacing={"wider"}
                        /* color="#212121" */
                        color={colors[i]}
                        fontWeight={"bold"}
                      >
                        {item}
                      </Text>
                    </Flex>
                  </Flex>
                </GridItem>
              </React.Fragment>
            ))}

            {/*column 4: arrows*/}
            {Array.from({ length: 3 }, (v, i) => (
              <GridItem key={i}>
                <Flex alignItems="center" justifyContent="center" h="100%">
                  <Image
                    src="images/arrow.svg"
                    alt="->"
                    w="100%"
                    opacity="20%"
                    filter={"invert(1)"}
                  />
                </Flex>
              </GridItem>
            ))}

            {/*column 5: 3 text*/}
            {data.maincard.table.element3.map((item, i) => (
              <React.Fragment key={i}>
                <GridItem width="100%" textAlign="center">
                  <Flex alignItems="center" justifyContent="center" h="100%">
                    <Box
                      as="a"
                      href="#impressionen"
                      p="3"
                      borderRadius="12"
                      transition="transform 1s"
                      _hover={{
                        transform: "scale(1.01)",
                      }}
                    >
                      <Text
                        variant="regular"
                        color={colors[i]}
                        transition="transform 1s"
                        _hover={{
                          transform: "scale(1.1)",
                        }}
                      >
                        {item}
                      </Text>
                    </Box>
                  </Flex>
                </GridItem>
              </React.Fragment>
            ))}

            {/*column 6: 3 icons*/}
            {data.maincard.table.element4.map((item, i) => (
              <React.Fragment key={i}>
                <Flex
                  alignItems="center"
                  justifyContent="center"
                  h="100%"
                  as="a"
                  href="#impressionen"
                >
                  <Box
                    h="55%"
                    opacity={"90%"}
                    transition="transform 1s"
                    _hover={{
                      transform: "scale(1.1)",
                    }}
                    dropShadow="2xl"
                  >
                  <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 14 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.48109 5.3184V3.76287C6.48102 3.69467 6.46302 3.6277 6.42889 3.56865C6.39476 3.50961 6.34571 3.46058 6.28665 3.42649L4.92556 2.64872C4.86644 2.61459 4.79938 2.59662 4.73112 2.59662C4.66285 2.59662 4.59579 2.61459 4.53667 2.64872L3.17558 3.42649C3.11652 3.46058 3.06747 3.50961 3.03334 3.56865C2.99921 3.6277 2.98121 3.69467 2.98114 3.76287V5.3184C2.98121 5.3866 2.99921 5.45358 3.03334 5.51262C3.06747 5.57166 3.11652 5.62069 3.17558 5.65479L4.53667 6.43255C4.59579 6.46668 4.66285 6.48465 4.73112 6.48465C4.79938 6.48465 4.86644 6.46668 4.92556 6.43255L6.28665 5.65479C6.34571 5.62069 6.39476 5.57166 6.42889 5.51262C6.46302 5.45358 6.48102 5.3866 6.48109 5.3184Z"
                      stroke={colors[i]}
                      stroke-width="0.236943"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M3.03364 3.56067L4.73112 4.5426L6.42859 3.56067"
                      stroke={colors[i]}
                      stroke-width="0.236943"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M4.73111 6.50062V4.54065"
                      stroke={colors[i]}
                      stroke-width="0.236943"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <circle
                      cx="4.59125"
                      cy="4.60927"
                      r="4.23036"
                      stroke={colors[i]}
                      stroke-width="0.394904"
                    />
                    <path
                      d="M13.8456 0.986511C13.8456 0.877461 13.7572 0.789059 13.6481 0.789059H11.8711C11.762 0.789059 11.6736 0.877461 11.6736 0.986511C11.6736 1.09556 11.762 1.18396 11.8711 1.18396H13.4507V2.76358C13.4507 2.87263 13.5391 2.96103 13.6481 2.96103C13.7572 2.96103 13.8456 2.87263 13.8456 2.76358V0.986511ZM8.75615 6.15773L13.7878 1.12613L13.5085 0.846891L8.47692 5.87849L8.75615 6.15773Z"
                      fill={colors[i]}
                    />
                  </svg>
                  </Box>
                </Flex>
              </React.Fragment>
            ))}

            {/*column 7: arrow*/}

            <GridItem rowSpan={3} width="100%">
              <Flex alignItems="center" justifyContent="center" h="100%">
                <Image
                  src={data.maincard.arrowsplitright}
                  alt={data.maincard.arrowsplitright}
                  height="73%"
                  opacity="20%"
                  filter={"invert(1)"}
                  zIndex="3"
                />
              </Flex>
            </GridItem>

            {/*column 8: image*/}
            <GridItem rowSpan={3} w="100%" style={{ position: "relative" }}>
              <Box
                overflow={"visible"}
                h="145%"
                w="145%"
                filter={"blur(50px)"}
                opacity="60%"
                zIndex="0"
                style={{
                  backgroundImage: `url("images/blur.svg")`,
                  backgroundSize: "100% auto",
                  backgroundRepeat: "no-repeat",
                  position: "absolute",
                  top: "18.5%",
                  right: "-25%",
                }}
              />
              <Flex justifyContent="center" alignContent="center">
                <Text variant="stronglyEmphasized" position="absolute">
                  {data.maincard.head3[1]}
                </Text>
              </Flex>

              <Flex
                alignItems="center"
                justifyContent="center"
                flexFlow="column"
                h="100%"
                w="100%"
              >
                <Box
                  position="relative"
                  w="100%"
                  transition="transform 1s"
                  _hover={{
                    transform: "scale(1.1)",
                  }} 
                  backgroundColor="brand.white"
                  dropShadow="2xl"
                >
                  <MotionBox />
                  <svg
                    id="Layer_2"
                    data-name="Layer 2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1021.46 1021.46"
                  >
                  {
                    /* <Image
                    src={data.maincard.table.element5}
                    alt={data.maincard.table.element5}
                    w="100%"
                    h="100%"
                    zIndex={"5"}
                    borderRadius={5}
                    dropShadow="2xl"
                    filter="brightness(0.9)"
                    /> */
                  }
                    <g id="Layer_2-2" data-name="Layer 2">
                      <g>
                        <g id="Layer_2-2" data-name="Layer 2-2">
                          <g>
                            <path
                              d="m972.89,715.74l-343.39-11.03c.04,4.83.07,8.84.1,11.81.02,3.14-2.6,5.65-5.74,5.49l-68.18-3.39c-2.24-.11-4-1.95-4.02-4.19l-.09-12.22-109.09,41.5-95.34-5.94c-.03,1.12-.8,2.07-1.88,2.36l-17.44,4.59s-.03.01-.04.01l-.38.1-.43-.04-37.79-3.12c-1.36-.11-2.38-1.28-2.31-2.65l.27-4.98-49.78-3.1L0,785.53v235.93h1021.46v-292.6l-48.57-13.12Zm-187.5-2.84c68.48,2.23,123.65,14.29,123.24,26.94-.32,9.66-32.93,16.86-78.81,18.74v90.63c-.41,5.06-10.9,12.25-25.98,13.28-6.77.47-14.47,1.84-22.6,1.18-13.2-1.08-25.03-1.49-33.44-4.62-8.3-3.1-12.27-7.76-11.97-11.4v-.12c-.02-.21-.02-.39,0-.61l-.05-91.55c-44.43-4.93-75.42-14.09-75.11-23.58.41-12.65,56.25-21.11,124.72-18.89Z"
                              fill="#5b5b5b"
                            />
                            <g>
                              <path
                                d="m952.18,418.42l-395.75,25.9-106.01-68.38-192.35,19.34-180.37-68.8c-27.89-10.65-57.32-3.87-77.7,13.91v445.14l237.36-54.59,49.78,3.1,4.52-83.64.41-7.59.11-2.09,2.02-.27s.03-.01.05-.01l7.62-1.01h.05l9.43-1.27s.06,0,.09,0l.16-.02.25.02,27.15,1.82.36.03,8.4.56,2.43.16-.07,2.3v.13l-.28,8.62c0,.13-.01.25-.01.38l-2.69,85.62,95.34,5.94,109.09-41.5h0s-1.15-155.47-1.15-155.47v-.03l-.03-4.15s1.54-.06,4.19-.15c12.54-.46,50.38-1.22,65.94-1.53,3.75-.07,6.84,2.91,6.9,6.67l2.08,157.16,343.39,11.03,48.57,13.12v-343.18l-69.28,32.74Zm-727.73,51.08v.09l-5.53,105.61-.56,10.7-10.32-.31c-.13,0-.26-.01-.39-.01l-172.48-5.2h-.05l-11.52-.35.99-11.53,12.08-141.45,1.09-12.78,12.43,3.07s.02,0,.03,0l165.92,41.03,8.78,2.17-.47,8.95Zm141.37,125.75l-13.38,26.89c-1.22,2.44-3.72,3.96-6.44,3.91l-58.75-1.05c-2.14-.04-3.5-2.31-2.51-4.22l13.49-25.91c1.21-2.33,3.62-3.79,6.25-3.79h58.75c2.14,0,3.54,2.25,2.59,4.17Zm551.56,7.57h-142.17c-7.24,0-13.18-5.72-13.47-12.95l-2.92-73.6c-.3-7.48,5.55-13.76,13.02-14.01l139.85-4.67c7.27-.25,13.42,5.32,13.9,12.57l5.25,78.27c.52,7.79-5.65,14.39-13.46,14.39Zm-113.51,256.88c-6.78.98-14.49,1.31-22.63.65-13.48-1.1-25.26-2.69-33.44-4.97-7.26-2.02-11.68-4.59-11.97-7.85v.12c-.3,3.64,3.67,8.3,11.97,11.4,8.41,3.13,20.24,3.54,33.44,4.62,8.13.66,15.83-.71,22.6-1.18,15.08-1.03,25.57-8.22,25.98-13.28v-2.2c-.41,5.06-10.89,10.5-25.95,12.69Z"
                                fill="#5b5b5b"
                              />
                              <path
                                d="m77.7,326.48c-27.89-10.65-57.32-3.87-77.7,13.91v445.14l237.36-54.59,20.71-335.66-180.37-68.8Zm146.75,143.11l-5.53,105.61c-.3,5.82-5.1,10.36-10.88,10.39-.13,0-.26-.01-.39-.01l-172.48-5.2h-.05c-6.26-.22-11.07-5.64-10.53-11.88l12.08-141.45c.57-6.7,6.99-11.31,13.52-9.71.01,0,.02,0,.03,0l165.92,41.03c5.07,1.25,8.54,5.91,8.31,11.12v.09Z"
                                fill="#727272"
                              />
                              <path
                                d="m258.07,395.28l-20.71,335.66,49.78,3.1,4.52-83.64c.37-5.61,4.63-10.21,10.21-10.97h.05l9.43-1.27s.06,0,.09,0l.16-.02.25.02,27.15,1.82.36.03c5.96.7,10.48,5.75,10.48,11.77,0,.13-.01.25-.01.38l-2.69,85.62,95.34,5.94.03-1.43.02-1.05.05-2.35.03-1.05v-.71l.04-1.31.03-1.43.03-1.53.04-1.65.14-6.55.02-1.03.02-1.06.05-2.19.05-2.29.05-2.37.05-2.47.03-1.26.03-1.29.05-2.63.06-2.72.06-2.8.06-2.87.07-2.95.03-1.51.03-1.52.07-3.1.07-3.17.1-4.88.11-5.02.11-5.17.11-5.3.12-5.42.24-11.18.17-7.69.17-7.86.17-8.01.09-4.05.63-29.14.09-4.25.19-8.53.09-4.29.28-12.89.09-4.3.19-8.6.09-4.3.28-12.84.27-12.73.45-20.81.18-8.13.09-4.01c.05-2.67.11-5.31.17-7.92l.15-7.04.42-19.32c.05-2.39.1-4.74.15-7.05v-.02c.05-2.32.1-4.59.15-6.83l.14-6.58.07-3.19.06-2.82.07-3.35.06-2.78.04-1.66.21-9.8.05-2.45.11-4.89c.01-.79.03-1.56.05-2.31l.09-4.35.04-1.8.11-5.05.03-1.49.02-.8.03-1.42.06-2.79.03-1.05.06-2.98.02-1.01.03-1.33-192.35,19.34Zm107.75,199.97l-13.38,26.89c-1.22,2.44-3.72,3.96-6.44,3.91l-58.75-1.05c-2.14-.04-3.5-2.31-2.51-4.22l13.49-25.91c1.21-2.33,3.62-3.79,6.25-3.79h58.75c2.14,0,3.54,2.25,2.59,4.17Z"
                                fill="#7c7c7c"
                              />
                              <path
                                d="m556.43,444.32l-1.85,98.09c-2.32.08-4.15,1.98-4.16,4.3v.03l1.15,155.46h0l-109.09,41.51.03-1.43.02-1.05.05-2.35.03-1.05v-.71l.04-1.31.03-1.43.03-1.53.04-1.65h0l.14-6.55.02-1.03.02-1.06.05-2.19.05-2.29.05-2.37.05-2.47.03-1.26.03-1.29.05-2.63.06-2.72.06-2.8.06-2.87.07-2.95.03-1.51.03-1.52.07-3.1.07-3.17.1-4.88.11-5.02.11-5.17.11-5.3.12-5.42.24-11.18.17-7.69.17-7.86.17-8.01.09-4.05.63-29.14.09-4.25.19-8.53.09-4.29.28-12.89.09-4.3.19-8.6.09-4.3.28-12.84.27-12.73.45-20.81.18-8.13.09-4.01.17-7.92.15-7.04.42-19.32c.05-2.39.1-4.74.15-7.05v-.02c.05-2.32.1-4.59.15-6.83l.14-6.58.07-3.19.06-2.82.07-3.35.06-2.78.04-1.66.21-9.8.05-2.45.11-4.89.05-2.31.09-4.35.04-1.8.11-5.05.03-1.49.02-.8.03-1.42.06-2.79.03-1.05.06-2.98.02-1.01.03-1.33,106.01,68.38h0Z"
                                fill="#727272"
                              />
                              <path
                                d="m952.18,418.42l-395.75,25.9-1.85,98.09c12.54-.46,50.38-1.22,65.94-1.53,3.75-.07,6.84,2.91,6.9,6.67l2.08,157.16,343.39,11.03-20.71-297.32Zm-34.8,184.4h-142.17c-7.24,0-13.18-5.72-13.47-12.95l-2.92-73.6c-.3-7.48,5.55-13.76,13.02-14.01l139.85-4.67c7.27-.25,13.42,5.32,13.9,12.57l5.25,78.27c.52,7.79-5.65,14.39-13.46,14.39Z"
                                fill="#6d6d6d"
                              />
                              <polygon
                                points="1021.46 385.68 1021.46 728.86 972.89 715.74 952.18 418.42 1021.46 385.68"
                                fill="#7c7c7c"
                              />
                              <path
                                d="m804.95,759.07l-1.08,100.63-.03,2.79c-6.77.47-14.47,1.84-22.6,1.18-13.2-1.08-25.03-1.49-33.44-4.62v-102.49c11.41,1.02,23.54,1.76,36.11,2.16,7.17.24,14.2.35,21.04.35Z"
                                fill="#898989"
                              />
                              <path
                                d="m829.82,758.58v90.63c-.41,5.06-10.9,12.25-25.98,13.28l.03-2.79,1.08-100.63c8.62.01,16.94-.16,24.87-.49Z"
                                fill="#727272"
                              />
                              <path
                                d="m747.8,756.56v102.49c-8.3-3.1-12.27-7.76-11.97-11.4v-.73l-.05-91.55c3.91.43,7.92.83,12.02,1.19Z"
                                fill="#7c7c7c"
                              />
                              <path
                                d="m350.12,643.02v.13l-2.98,94.62c-.03,1.12-.8,2.07-1.88,2.36l-17.44,4.59s-.03.01-.04.01c-.27.06-.53.09-.81.06l-37.79-3.12c-1.36-.11-2.38-1.28-2.31-2.65l.27-4.98,4.52-83.64.41-7.59c.06-1.19.95-2.18,2.13-2.36.02-.01.03-.01.05-.01l7.62-1.01h.05l9.43-1.27s.06,0,.09,0c.14-.01.28-.01.41,0l27.15,1.82.36.03,8.4.56c1.31.09,2.33,1.17,2.36,2.46Z"
                                fill="#898989"
                              />
                            </g>
                          </g>
                        </g>
                        <path
                          d="m0,0v340.39c20.38-17.78,49.81-24.56,77.7-13.91l180.37,68.8,192.35-19.34,106.01,68.38,395.75-25.9,69.28-32.74V0H0Zm442.6,348.32c-.25,9.99-7.89,18.24-17.84,19.23l-162.54,15.99c-3.48.35-6.99-.12-10.26-1.36l-121.25-44.91c-3.39-1.29-5.52-4.67-5.24-8.29l6.66-100.35c.78-9.79,8.04-17.84,17.7-19.62l278.79-51.42c9.66-1.78,18.51,5.77,18.27,15.59l-4.29,175.14Zm121.86,75.54c-.22,6.52-7.48,10.29-12.94,6.72l-85.32-57.55c-7.25-4.74-11.54-12.9-11.33-21.57l4.16-170.88c.23-9.44,12.17-13.39,17.99-5.96l84.46,107.94c3.53,4.51,5.45,10.07,5.45,15.8l-2.47,125.5Z"
                          fill="#5b5b5b"
                        />
                      </g>
                    </g>
                  </svg>
                </Box>
              </Flex>
            </GridItem>
          </Grid>
        ) : (
          /* MOBILE */
          <Center flexDirection="column">
            <Center justifyContent="center" align-content="center">
              <Text variant="stronglyEmphasized" w="70%">
                {data.maincard.head3[0]}
              </Text>
              <Divider opacity="0" h="20px" />
              <Image
                src={data.maincard.table.element1}
                alt={data.maincard.table.element1}
                opacity="100%"
                w="30%"
                transition="transform 2s"
                _hover={{
                  transform: "scale(1.1)",
                }}
              />
            </Center>
            <Divider opacity="0" h="20px" />

            {data.maincard.table.element4.map((item, i) => (
              <React.Fragment key={i}>
                <Flex
                  alignItems="center"
                  justifyContent="center"
                  h="100%"
                  as="a"
                  href="#impressionen"
                >
                  <Image
                    src={data.maincard.table.element4[i]}
                    alt=" "
                    /* w="75%" */
                    /* maxH={"5vh"} */
                    h="55%"
                    opacity={"90%"}
                    transition="transform 1s"
                    _hover={{
                      transform: "scale(1.1)",
                    }}
                    dropShadow="2xl"
                  />
                </Flex>
              </React.Fragment>
            ))}

            <Grid
              templateColumns="7fr 1fr"
              templateRows="1fr 1fr 1fr"
              gap={1}
              autoFlow="row"
            >
              {data.maincard.table.element2.map((item, i) => (
                <React.Fragment key={i}>
                  <GridItem width="100%" textAlign="center" my="1">
                    <Flex alignItems="center" justifyContent="center" h="100%">
                      <Flex
                        alignItems="center"
                        justifyContent="center"
                        as="a"
                        href="#impressionen"
                        m="2"
                        h="100%"
                        w="100%"
                        borderRadius="3"
                        borderColor={colors[i]}
                        transition="transform 1s"
                        _hover={{
                          transform: "scale(1.1)",
                        }}
                        boxShadow="2xl"
                        background={colors[i]}
                        opacity="90%"
                      >
                        <Text
                          variant="regular"
                          textTransform={"uppercase"}
                          letterSpacing={"wider"}
                          color="#212121"
                        >
                          {item}
                        </Text>
                      </Flex>
                    </Flex>
                  </GridItem>
                  <GridItem>
                    <Image
                      src={data.maincard.table.element4[i]}
                      alt=" "
                      opacity="90%"
                      h="100%"
                      transition="transform 1s"
                      _hover={{
                        transform: "scale(1.1)",
                      }}
                      dropShadow="2xl"
                    />
                  </GridItem>
                </React.Fragment>
              ))}
            </Grid>
            <Divider opacity="0" h="20px" />
            <Center justifyContent="center" align-content="center">
              <Text variant="stronglyEmphasized">{data.maincard.head3[1]}</Text>
              <Flex alignItems="center" justifyContent="center" w="50%">
                <Box
                  position="relative"
                  transition="transform 1s"
                  w="100%"
                  _hover={{
                    transform: "scale(1.1)",
                  }}
                >
                  <Divider opacity="0" h="20px" />
                  <Image
                    src={data.maincard.table.element5}
                    alt={data.maincard.table.element5}
                    w="100%"
                    /* borderRadius={5} */
                    dropShadow="2xl"
                    /* filter="brightness(1.6)" */
                    filter="brightness(1.835)"
                  />
                  <MotionBox />
                </Box>
              </Flex>
            </Center>
          </Center>
        )}
      </CardBody>
    </Card>
  );
}
