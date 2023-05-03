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

/* defining motionbox w framer */

export default function ColumnCard() {
  const desktop = useBreakpointValue({ base: false, md: true });

  return (
    <Card sx={useStyleConfig("Card")} id="waswirtun" scrollMarginTop={"5vh"} zIndex="1"
    backdropFilter={"auto"} backdropBlur={"0px"}>
      <CardHeader>
        <Heading variant="layer1">{data.maincard.head1}</Heading>
        <Heading variant="layer2">{data.maincard.head1_2}</Heading>
        <Spacer h="2vh" />
        <Heading variant="layer3">{data.maincard.head2}</Heading>
      </CardHeader>

      <CardBody>
        {/* Condition: {true && <div/>}, Condition + Else: {true ? <div/> : <div/>} */}

        {desktop ? (
          <Grid
            templateRows="1fr 1fr 1fr 1fr"
            templateColumns="1.2fr 0.5fr 2.7fr 1fr 1.5fr 1fr 0.5fr 1.5fr"
            gap={5}
            autoFlow="column"
          >
            {/* <GridItem>
              <Flex alignItems="center" justifyContent="center" h="100%">
                <Text variant="stronglyEmphasized">
                  {data.maincard.head3[0]}
                </Text>
              </Flex>
            </GridItem> */}

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

            {/*column 2: arrow*/}
            <GridItem colSpan={5}>
              {/* <Flex justifyContent={"center"} h="100%">
                <Image
                  src={data.maincard.arrow}
                  alt={data.maincard.arrow}
                  opacity="20%"
                  width="50%"
                  maxW="7vH"
                  filter={"invert(1)"}
                />
              </Flex> */}
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
                      background={data.maincard.colors[i]}
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
                      borderColor={data.maincard.colors[i]}
                      transition="transform 1s"
                      _hover={{
                        transform: "scale(1.1)",
                      }}
                      h="50%"
                      boxShadow="2xl"
                      /* background={data.maincard.colors[i]} */
                      opacity="90%"
                    >
                      <Text
                        variant="regular"
                        textTransform={"uppercase"}
                        letterSpacing={"wider"}
                        /* color="#212121" */
                        color={data.maincard.colors[i]}
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
                        color={data.maincard.colors[i]}
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
                  <Image
                    src={data.maincard.table.element4[i]}
                    alt=" "
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

              {/*               <Box
                overflow={"visible"}
                h="260%"
                w="260%"
                filter={"blur(50px)"}
                opacity="20%"
                style={{
                  backgroundImage: `url("images/blur.svg")`,
                  backgroundSize: "100% auto",
                  backgroundRepeat: "no-repeat",
                  position: "absolute",
                  top: "10%",
                  right: "460%",
                }}
              /> */}
              <Flex
                alignItems="center"
                justifyContent="center"
                flexFlow="column"
                h="100%"
              >
                <Box
                  position="relative"
                  transition="transform 1s"
                  _hover={{
                    transform: "scale(1.1)",
                  }}
                  borderWidth="2px"
                  borderColor={"#707070"}
                  borderRadius={16}
                  backgroundColor="brand.white"
                >
                  <Image
                    src={data.maincard.table.element5}
                    alt={data.maincard.table.element5}
                    w="100%"
                    borderRadius={5}
                    dropShadow="2xl"
                    /* filter="brightness(1.6)" */
                    /* filter="brightness(1.835)" */
                    filter="brightness(0.9)"
                  />
                  <MotionBox />
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
                        borderColor={data.maincard.colors[i]}
                        transition="transform 1s"
                        _hover={{
                          transform: "scale(1.1)",
                        }}
                        boxShadow="2xl"
                        background={data.maincard.colors[i]}
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
                    borderRadius={5}
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
