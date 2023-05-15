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
  const [colors] = useStore((state) => [state.colors]);
  const desktop = useBreakpointValue({ base: false, md: true });
  const [showText1, setShowText1] = React.useState(false);
  const [showText2, setShowText2] = React.useState(false);

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
              <Flex alignItems="center" justifyContent="center">
                <Text
                  opacity={showText1 ? 1 : 0}
                  onMouseEnter={() => setShowText1(!showText1)}
                  onMouseLeave={() => setShowText1(!showText1)}
                  transition="opacity 0.4s ease-in-out"
                  variant="stronglyEmphasized"
                  position="absolute"
                  transform="opacity 2s"
                >
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
                  borderRadius={"3px"}
                  onMouseEnter={() => setShowText1(true)}
                  onMouseLeave={() => setShowText1(false)}
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
                      borderWidth={2}
                      borderRadius="12"
                      borderColor={colors[i]}
                      transition="transform 1s"
                      _hover={{
                        transform: "scale(1.1)",
                      }}
                      h="50%"
                      boxShadow="2xl"
                      opacity="90%"
                    >
                      <Text
                        variant="regular"
                        textTransform={"uppercase"}
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
                <Text
                  variant="stronglyEmphasized"
                  position="absolute"
                  opacity={showText2 ? 1 : 0}
                  transition="opacity 0.4s ease-in-out"
                >
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
                  style={{
                    position: "relative",
                    width: "100%",
                    border: "3px solid #484948",
                    borderRadius: "10px",
                    overflow: "hidden",
                    boxSizing: "border-box",
                  }}
                  transition="transform 1s"
                  _hover={{
                    transform: "scale(1.1)",
                  }}
                  onMouseEnter={() => setShowText2(!showText2)}
                  onMouseLeave={() => setShowText2(!showText2)}
                >
                  <Box position="relative" w="100%">
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
                          <polygon
                            points="291.7 650.5 291.7 650.5 291.7 650.5 287.2 734.1 237.4 731 237.41 730.9 237.4 730.9 16.53 781.7 16.53 781.71 237.5 731.1 287.19 734.19 287.2 734.1 291.7 650.5"
                            fill="#fff"
                          />
                          <path
                            d="m345.2,740.1l-17.4,4.6c-.3.1-.5.1-.8.1l-37.8-3.1c-.65-.05-1.22-.34-1.62-.77.41.48,1.02.81,1.72.87l37.8,3.1h.4l.4-.1,17.4-4.6c1.1-.3,1.9-1.3,1.9-2.39h-.1s.58-18.27.58-18.27l-.58,18.16c0,1.1-.8,2.1-1.9,2.4Z"
                            fill="#fff"
                          />
                          <path
                            d="m466.2,373l85.4,57.6c5.4,3.6,12.7-.2,12.9-6.7l2.6-125.7c0-5.7-2-11.3-5.5-15.8l-84.5-107.9c-5.8-7.4-17.8-3.4-18,6l-4.2,170.9c-.2,8.7,4.1,16.9,11.3,21.6Z"
                            fill="#fff"
                          />
                          <polygon
                            points="311.8 638.2 311.7 638.2 339 640 311.8 638.2"
                            fill="#fff"
                          />
                          <path
                            d="m130.8,337.2l121.2,44.9c3.3,1.3,6.8,1.8,10.3,1.4l162.5-16c9.9-1,17.6-9.2,17.8-19.2l4.5-175.1c.2-9.8-8.6-17.4-18.3-15.6l-278.8,51.4c-9.7,1.8-16.9,9.8-17.7,19.6l-6.7,100.3c-.3,3.6,1.8,7,5.2,8.3Z"
                            fill="#fff"
                          />
                          <rect
                            x="442.5"
                            y="743.66"
                            width="0"
                            height=".04"
                            fill="#fff"
                          />
                          <path
                            d="m925.5,510.1c-.5-7.3-6.6-12.8-13.9-12.6l-139.8,4.7c-7.5.2-13.3,6.5-13,14l2.9,73.6c.3,7.3,6.3,13,13.5,13h142.2c7.8,0,14-6.6,13.3-14.4l-5.2-78.3Z"
                            fill="#fff"
                          />
                          <path
                            d="m363.2,591.1h-58.8c-2.6,0-5,1.5-6.2,3.8l-13.5,25.9c-1,1.9.4,4.2,2.5,4.2l58.8,1c2.7.1,5.2-1.5,6.4-3.9l13.4-26.9c1-1.9-.4-4.1-2.6-4.1Z"
                            fill="#fff"
                          />
                          <path
                            d="m629.5,704.7h-.1s-2.1-157.2-2.1-157.2c-.05-1.87-.8-3.54-2-4.75-1.23-1.19-2.92-1.9-4.8-1.85-15.5.3-53.4,1-65.9,1.5-2.3.1-4.2,2-4.2,4.3l1.2,155.5h0l.1,12.2c0,2.2,1.8,4.1,4,4.2l68.2,3.4c3.1.1,5.7-2.4,5.7-5.5s-.1-6.95-.1-11.7h0v-.1Z"
                            fill="#fff"
                          />
                          <path
                            d="m785.4,712.9c-68.5-2.2-124.3,6.2-124.7,18.9-.3,9.5,30.7,18.7,75.1,23.6h0c3.9.4,7.9.8,12,1.2v98.67s.07.02.1.03v-98.7c11.4,1,23.5,1.8,36.1,2.2,7.09.2,14.07.3,20.96.3,8.68,0,16.96-.2,24.84-.5v88.97s0,0,0,0v-89.07c45.9-1.8,78.5-9,78.8-18.7.4-12.6-54.7-24.7-123.2-26.9Z"
                            fill="#fff"
                          />
                          <path
                            d="m16.53,329.37h0c18.24-9.01,40.13-10.86,61.17-2.87-21.04-8.07-42.93-6.18-61.17,2.87Z"
                            fill="#fff"
                          />
                          <path
                            d="m747.8,858.96v.04c-1.38-.52-2.63-1.08-3.78-1.67,1.14.59,2.39,1.16,3.78,1.67.03.01.07.02.1.03v-.03s-.07-.03-.1-.04Z"
                            fill="#fff"
                          />
                          <path
                            d="m35.2,580.4l172.5,5.2h.4c5.8,0,10.6-4.6,10.9-10.4l5.5-105.69c.16-5.26-3.33-9.92-8.4-11.21l-165.9-41c-6.5-1.6-12.9,3-13.5,9.7l-12,141.5c-.6,6.3,4.2,11.7,10.5,11.9Z"
                            fill="#fff"
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
