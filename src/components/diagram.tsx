import {
  Grid,
  GridItem,
  Box,
  Text,
  Heading,
  Center,
  Flex,
  Image,
  Divider,
  border,
} from "@chakra-ui/react";
import react from "react";
import data from "../components/data.json";

export default function Diagram1() {
  const bW = 1;
  const textPadding = 2;
  const textPaddingS = 1.5;
  const bR = 5;
  const mX = 4;

  return (
    <Grid
      templateColumns={"1fr, 1fr, 1fr"}
      templateRows= "repeat(10, 50px 20px)"
      gridAutoFlow="column"
      fontSize="xs"
      textAlign="center"
    >
      <GridItem colSpan={3}>
        <Flex justifyContent="center" alignItems="center">
          <Box
            borderWidth={bW}
            borderColor="black"
            display="inline-block"
            borderRadius={bR}
          >
            <Text p={textPadding}>{data.diagram.h1}</Text>
          </Box>
        </Flex>
      </GridItem>

      <GridItem colSpan={3} w="100%">
      <Box borderWidth="1px" borderColor="gray.200">
      Box 1
    </Box>
      </GridItem>

      <GridItem colSpan={3}>
        <Box
          borderRadius={bR}
          borderWidth={bW}
          display="inline-block"
          borderColor="gray"
          color="gray"
        >
          <Text p={textPadding}>{data.diagram.h2}</Text>
        </Box>
      </GridItem>

      <GridItem colSpan={3} w="100%">
        <Flex justifyContent="center">
          <Image
            w="10px"
            src={data.maincard.arrowsplit}
            alt=""
            transform="rotate(90deg)"
          />
        </Flex>
      </GridItem>

      {data.diagram.c1.map((item, index) => (
        <>
          <GridItem mx={mX}>
            <Flex justifyContent="center" alignItems="center">
              <Box
                borderRadius={bR}
                borderWidth={bW}
                display="inline-block"
                grid-column-start={1}
                color={data.maincard.colors[0]}
                borderColor={data.maincard.colors[0]}
              >
                <Text p={textPaddingS}>{item}</Text>
              </Box>
            </Flex>
          </GridItem>
          {index !== data.diagram.c1.length - 1 && (
            // Divider code here

            <GridItem w="100%">
              <Flex justifyContent="center">
                <Divider
                  orientation="vertical"
                  width="100%"
                  borderColor="black"
                  height="10"
                  w="0"
                />
              </Flex>
            </GridItem>
          )}
        </>
      ))}

      {data.diagram.c2.map((item, index) => (
        <>
          <GridItem mx={mX}>
            <Flex justifyContent="center" alignItems="center">
              <Box
                borderRadius={bR}
                borderWidth={bW}
                display="inline-block"
                grid-column-start={2}
                color={data.maincard.colors[1]}
                borderColor={data.maincard.colors[1]}
              >
                <Text p={textPaddingS}>{item}</Text>
              </Box>
            </Flex>
          </GridItem>
          {index !== data.diagram.c2.length - 1 && (
            // Divider code here

            <GridItem w="100%">
              <Flex justifyContent="center">
                <Divider
                  orientation="vertical"
                  width="100%"
                  borderColor="black"
                  height="10"
                  w="0"
                />
              </Flex>
            </GridItem>
          )}
        </>
      ))}

      <GridItem />
      <GridItem />
      <GridItem />
      <GridItem />

      {data.diagram.c3.map((item, index) => (
        <>
          <GridItem mx={mX}>
            <Flex justifyContent="center" alignItems="center">
              <Box
                borderRadius={bR}
                borderWidth={bW}
                display="inline-block"
                grid-column-start={3}
                color={data.maincard.colors[2]}
                borderColor={data.maincard.colors[2]}
              >
                <Text p={textPaddingS}>{item}</Text>
              </Box>
            </Flex>
          </GridItem>
          {index !== data.diagram.c3.length - 1 && (
            // Divider code here

            <GridItem w="100%">
              <Flex justifyContent="center">
                <Divider
                  orientation="vertical"
                  width="100%"
                  borderColor="black"
                  height="10"
                  w="0"
                />
              </Flex>
            </GridItem>
          )}
        </>
      ))}
    </Grid>
  );
}
