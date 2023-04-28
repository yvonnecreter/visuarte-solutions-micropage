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
  SimpleGrid,
} from "@chakra-ui/react";
import data from "./data.json";
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

export default function ColumnCard2() {
  const desktop = useBreakpointValue({ base: false, md: true });

  return (
    <Card sx={useStyleConfig("Card")} id="waswirtun" scrollMarginTop={"5vh"}>
      <CardHeader>
        <Heading variant="layer1">{data.maincard.head1}</Heading>
        <Heading variant="layer2">{data.maincard.head1_2}</Heading>
        <Spacer h="2vh" />
        <Heading variant="layer3">{data.maincard.head2}</Heading>
      </CardHeader>

      <CardBody>
        {desktop ? (
          <Grid templateColumns="1fr 0.8fr 1fr" gap={5} autoFlow="row">
            {/*column 1: lifecycle*/}
            <GridItem /* rowSpan={1} */>
              <Flex alignItems="center" h="100%">
                <Image
                  src={data.maincard.table.element5}
                  alt={data.maincard.table.element5}
                  /* opacity="20%" */
                  opacity="100%"
                  w="100%"
                  /* filter="invert(1)" */
                  transition="transform 2s"
                  _hover={{
                    transform: "scale(1.1)",
                  }}
                />
              </Flex>
            </GridItem>

            <GridItem width="150%" textAlign="center" ml="-50%">
              <SimpleGrid
                templateRows={"1fr 1fr 1fr"}
                gap="2"
                py="15%"
                h="100%"
              >
                {/*column 3: categories*/}
                {data.maincard.table.element2.map((item, i) => (
                  <React.Fragment key={i}>
                    <GridItem w="100%" h="100%" textAlign="center" zIndex="5">
                      <Flex
                        as="a"
                        href="#videoplayercards"
                        px="5"
                        borderRadius="full"
                        borderColor={data.maincard.colors[i]}
                        transition="transform 1.3s"
                        _hover={{
                          transform: "translateX(17%)",
                        }}
                        w="100%"
                        h="100%"
                        background={data.maincard.colors[i]}
                        textAlign={"start"}
                        flexFlow={"row"}
                        clipPath="polygon(93% 0, 100% 50%, 93% 100%, 0% 100%, 0 50%, 0% 0%)"
                        alignItems="center"
                      >
                        <Image src={data.box} alt={data.box} h="100%" p="3%" pr="4%" pl="2%"/>
                        <Box m="2%">
                          <Text
                            variant="emphasized"
                            textTransform={"uppercase"}
                            letterSpacing={"wider"}
                            color="white"
                            w="100%"
                          >
                            {item}
                          </Text>
                          <Text variant="regular" color="white">
                            {data.maincard.table.element3[i]}
                          </Text>
                        </Box>
                      </Flex>
                    </GridItem>
                  </React.Fragment>
                ))}
              </SimpleGrid>
            </GridItem>

            <GridItem h="100%">
              <Flex alignItems="center" justifyContent="center" h="100%">
                <Box
                  position="relative" h="100%"
                  transition="transform 1s"
                  _hover={{
                    transform: "scale(1.1)",
                  }}
                >
                  <Image
                    src={data.maincard.table.element5}
                    alt={data.maincard.table.element5}
                    h="100%"
                    borderRadius={5}
                    dropShadow="2xl"
                    filter="brightness(1.835)"
                  />
                  <MotionBox />
                </Box>
              </Flex>
            </GridItem>

            <GridItem>
              <Flex alignItems="center" justifyContent="center" h="100%">
                <Text variant="stronglyEmphasized">
                  {data.maincard.head3[0]}
                </Text>
              </Flex>
            </GridItem>

            <GridItem />

            <GridItem>
              <Flex alignItems="center" justifyContent="center" h="100%">
                <Text variant="stronglyEmphasized">
                  {data.maincard.head3[1]}
                </Text>
              </Flex>
            </GridItem>


          </Grid>
        ) : (
          /* MOBILE */
          <Box />
        )}
      </CardBody>
    </Card>
  );
}
