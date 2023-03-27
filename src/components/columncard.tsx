import * as React from "react";
import {
  Card,keyframes ,
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
import ArrowSVG from "../components/arrow.svg";
import Icon_kreativstrategieSVG from "../components/icon_kreativstrategie.svg";
import Icon_inhalteSVG from "../components/icon_inhalte.svg";
import Icon_interaktivSVG from "../components/icon_interaktiv.svg";
import CIcon from "@/components/cicon";
import { ChakraProvider } from "@chakra-ui/react";
import { transform } from "typescript";
import { easeInOut } from "framer-motion";


const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

export default function ColumnCard() {
  return (
    <ChakraProvider>
      <Card
        size="lg"
      >
        <CardHeader>
          <Heading size="xl">{data.maincard.head1}</Heading>
          <Heading size="l" color="grey">
            {data.maincard.head2}
          </Heading>
        </CardHeader>

        <Spacer h={20} />
        <CardBody mb="25">
          <Grid
            templateColumns="repeat(3, 1fr)"
            gap={1}
            h="100%"
            textAlign={"center"}
          >
            {/*column 1: start*/}
            <GridItem>
              <Box
                w="100%"
                transition="transform 1s"
                _hover={{
                  transform: "scale(1.2)",
                }}
              >
                <Heading size="lg">{data.maincard.head3[0]}</Heading>
              </Box>
            </GridItem>

            {/*column 2: arrow*/}
            <GridItem>
              <Center>
                <Image
                  src={data.maincard.arrow}
                  alt={data.maincard.arrow}
                  width="50%"
                  maxW="12vh"
                />
              </Center>
            </GridItem>

            {/*column 3: end*/}
            <GridItem>
              <Box
                w="100%"
                transition="transform 1s"
                _hover={{
                  transform: "scale(1.2)",
                }}
              >
                <Heading size="lg">{data.maincard.head3[1]}</Heading>
              </Box>
            </GridItem>
          </Grid>
          <Spacer h={50} />

          <Grid
            templateRows="repeat(3, 1fr)"
            templateColumns="1.2fr 0.5fr 1fr .8fr 2fr 1fr 0.5fr 2fr"
            gap={5}
            autoFlow="column"
          >
            {/*column 1: lifecylce*/}
            <GridItem rowSpan={3}>
              <Flex alignItems="center" justifyContent="center" h="100%">
                <Image
                  src={data.maincard.table.element1}
                  alt={data.maincard.table.element1}
                  w="80%"
                  transition="transform 2s"
                  _hover={{
                    animation: `${spin} 3s linear infinite`,
                  }}
                />
              </Flex>
            </GridItem>

            {/*column 2: arrow*/}
            <GridItem rowSpan={3} width="100%">
              <Flex alignItems="center" justifyContent="center" h="100%">
                <Image
                  src={data.maincard.arrowsplit}
                  alt={data.maincard.arrowsplit}
                  height="73%"
                />
              </Flex>
            </GridItem>

            {/*column 3: categories*/}
            {data.maincard.table.element2.map((item, i) => (
              <>
                <GridItem width="100%" textAlign="center">
                  <Flex alignItems="center" justifyContent="center" h="100%">
                    <Box
                      py="2"
                      px="3"
                      borderWidth={1}
                      borderRadius="5"
                      borderColor={data.maincard.colors[i]}
                      transition="transform 1s"
                      _hover={{
                        filter: "brightness(1.1)",
                        transform: "scale(1.1)",
                      }}
                    >
                      <Text
                        color={data.maincard.colors[i]}
                        fontWeight="bold"
                        fontSize="xl"
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
                  <Image src="arrow.svg" alt="->" w="100%" />
                </Flex>
              </GridItem>
            ))}

            {/*column 5: 3 text*/}
            {data.maincard.table.element3.map((item, i) => (
              <>
                <GridItem width="100%" textAlign="center">
                  <Flex alignItems="center" justifyContent="center" h="100%">
                    <Box>
                      <Text
                        color={data.maincard.colors[i]}
                        fontSize="xl"
                        fontWeight="bold"
                        transition="transform 1s"
                        _hover={{
                          filter: "brightness(1.1)",
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
                      filter: "brightness(1.1)",
                      transform: "scale(1.2)",
                    }}
                  />
                </Flex>
              </>
            ))}

            {/*column 7: arrow*/}
            <GridItem rowSpan={3} width="100%">
              <Flex alignItems="center" justifyContent="center" h="100%">
                <Image
                  src={data.maincard.arrowsplit}
                  alt={data.maincard.arrowsplit}
                  height="73%"
                  style={{ transform: "scaleX(-1)" }}
                />
              </Flex>
            </GridItem>

            {/*column 8: image*/}
            <GridItem rowSpan={3} w="100%">
              <Flex
                alignItems="center"
                justifyContent="center"
                h="100%"
              >
                <Image
                  src={data.maincard.table.element5}
                  alt={data.maincard.table.element5}
                  w="100%"
                borderRadius={5}
                />
              </Flex>
            </GridItem>
          </Grid>
        </CardBody>
      </Card>
    </ChakraProvider>
  );
}
