import * as React from "react";
import { useEffect } from "react";
import {
  chakra,
  useBreakpointValue,
  shouldForwardProp,
  Container,
  Card,
  useMediaQuery,
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
  SimpleGrid,
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

export default function ColumnCard() {
  /* COLOR MANAGEMENT*/
  const [colors] = useStore((state) => [state.colors]);
  const desktop = useBreakpointValue({ base: false, lg: true });
  const base = useBreakpointValue({ base: true, sm: false });
  /* const desktop = false; */
  const [showText1, setShowText1] = React.useState(false);
  const [showText2, setShowText2] = React.useState(false);

  const adjustCol = (color: string) => {
    let amount = 50;
    return (
      "#" +
      color
        .replace(/^#/, "")
        .replace(/../g, (color) =>
          (
            "0" +
            Math.min(255, Math.max(0, parseInt(color, 16) - amount)).toString(
              16
            )
          ).substr(-2)
        )
    );
  };

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
            templateColumns="1.2fr 0.4fr 2fr 0.7fr 1.2fr 0.7fr 0.4fr 1.9fr"
            gap={5}
            autoFlow="column"
            mt="20px"
          >
            {/*column 1: lifecycle*/}
            <GridItem rowSpan={3} position="relative">
              <Flex
                alignItems="center"
                justifyContent="center"
                position="absolute"
                h="100%"
                w="100%"
              >
                <Text
                  opacity={showText1 ? 1 : 0}
                  onMouseEnter={() => setShowText1(!showText1)}
                  onMouseLeave={() => setShowText1(!showText1)}
                  transition="opacity 0.4s ease-in-out"
                  variant="stronglyEmphasized"
                  position="absolute"
                  transform="opacity 2s"
                  zIndex="2"
                  style={{ pointerEvents: "none" }}
                >
                  {data.maincard.head3[0]}
                </Text>
              </Flex>
              <Flex
                alignItems="center"
                h="100%"
                justifyContent="center"
                flexFlow={"column"}
                transition="transform 1s ease-in-out, filter 0.5s ease-in-out"
                _hover={{
                  transform: "scale(1.1)",
                }}
                onMouseEnter={() => setShowText1(true)}
                onMouseLeave={() => setShowText1(false)}
                filter="auto"
                brightness={showText1 ? 0.8 : 1}
              >
                <Image
                  src={data.maincard.table.element1}
                  alt={data.maincard.table.element1}
                  filter={"blur(2px)"}
                  opacity="100%"
                  w="100%"
                  borderRadius={"3px"}
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
                      w="15px"
                      mr="20px"
                      _hover={{
                        transform: "scale(1.14)",
                      }}
                      as="a"
                      transition="transform 0.5s ease-in-out"
                      href="#impressionen"
                    >
                      <svg
                        viewBox="0 0 100 100"
                        xmlns="http://www.w3.org/2000/svg"
                        fill={colors[i]}
                      >
                        <circle cx="50" cy="50" r="50" />
                      </svg>
                    </Box>
                    <Flex
                      alignItems="center"
                      justifyContent="center"
                      as="a"
                      href="#impressionen"
                      px="5"
                      borderWidth={2}
                      borderRadius="12"
                      borderColor={colors[i]}
                      transition="transform 0.5s ease-in-out"
                      _hover={{
                        transform: "scale(1.1)",
                      }}
                      minH="50%"
                      boxShadow="2xl"
                      opacity="90%"
                    >
                      <Text
                        variant="regular"
                        textTransform={"uppercase"}
                        wordBreak={"break-word"}
                        letterSpacing={"wider"}
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
                      transition="transform 1s ease-in-out"
                      _hover={{
                        transform: "scale(1.01)",
                      }}
                    >
                      <Text
                        variant="regular"
                        color={colors[i]}
                        transition="transform 1s ease-in-out"
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
                  width="100%"
                  as="a"
                  href="#impressionen"
                >
                  <Box
                    /* h="55%"
                    width="100%" */
                    opacity={"90%"}
                    transition="transform 1s ease-in-out"
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

              <Flex
                alignItems="center"
                justifyContent="center"
                flexFlow="column"
                h="100%"
                w="100%"
              >
                <Box
                  style={{
                    position: "relative",
                    width: "100%",
                  }}
                  transition="transform 1s ease-in-out"
                  _hover={{
                    transform: "scale(1.1)",
                  }}
                  onMouseEnter={() => setShowText2(!showText2)}
                  onMouseLeave={() => setShowText2(!showText2)}
                >
                  <Box
                    position="absolute"
                    w="100%"
                    top="-30"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Text
                      variant="stronglyEmphasized"
                      zIndex={5}
                      opacity={showText2 ? 1 : 0}
                      transition="opacity 0.4s ease-in-out"
                      style={{ pointerEvents: "none" }}
                    >
                      {data.maincard.head3[1]}
                    </Text>
                  </Box>

                  <Box
                    position="relative"
                    width="100%"
                    border="3px solid #484948"
                    borderRadius="10px"
                    overflow="hidden"
                    boxSizing="border-box"
                  >
                    <MotionBox />

                    <svg
                      id="Layer_2"
                      data-name="Layer 2"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 1021.5 1021.4"
                    >
                      <g id="Layer_2-2" data-name="Layer 2">
                        <g>
                          <path
                            d="m16.53,329.37c-5.95,2.95-11.51,6.66-16.53,11.03,5.02-4.38,10.58-8.08,16.53-11.02h0Z"
                            fill="none"
                          />
                          <polygon
                            points="16.53 781.7 0 785.5 16.53 781.71 16.53 781.7"
                            fill="none"
                          />
                          {/* screens oben */}
                          <path
                            d="m566.93,298.36l-2.47,125.5c-.22,6.52-7.48,10.29-12.94,6.72l-85.32-57.55c-7.25-4.74-11.54-12.9-11.33-21.57l4.16-170.88c.23-9.44,12.17-13.39,17.99-5.96l84.46,107.94c3.53,4.51,5.45,10.07,5.45,15.8Z"
                            fill={adjustCol(colors[0])}
                            opacity={"50%"}
                          />
                          <path
                            d="m446.89,173.18l-4.29,175.14c-.25,9.99-7.89,18.24-17.84,19.23l-162.54,15.99c-3.48.35-6.99-.12-10.26-1.36l-121.25-44.91c-3.39-1.29-5.52-4.67-5.24-8.29l6.66-100.35c.78-9.79,8.04-17.84,17.7-19.62l278.79-51.42c9.66-1.78,18.51,5.77,18.27,15.59Z"
                            fill={adjustCol(colors[0])}
                            opacity={"50%"}
                          />
                          {/* table */}
                          <path
                            d="m908.63,739.84c-.32,9.66-32.93,16.86-78.81,18.74-7.93.33-16.25.5-24.87.49-6.84,0-13.87-.11-21.04-.35-12.57-.4-24.7-1.14-36.11-2.16-4.1-.36-8.11-.76-12.02-1.19-44.43-4.93-75.42-14.09-75.11-23.58.41-12.65,56.25-21.11,124.72-18.89,68.48,2.23,123.65,14.29,123.24,26.94Z"
                            fill={adjustCol(colors[2])}
                            opacity={"50%"}
                          />
                          {/* screen links */}
                          <path
                            d="m224.45,469.5v.09l-5.53,105.61c-.3,5.82-5.1,10.36-10.88,10.39-.13,0-.26-.01-.39-.01l-172.48-5.2h-.05c-6.26-.22-11.07-5.64-10.53-11.88l12.08-141.45c.57-6.7,6.99-11.31,13.52-9.71,0,0,.02,0,.03,0l165.92,41.03c5.07,1.25,8.54,5.91,8.31,11.12Z"
                            fill={adjustCol(colors[1])}
                            opacity={"50%"}
                          />
                          {/* touchscreen */}
                          <path
                            d="m365.82,595.25l-13.38,26.89c-1.22,2.44-3.72,3.96-6.44,3.91l-58.75-1.05c-2.14-.04-3.5-2.31-2.51-4.22l13.49-25.91c1.21-2.33,3.62-3.79,6.25-3.79h58.75c2.14,0,3.54,2.25,2.59,4.17Z"
                            fill={adjustCol(colors[1])}
                            opacity={"50%"}
                          />
                          {/* screen rechts */}
                          <path
                            d="m917.38,602.82h-142.17c-7.24,0-13.18-5.72-13.47-12.95l-2.92-73.6c-.3-7.48,5.55-13.76,13.02-14.01l139.85-4.67c7.27-.25,13.42,5.32,13.9,12.57l5.25,78.27c.52,7.79-5.65,14.39-13.46,14.39Z"
                            fill={adjustCol(colors[2])}
                            opacity={"50%"}
                          />
                          {/* schiebescreen */}
                          <path
                            d="m629.6,716.52c.02,3.14-2.6,5.65-5.74,5.49l-68.18-3.39c-2.24-.11-4-1.95-4.02-4.19l-.09-12.22h0s-1.15-155.47-1.15-155.47v-.03c.01-2.32,1.84-4.22,4.16-4.3,12.54-.46,50.38-1.22,65.94-1.53,3.75-.07,6.84,2.91,6.9,6.67l2.08,157.16c.04,4.83.07,8.84.1,11.81Z"
                            fill={adjustCol(colors[2])}
                            opacity={"50%"}
                          />

                          <path
                            d="m747.9,859v-3.7s-.07-.02-.1-.03v3.69s.07.03.1.04Z"
                            fill="#5b5b5b"
                          />
                          <path
                            d="m972.9,715.7l-20.69-297.2,20.69,297.23v.07s-343.39-11-343.39-11c0,4.75.1,8.72.1,11.7s-2.6,5.6-5.7,5.5l-68.2-3.4c-2.2-.1-4-2-4-4.2l-.1-12.2-109.1,41.5h0s-.09,0-.09,0l-95.21-5.89,2.7-85.6v-.4c0-.33-.02-.65-.05-.97l-2.18,68.71-.58,18.26h.1c0,1.1-.8,2.1-1.9,2.4l-17.4,4.6-.4.1h-.4l-37.8-3.1c-.71-.05-1.31-.38-1.72-.87-.46-.48-.73-1.14-.68-1.83l.29-4.91-49.69-3.09-220.97,50.61-16.53,3.79v235.9h1021.5v-292.5l-35.52-9.65-13.08-3.55Zm-143.1,42.8v89.07s0,0,0,0v1.63c-.15,1.91-1.72,4.11-4.42,6.16-.01,0-.02.02-.03.02-.2.15-.4.3-.62.45-4.55,3.21-11.88,5.99-20.83,6.66h0c-6.8.51-14.5,1.81-22.6,1.21-13.2-1.1-25-1.5-33.4-4.6v-.07s-.07-.02-.1-.03c-1.38-.52-2.63-1.08-3.78-1.67-.57-.3-1.13-.6-1.64-.91-1.54-.93-2.81-1.92-3.81-2.93-2-2.01-2.93-4.09-2.78-5.89v-92.2c-44.4-4.9-75.4-14.1-75.1-23.6.4-12.7,56.2-21.1,124.7-18.9s123.6,14.3,123.2,26.9c-.3,9.7-32.9,16.9-78.8,18.7Z"
                            fill="#5b5b5b"
                          />
                          <path
                            d="m224.5,469.6s0-.06,0-.09l-5.5,105.69,5.5-105.6Z"
                            fill="#5b5b5b"
                          />
                          <path
                            d="m629.4,704.7h.1s-2.1-157.1-2.1-157.1c-.05-1.92-.84-3.63-2.1-4.85,1.2,1.21,1.96,2.88,2,4.75l2.1,157.2Z"
                            fill="#5b5b5b"
                          />
                          <polygon
                            points="447.4 500.4 447.4 500.41 447.4 500.4 447.6 492.3 447.7 488.5 447.6 492.3 447.4 500.4"
                            fill="#5b5b5b"
                          />
                          <polygon
                            points="442.5 733 442.5 734.5 442.5 735.9 442.5 737.2 442.5 737.9 442.5 738.9 442.5 741.2 442.5 742.3 442.5 743.66 442.5 743.66 442.5 742.3 442.5 741.3 442.5 739 442.5 738 442.5 737.3 442.5 736 442.5 734.6 442.5 733.1 442.5 731.4 442.6 725.1 442.5 731.4 442.5 733"
                            fill="#5b5b5b"
                          />
                          <path
                            d="m447.9,480.4c-.1,2.6-.2,5.2-.2,7.9l.2-7.9Z"
                            fill="#5b5b5b"
                          />
                          <path
                            d="m237.4,730.9l20.69-335.6-180.39-68.8c-21.04-7.99-42.93-6.14-61.17,2.88-5.95,2.94-11.51,6.64-16.53,11.02v445.1l16.53-3.8,220.87-50.8ZM24.7,568.5l12-141.5c.6-6.7,7-11.3,13.5-9.7l165.9,41c5.07,1.29,8.56,5.95,8.4,11.21,0,.03,0,.06,0,.09l-5.5,105.6c-.3,5.8-5.1,10.4-10.9,10.4h-.4l-172.5-5.2c-6.3-.2-11.1-5.6-10.5-11.9Z"
                            fill="#727272"
                          />
                          <path
                            d="m442.5,742.3v-10.9l.1-6.3v-.2s0-1,0-1h0v-1.1h0v-2.2h0v-12.4l.1-2.7.1-2.8.1-2.9.1-3v-3l.1-3.1.1-3.2.1-4.9.1-5,.1-5.2.1-5.3.1-5.4.2-11.2.2-7.7.2-7.9.2-8,.1-4,.6-29.1.1-4.2.2-8.5.1-4.3.3-12.9.1-4.3.2-8.6.1-4.3.3-12.8.3-12.7.5-20.79h0s.2-8.11.2-8.11l.1-3.8v-.2s0,0,0,0c0-2.7.1-5.3.2-7.9h0s.1-7,.1-7l.4-19.3c0-2.4.1-4.7.1-7s.1-4.6.1-6.8l.1-6.6.1-3.2.1-2.8.1-3.4.1-2.8v-1.7l.2-9.8v-2.5l.1-4.9v-2.3l.1-4.4v-1.8l.1-5v-3.7l.1-2.8v-1l.1-3v-2.07l-191.7,18.77-20.69,335.6v.1s49.79,3.1,49.79,3.1l4.5-83.6s0,0,0,0l.4-7.6c.1-1.2,1-2.2,2.1-2.4l7.6-1,9.4-1.3h.6l27.2,1.8h.4l8.4.6c1.3.1,2.3,1.1,2.3,2.4v.1l-.25,7.73c.03.32.05.64.05.97v.4l-2.7,85.6,95.21,5.89h.09s0,0,0,0v-1.4Zm-76.7-147.1l-13.4,26.9c-1.2,2.4-3.7,4-6.4,3.9l-58.8-1c-2.1,0-3.5-2.3-2.5-4.2l13.5-25.9c1.2-2.3,3.6-3.8,6.2-3.8h58.8c2.2,0,3.6,2.2,2.6,4.1Z"
                            fill="#7c7c7c"
                          />
                          <path
                            d="m550.4,546.7c0-2.3,1.9-4.2,4.2-4.3l1.8-98-13.55-8.74-93.05-59.36v2.3l-.1,3v1l-.1,2.8v3.7l-.1,5v1.8l-.1,4.4v2.3l-.1,4.9v2.5l-.2,9.8v1.7l-.1,2.8-.1,3.4-.1,2.8-.1,3.2-.1,6.6c0,2.2-.1,4.5-.1,6.8s-.1,4.6-.1,7l-.4,19.3-.1,7h0s-.2,7.9-.2,7.9h0s0,.2,0,.2l-.09,3.8-.2,8.1h0s-.5,20.8-.5,20.8l-.3,12.7-.3,12.8-.1,4.3-.2,8.6-.1,4.3-.3,12.9-.1,4.3-.2,8.5-.1,4.2-.6,29.1-.1,4-.2,8-.2,7.9-.2,7.7-.2,11.2-.1,5.4-.1,5.3-.1,5.2-.1,5-.1,4.9-.1,3.2-.1,3.1v3l-.1,3-.1,2.9-.1,2.8-.1,2.7v12.4h0v2.2h0v1.1h0v1.2s-.1,6.3-.1,6.3v12.3l109.1-41.5h0l-1.2-155.5Z"
                            fill="#727272"
                          />
                          <path
                            d="m556.4,444.4h0s-1.8,98-1.8,98c12.5-.5,50.4-1.2,65.9-1.5,1.88-.05,3.56.66,4.8,1.85,1.26,1.21,2.05,2.93,2.1,4.85l2.1,157.1v.1h0l343.4,11v-.07s-20.69-297.23-20.69-297.23h0s-395.8,25.9-395.8,25.9Zm361,158.4h-142.2c-7.2,0-13.2-5.7-13.5-13l-2.9-73.6c-.3-7.5,5.5-13.8,13-14l139.8-4.7c7.3-.2,13.4,5.3,13.9,12.6l5.2,78.3c.7,7.8-5.5,14.4-13.3,14.4Z"
                            fill="#6d6d6d"
                          />
                          <polygon
                            points="1021.5 385.7 1021.5 385.8 952.21 418.5 972.9 715.7 985.98 719.25 1021.5 728.9 1021.5 385.7 1021.5 385.7"
                            fill="#7c7c7c"
                          />
                          <path
                            d="m803.8,859.7l1.1-100.6s.04,0,.06,0c-6.89,0-13.87-.1-20.96-.3-12.6-.4-24.7-1.2-36.1-2.2v102.5c8.4,3.1,20.2,3.5,33.4,4.6,8.1.6,15.8-.7,22.6-1.2h0s-.07,0-.1,0v-2.8Z"
                            fill="#898989"
                          />
                          <path
                            d="m804.96,759.1s-.04,0-.06,0l-1.1,100.6v2.8s.07,0,.1,0c8.96-.67,16.28-3.45,20.83-6.66.21-.15.42-.3.62-.45.01,0,.02-.02.03-.02,2.7-2.05,4.27-4.25,4.42-6.16v-90.6c-7.88.3-16.16.5-24.84.5Z"
                            fill="#727272"
                          />
                          <path
                            d="m747.8,858.96v-102.36c-4.1-.4-8.1-.8-12-1.2h0v92.2c-.15,1.8.78,3.88,2.78,5.89,1,1.01,2.27,2,3.81,2.93.51.31,1.07.61,1.64.91,1.14.59,2.39,1.16,3.78,1.67v-.04Z"
                            fill="#7c7c7c"
                          />
                          <path
                            d="m350.1,643c0-1.3-1-2.3-2.3-2.4l-8.4-.6h-.4l-27.3-1.8h-.5l-9.4,1.3-7.6,1c-1.1.2-2,1.2-2.1,2.4l-.4,7.6h0s-4.5,83.6-4.5,83.6v.09s-.3,4.91-.3,4.91c-.05.69.21,1.35.68,1.83.41.43.97.72,1.62.77l37.8,3.1c.3,0,.5,0,.8-.1l17.4-4.6c1.1-.3,1.9-1.3,1.9-2.4l.58-18.16,2.18-68.71.25-7.73v-.1Z"
                            fill="#898989"
                          />
                          <path
                            d="m77.7,326.5l180.39,68.8-20.69,335.6h0s20.69-335.6,20.69-335.6l191.7-18.77v-.23l93.05,59.36,13.55,8.74h0s395.8-25.9,395.8-25.9h0s69.29-32.7,69.29-32.7V0H0v340.4c5.02-4.38,10.58-8.08,16.53-11.03,18.24-9.05,40.13-10.94,61.17-2.87Zm381.4-146c.2-9.4,12.2-13.4,18-6l84.5,107.9c3.5,4.5,5.5,10.1,5.5,15.8l-2.6,125.7c-.2,6.5-7.5,10.3-12.9,6.7l-85.4-57.6c-7.2-4.7-11.5-12.9-11.3-21.6l4.2-170.9ZM125.6,328.9l6.7-100.3c.8-9.8,8-17.8,17.7-19.6l278.8-51.4c9.7-1.8,18.5,5.8,18.3,15.6l-4.5,175.1c-.2,10-7.9,18.2-17.8,19.2l-162.5,16c-3.5.4-7-.1-10.3-1.4l-121.2-44.9c-3.4-1.3-5.5-4.7-5.2-8.3Z"
                            fill="#5b5b5b"
                          />
                        </g>
                      </g>
                    </svg>
                  </Box>
                </Box>
              </Flex>
            </GridItem>
          </Grid>
        ) : (
          /* MOBILE */
          <>
            <Grid autoFlow={"row"} templateColumns="1fr 0.2fr 1fr">
              {/* MISSION */}
              <GridItem position="relative" mr={{ base: "1", sm: "5" }}>
                <Flex
                  alignItems="center"
                  justifyContent="center"
                  position="absolute"
                  h="100%"
                  w="100%"
                >
                  <Text
                    opacity={showText1 ? 1 : 0}
                    onMouseEnter={() => setShowText1(!showText1)}
                    onMouseLeave={() => setShowText1(!showText1)}
                    transition="opacity 0.4s ease-in-out"
                    variant="stronglyEmphasized"
                    position="absolute"
                    transform="opacity 2s"
                    zIndex="2"
                    style={{ pointerEvents: "none" }}
                  >
                    {data.maincard.head3[0]}
                  </Text>
                </Flex>
                <Flex
                  alignItems="center"
                  h="100%"
                  justifyContent="center"
                  flexFlow={"column"}
                  transition="transform 1s ease-in-out, filter 0.5s ease-in-out"
                  _hover={{
                    transform: "scale(1.1)",
                  }}
                  onMouseEnter={() => setShowText1(true)}
                  onMouseLeave={() => setShowText1(false)}
                  filter="auto"
                  brightness={showText1 ? 0.8 : 1}
                >
                  <Image
                    src={data.maincard.table.element1}
                    alt={data.maincard.table.element1}
                    filter={"blur(2px)"}
                    opacity="100%"
                    w="100%"
                    borderRadius={"3px"}
                  />
                </Flex>
              </GridItem>

              <GridItem>
                <Flex
                  alignItems="center"
                  justifyContent="center"
                  flexDirection={"column"}
                  h="100%"
                >
                  {colors.map((color, c) => (
                    <Box
                      w={{ base: "2", sm: "3" }}
                      h={{ base: "2", sm: "3" }}
                      borderRadius="full"
                      key="c"
                      bg={color}
                      m="5px"
                      _hover={{
                        transform: "scale(1.1)",
                      }}
                      as="a"
                      transition="transform 0.2s ease-in-out"
                      href="#impressionen"
                    />
                  ))}
                </Flex>
              </GridItem>

              {/* ERGEBNIS */}
              <GridItem
                style={{ position: "relative" }}
                ml={{ base: "1", sm: "5" }}
              >
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
                <Flex
                  alignItems="center"
                  justifyContent="center"
                  flexFlow="column"
                  h="100%"
                  w="100%"
                >
                  <Box
                    style={{
                      position: "relative",
                      width: "100%",
                    }}
                    transition="transform 1s ease-in-out"
                    _hover={{
                      transform: "scale(1.1)",
                    }}
                    onMouseEnter={() => setShowText2(!showText2)}
                    onMouseLeave={() => setShowText2(!showText2)}
                  >
                    <Box
                      position="absolute"
                      w="100%"
                      height={"100%"}
                      /* top="-30" */
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                    >
                      <Text
                        textAlign="center"
                        variant="stronglyEmphasized"
                        zIndex={5}
                        opacity={showText2 ? 1 : 0}
                        transition="opacity 0.4s ease-in-out"
                        style={{ pointerEvents: "none" }}
                        wordBreak={"break-word"}
                      >
                        {data.maincard.head3[1]}
                      </Text>
                    </Box>

                    <Box
                      position="relative"
                      width="100%"
                      border="3px solid #484948"
                      borderRadius="10px"
                      overflow="hidden"
                      boxSizing="border-box"
                    >
                      <MotionBox />

                      <svg
                        id="Layer_2"
                        data-name="Layer 2"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1021.5 1021.4"
                      >
                        <g id="Layer_2-2" data-name="Layer 2">
                          <g>
                            <path
                              d="m16.53,329.37c-5.95,2.95-11.51,6.66-16.53,11.03,5.02-4.38,10.58-8.08,16.53-11.02h0Z"
                              fill="none"
                            />
                            <polygon
                              points="16.53 781.7 0 785.5 16.53 781.71 16.53 781.7"
                              fill="none"
                            />
                            {/* screens oben */}
                            <path
                              d="m566.93,298.36l-2.47,125.5c-.22,6.52-7.48,10.29-12.94,6.72l-85.32-57.55c-7.25-4.74-11.54-12.9-11.33-21.57l4.16-170.88c.23-9.44,12.17-13.39,17.99-5.96l84.46,107.94c3.53,4.51,5.45,10.07,5.45,15.8Z"
                              fill={adjustCol(colors[0])}
                              opacity={"50%"}
                            />
                            <path
                              d="m446.89,173.18l-4.29,175.14c-.25,9.99-7.89,18.24-17.84,19.23l-162.54,15.99c-3.48.35-6.99-.12-10.26-1.36l-121.25-44.91c-3.39-1.29-5.52-4.67-5.24-8.29l6.66-100.35c.78-9.79,8.04-17.84,17.7-19.62l278.79-51.42c9.66-1.78,18.51,5.77,18.27,15.59Z"
                              fill={adjustCol(colors[0])}
                              opacity={"50%"}
                            />
                            {/* table */}
                            <path
                              d="m908.63,739.84c-.32,9.66-32.93,16.86-78.81,18.74-7.93.33-16.25.5-24.87.49-6.84,0-13.87-.11-21.04-.35-12.57-.4-24.7-1.14-36.11-2.16-4.1-.36-8.11-.76-12.02-1.19-44.43-4.93-75.42-14.09-75.11-23.58.41-12.65,56.25-21.11,124.72-18.89,68.48,2.23,123.65,14.29,123.24,26.94Z"
                              fill={adjustCol(colors[2])}
                              opacity={"50%"}
                            />
                            {/* screen links */}
                            <path
                              d="m224.45,469.5v.09l-5.53,105.61c-.3,5.82-5.1,10.36-10.88,10.39-.13,0-.26-.01-.39-.01l-172.48-5.2h-.05c-6.26-.22-11.07-5.64-10.53-11.88l12.08-141.45c.57-6.7,6.99-11.31,13.52-9.71,0,0,.02,0,.03,0l165.92,41.03c5.07,1.25,8.54,5.91,8.31,11.12Z"
                              fill={adjustCol(colors[1])}
                              opacity={"50%"}
                            />
                            {/* touchscreen */}
                            <path
                              d="m365.82,595.25l-13.38,26.89c-1.22,2.44-3.72,3.96-6.44,3.91l-58.75-1.05c-2.14-.04-3.5-2.31-2.51-4.22l13.49-25.91c1.21-2.33,3.62-3.79,6.25-3.79h58.75c2.14,0,3.54,2.25,2.59,4.17Z"
                              fill={adjustCol(colors[1])}
                              opacity={"50%"}
                            />
                            {/* screen rechts */}
                            <path
                              d="m917.38,602.82h-142.17c-7.24,0-13.18-5.72-13.47-12.95l-2.92-73.6c-.3-7.48,5.55-13.76,13.02-14.01l139.85-4.67c7.27-.25,13.42,5.32,13.9,12.57l5.25,78.27c.52,7.79-5.65,14.39-13.46,14.39Z"
                              fill={adjustCol(colors[2])}
                              opacity={"50%"}
                            />
                            {/* schiebescreen */}
                            <path
                              d="m629.6,716.52c.02,3.14-2.6,5.65-5.74,5.49l-68.18-3.39c-2.24-.11-4-1.95-4.02-4.19l-.09-12.22h0s-1.15-155.47-1.15-155.47v-.03c.01-2.32,1.84-4.22,4.16-4.3,12.54-.46,50.38-1.22,65.94-1.53,3.75-.07,6.84,2.91,6.9,6.67l2.08,157.16c.04,4.83.07,8.84.1,11.81Z"
                              fill={adjustCol(colors[2])}
                              opacity={"50%"}
                            />

                            <path
                              d="m747.9,859v-3.7s-.07-.02-.1-.03v3.69s.07.03.1.04Z"
                              fill="#5b5b5b"
                            />
                            <path
                              d="m972.9,715.7l-20.69-297.2,20.69,297.23v.07s-343.39-11-343.39-11c0,4.75.1,8.72.1,11.7s-2.6,5.6-5.7,5.5l-68.2-3.4c-2.2-.1-4-2-4-4.2l-.1-12.2-109.1,41.5h0s-.09,0-.09,0l-95.21-5.89,2.7-85.6v-.4c0-.33-.02-.65-.05-.97l-2.18,68.71-.58,18.26h.1c0,1.1-.8,2.1-1.9,2.4l-17.4,4.6-.4.1h-.4l-37.8-3.1c-.71-.05-1.31-.38-1.72-.87-.46-.48-.73-1.14-.68-1.83l.29-4.91-49.69-3.09-220.97,50.61-16.53,3.79v235.9h1021.5v-292.5l-35.52-9.65-13.08-3.55Zm-143.1,42.8v89.07s0,0,0,0v1.63c-.15,1.91-1.72,4.11-4.42,6.16-.01,0-.02.02-.03.02-.2.15-.4.3-.62.45-4.55,3.21-11.88,5.99-20.83,6.66h0c-6.8.51-14.5,1.81-22.6,1.21-13.2-1.1-25-1.5-33.4-4.6v-.07s-.07-.02-.1-.03c-1.38-.52-2.63-1.08-3.78-1.67-.57-.3-1.13-.6-1.64-.91-1.54-.93-2.81-1.92-3.81-2.93-2-2.01-2.93-4.09-2.78-5.89v-92.2c-44.4-4.9-75.4-14.1-75.1-23.6.4-12.7,56.2-21.1,124.7-18.9s123.6,14.3,123.2,26.9c-.3,9.7-32.9,16.9-78.8,18.7Z"
                              fill="#5b5b5b"
                            />
                            <path
                              d="m224.5,469.6s0-.06,0-.09l-5.5,105.69,5.5-105.6Z"
                              fill="#5b5b5b"
                            />
                            <path
                              d="m629.4,704.7h.1s-2.1-157.1-2.1-157.1c-.05-1.92-.84-3.63-2.1-4.85,1.2,1.21,1.96,2.88,2,4.75l2.1,157.2Z"
                              fill="#5b5b5b"
                            />
                            <polygon
                              points="447.4 500.4 447.4 500.41 447.4 500.4 447.6 492.3 447.7 488.5 447.6 492.3 447.4 500.4"
                              fill="#5b5b5b"
                            />
                            <polygon
                              points="442.5 733 442.5 734.5 442.5 735.9 442.5 737.2 442.5 737.9 442.5 738.9 442.5 741.2 442.5 742.3 442.5 743.66 442.5 743.66 442.5 742.3 442.5 741.3 442.5 739 442.5 738 442.5 737.3 442.5 736 442.5 734.6 442.5 733.1 442.5 731.4 442.6 725.1 442.5 731.4 442.5 733"
                              fill="#5b5b5b"
                            />
                            <path
                              d="m447.9,480.4c-.1,2.6-.2,5.2-.2,7.9l.2-7.9Z"
                              fill="#5b5b5b"
                            />
                            <path
                              d="m237.4,730.9l20.69-335.6-180.39-68.8c-21.04-7.99-42.93-6.14-61.17,2.88-5.95,2.94-11.51,6.64-16.53,11.02v445.1l16.53-3.8,220.87-50.8ZM24.7,568.5l12-141.5c.6-6.7,7-11.3,13.5-9.7l165.9,41c5.07,1.29,8.56,5.95,8.4,11.21,0,.03,0,.06,0,.09l-5.5,105.6c-.3,5.8-5.1,10.4-10.9,10.4h-.4l-172.5-5.2c-6.3-.2-11.1-5.6-10.5-11.9Z"
                              fill="#727272"
                            />
                            <path
                              d="m442.5,742.3v-10.9l.1-6.3v-.2s0-1,0-1h0v-1.1h0v-2.2h0v-12.4l.1-2.7.1-2.8.1-2.9.1-3v-3l.1-3.1.1-3.2.1-4.9.1-5,.1-5.2.1-5.3.1-5.4.2-11.2.2-7.7.2-7.9.2-8,.1-4,.6-29.1.1-4.2.2-8.5.1-4.3.3-12.9.1-4.3.2-8.6.1-4.3.3-12.8.3-12.7.5-20.79h0s.2-8.11.2-8.11l.1-3.8v-.2s0,0,0,0c0-2.7.1-5.3.2-7.9h0s.1-7,.1-7l.4-19.3c0-2.4.1-4.7.1-7s.1-4.6.1-6.8l.1-6.6.1-3.2.1-2.8.1-3.4.1-2.8v-1.7l.2-9.8v-2.5l.1-4.9v-2.3l.1-4.4v-1.8l.1-5v-3.7l.1-2.8v-1l.1-3v-2.07l-191.7,18.77-20.69,335.6v.1s49.79,3.1,49.79,3.1l4.5-83.6s0,0,0,0l.4-7.6c.1-1.2,1-2.2,2.1-2.4l7.6-1,9.4-1.3h.6l27.2,1.8h.4l8.4.6c1.3.1,2.3,1.1,2.3,2.4v.1l-.25,7.73c.03.32.05.64.05.97v.4l-2.7,85.6,95.21,5.89h.09s0,0,0,0v-1.4Zm-76.7-147.1l-13.4,26.9c-1.2,2.4-3.7,4-6.4,3.9l-58.8-1c-2.1,0-3.5-2.3-2.5-4.2l13.5-25.9c1.2-2.3,3.6-3.8,6.2-3.8h58.8c2.2,0,3.6,2.2,2.6,4.1Z"
                              fill="#7c7c7c"
                            />
                            <path
                              d="m550.4,546.7c0-2.3,1.9-4.2,4.2-4.3l1.8-98-13.55-8.74-93.05-59.36v2.3l-.1,3v1l-.1,2.8v3.7l-.1,5v1.8l-.1,4.4v2.3l-.1,4.9v2.5l-.2,9.8v1.7l-.1,2.8-.1,3.4-.1,2.8-.1,3.2-.1,6.6c0,2.2-.1,4.5-.1,6.8s-.1,4.6-.1,7l-.4,19.3-.1,7h0s-.2,7.9-.2,7.9h0s0,.2,0,.2l-.09,3.8-.2,8.1h0s-.5,20.8-.5,20.8l-.3,12.7-.3,12.8-.1,4.3-.2,8.6-.1,4.3-.3,12.9-.1,4.3-.2,8.5-.1,4.2-.6,29.1-.1,4-.2,8-.2,7.9-.2,7.7-.2,11.2-.1,5.4-.1,5.3-.1,5.2-.1,5-.1,4.9-.1,3.2-.1,3.1v3l-.1,3-.1,2.9-.1,2.8-.1,2.7v12.4h0v2.2h0v1.1h0v1.2s-.1,6.3-.1,6.3v12.3l109.1-41.5h0l-1.2-155.5Z"
                              fill="#727272"
                            />
                            <path
                              d="m556.4,444.4h0s-1.8,98-1.8,98c12.5-.5,50.4-1.2,65.9-1.5,1.88-.05,3.56.66,4.8,1.85,1.26,1.21,2.05,2.93,2.1,4.85l2.1,157.1v.1h0l343.4,11v-.07s-20.69-297.23-20.69-297.23h0s-395.8,25.9-395.8,25.9Zm361,158.4h-142.2c-7.2,0-13.2-5.7-13.5-13l-2.9-73.6c-.3-7.5,5.5-13.8,13-14l139.8-4.7c7.3-.2,13.4,5.3,13.9,12.6l5.2,78.3c.7,7.8-5.5,14.4-13.3,14.4Z"
                              fill="#6d6d6d"
                            />
                            <polygon
                              points="1021.5 385.7 1021.5 385.8 952.21 418.5 972.9 715.7 985.98 719.25 1021.5 728.9 1021.5 385.7 1021.5 385.7"
                              fill="#7c7c7c"
                            />
                            <path
                              d="m803.8,859.7l1.1-100.6s.04,0,.06,0c-6.89,0-13.87-.1-20.96-.3-12.6-.4-24.7-1.2-36.1-2.2v102.5c8.4,3.1,20.2,3.5,33.4,4.6,8.1.6,15.8-.7,22.6-1.2h0s-.07,0-.1,0v-2.8Z"
                              fill="#898989"
                            />
                            <path
                              d="m804.96,759.1s-.04,0-.06,0l-1.1,100.6v2.8s.07,0,.1,0c8.96-.67,16.28-3.45,20.83-6.66.21-.15.42-.3.62-.45.01,0,.02-.02.03-.02,2.7-2.05,4.27-4.25,4.42-6.16v-90.6c-7.88.3-16.16.5-24.84.5Z"
                              fill="#727272"
                            />
                            <path
                              d="m747.8,858.96v-102.36c-4.1-.4-8.1-.8-12-1.2h0v92.2c-.15,1.8.78,3.88,2.78,5.89,1,1.01,2.27,2,3.81,2.93.51.31,1.07.61,1.64.91,1.14.59,2.39,1.16,3.78,1.67v-.04Z"
                              fill="#7c7c7c"
                            />
                            <path
                              d="m350.1,643c0-1.3-1-2.3-2.3-2.4l-8.4-.6h-.4l-27.3-1.8h-.5l-9.4,1.3-7.6,1c-1.1.2-2,1.2-2.1,2.4l-.4,7.6h0s-4.5,83.6-4.5,83.6v.09s-.3,4.91-.3,4.91c-.05.69.21,1.35.68,1.83.41.43.97.72,1.62.77l37.8,3.1c.3,0,.5,0,.8-.1l17.4-4.6c1.1-.3,1.9-1.3,1.9-2.4l.58-18.16,2.18-68.71.25-7.73v-.1Z"
                              fill="#898989"
                            />
                            <path
                              d="m77.7,326.5l180.39,68.8-20.69,335.6h0s20.69-335.6,20.69-335.6l191.7-18.77v-.23l93.05,59.36,13.55,8.74h0s395.8-25.9,395.8-25.9h0s69.29-32.7,69.29-32.7V0H0v340.4c5.02-4.38,10.58-8.08,16.53-11.03,18.24-9.05,40.13-10.94,61.17-2.87Zm381.4-146c.2-9.4,12.2-13.4,18-6l84.5,107.9c3.5,4.5,5.5,10.1,5.5,15.8l-2.6,125.7c-.2,6.5-7.5,10.3-12.9,6.7l-85.4-57.6c-7.2-4.7-11.5-12.9-11.3-21.6l4.2-170.9ZM125.6,328.9l6.7-100.3c.8-9.8,8-17.8,17.7-19.6l278.8-51.4c9.7-1.8,18.5,5.8,18.3,15.6l-4.5,175.1c-.2,10-7.9,18.2-17.8,19.2l-162.5,16c-3.5.4-7-.1-10.3-1.4l-121.2-44.9c-3.4-1.3-5.5-4.7-5.2-8.3Z"
                              fill="#5b5b5b"
                            />
                          </g>
                        </g>
                      </svg>
                    </Box>
                  </Box>
                </Flex>
              </GridItem>
            </Grid>

            <Divider h={{ base: "4", sm: "2" }} borderColor="transparent" />
            <Grid
              autoFlow="row"
              templateColumns={{ base: "1fr", sm: "1fr 1fr 1fr" }}
              mt="5"
            >
              {/* ICONS */}
              {!base &&
                data.maincard.table.element4.map((item, i) => (
                  <React.Fragment key={i}>
                    <GridItem>
                      <Flex
                        alignItems="center"
                        justifyContent="center"
                        width="100%"
                        as="a"
                        href="#impressionen"
                      >
                        <Box
                          width="100%"
                          opacity={"90%"}
                          transition="transform 1s ease-in-out"
                          _hover={{
                            transform: "scale(1.1)",
                          }}
                          dropShadow="2xl"
                          px="30"
                          mb="13"
                          mt="2"
                          maxW="160px"
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
                    </GridItem>
                  </React.Fragment>
                ))}

              {/* CATEGORIES */}
              {data.maincard.table.element2.map((item, i) => (
                <React.Fragment key={i}>
                  <GridItem width="100%" h="100%" textAlign="center">
                    <Flex alignItems="center" justifyContent="center">
                      <Flex
                        alignItems="center"
                        justifyContent="center"
                        as="a"
                        href="#impressionen"
                        px="5"
                        py="2"
                        m="1"
                        borderWidth={2}
                        borderRadius="12"
                        borderColor={colors[i]}
                        transition="transform 0.5s ease-in-out"
                        _hover={{
                          transform: "scale(1.1)",
                        }}
                        h="50%"
                        boxShadow="2xl"
                        opacity="90%"
                      >
                        <Text
                          variant="emphasized"
                          textTransform={"uppercase"}
                          letterSpacing={"wider"}
                          color={colors[i]}
                          wordBreak={"break-word"}
                        >
                          {i === 1 ? item : item}
                        </Text>
                      </Flex>
                    </Flex>
                    <Flex justifyContent="center" h="100%">
                      <Box
                        as="a"
                        href="#impressionen"
                        p="3"
                        borderRadius="12"
                        transition="transform 1s ease-in-out"
                        _hover={{
                          transform: "scale(1.01)",
                        }}
                      >
                        <Text
                          variant="lessEmphasized"
                          /* lineHeight={"1.1"} */
                          color={colors[i]}
                          transition="transform 1s ease-in-out"
                          wordBreak={"break-word"}
                          _hover={{
                            transform: "scale(1.1)",
                          }}
                          mt={{ base: "-2", sm: "-1.5" }}
                          mb={{ base: "1", sm: "0" }}
                        >
                          {data.maincard.table.element3[i]}
                        </Text>
                      </Box>
                    </Flex>
                  </GridItem>
                </React.Fragment>
              ))}
            </Grid>
          </>
        )}
      </CardBody>
    </Card>
  );
}
