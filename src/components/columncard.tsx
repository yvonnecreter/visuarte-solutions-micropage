import * as React from "react";
import { useEffect } from "react";
import {
  chakra,
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
  return (
    <Card sx={useStyleConfig("Card")}>
      <CardHeader>
        <Heading variant="layer1">{data.maincard.head1}</Heading>
        <Heading variant="layer2">{data.maincard.head1_2}</Heading>
        <Spacer h="2vh" />
        <Heading variant="layer3">{data.maincard.head2}</Heading>
      </CardHeader>

      <CardBody>
        <Grid
          templateRows="1fr 1fr 1fr 1fr"
          templateColumns="1.2fr 0.5fr 1fr .8fr 2fr 1fr 0.5fr 2fr"
          gap={5}
          autoFlow="column"
        >
          <GridItem>
            <Flex alignItems="center" justifyContent="center" h="100%">
              <Text
                variant="stronglyEmphasized"
                /*  transition="transform 1s"
                _hover={{
                  transform: "scale(1.2)",
                }} */
              >
                {data.maincard.head3[0]}
              </Text>
            </Flex>
          </GridItem>

          {/*column 1: lifecylce*/}
          <GridItem rowSpan={3}>
            <Flex alignItems="center" h="100%">
              <Image
                src={data.maincard.table.element1}
                alt={data.maincard.table.element1}
                opacity="20%"
                w="80%"
                transition="transform 2s"
                _hover={{
                  transform: "scale(1.1)",
                }}
              />
            </Flex>
          </GridItem>

          {/*column 2: arrow*/}
          <GridItem colSpan={5}>
            <Flex justifyContent={"center"} h="100%">
              <Image
                src={data.maincard.arrow}
                alt={data.maincard.arrow}
                opacity="20%"
                width="50%"
                maxW="7vH"
              />
            </Flex>
          </GridItem>

          <GridItem rowSpan={3} width="100%">
            <Flex alignItems="center" justifyContent="center" h="100%">
              <Image
                src={data.maincard.arrowsplit}
                alt={data.maincard.arrowsplit}
                height="73%"
                opacity="20%"
              />
            </Flex>
          </GridItem>

          {/*column 3: categories*/}
          {data.maincard.table.element2.map((item, i) => (
            <>
              <GridItem width="100%" textAlign="center">
                <Flex alignItems="center" justifyContent="center" h="100%">
                  <Box
                    p="3"
                    borderWidth={3}
                    borderRadius="12"
                    borderColor={data.maincard.colors[i]}
                    transition="transform 1s"
                    _hover={{
                      transform: "scale(1.1)",
                    }}
                    
                    boxShadow="2xl"
                    background={data.maincard.colors[i]}
                  >
                    <Text
                      variant="regular"
                      textTransform={"uppercase"}
                      color="white"
                      letterSpacing={"wider"}
                    >
                      {item}
                    </Text>
                  </Box>
                </Flex>
              </GridItem>
            </>
          ))}

          {/*column 4: arrows*/}
          {Array.from({ length: 3 }, (v, i) => (
            <GridItem key={i}>
              <Flex alignItems="center" justifyContent="center" h="100%">
                <Image src="images/arrow.svg" alt="->" w="100%" opacity="20%" />
              </Flex>
            </GridItem>
          ))}

          {/*column 5: 3 text*/}
          {data.maincard.table.element3.map((item, i) => (
            <>
              <GridItem width="100%" textAlign="center">
                <Flex alignItems="center" justifyContent="center" h="100%">
                  <Box
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
            </>
          ))}

          {/*column 6: 3 icons*/}
          {data.maincard.table.element4.map((item, i) => (
            <>
              <Flex alignItems="center" justifyContent="center" h="100%">
                <Image
                  src={data.maincard.table.element4[i]}
                  alt=" "
                  w="75%"
                  maxH={"5vh"}
                  transition="transform 1s"
                  _hover={{
                    transform: "scale(1.1)",
                  }}
                  dropShadow="2xl"
                />
              </Flex>
            </>
          ))}

          {/*column 7: arrow*/}

          <GridItem colSpan={2}>
            <Flex
              alignItems="center"
              justifyContent="center"
              h="100%"
              /* transition="transform 1s"
              _hover={{
                transform: "scale(1.2)",
              }} */
            >
              <Text variant="stronglyEmphasized">{data.maincard.head3[1]}</Text>
            </Flex>
          </GridItem>

          <GridItem rowSpan={3} width="100%">
            <Flex alignItems="center" justifyContent="center" h="100%">
              <Image
                src={data.maincard.arrowsplitright}
                alt={data.maincard.arrowsplitright}
                height="73%"
                opacity="20%"
              />
            </Flex>
          </GridItem>

          {/*column 8: image*/}

          <GridItem rowSpan={3} w="100%">
            <Flex alignItems="center" justifyContent="center" h="100%">
              <Box
                position="relative"
                transition="transform 1s"
                _hover={{
                  transform: "scale(1.1)",
                }}
              >
                <Image
                  src={data.maincard.table.element5}
                  alt={data.maincard.table.element5}
                  w="100%"
                  borderRadius={5}
                  dropShadow="2xl"
                />
                <MotionBox />
                {/* <MotionBox
                  position="absolute"
                  top={0}
                  left={0}
                  right={0}
                  bottom={0}
                  initial={{ opacity: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  onMouseEnter={onMouseEnter}
                  onMouseOut={onMouseOut}
                > */}
                {/*   */}
              </Box>
              {/* <Image
                src={data.maincard.table.element5}
                alt={data.maincard.table.element5}
                w="100%"
                borderRadius={5}
              /> */}
            </Flex>
          </GridItem>
        </Grid>
      </CardBody>
    </Card>
  );
}
