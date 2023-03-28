import * as React from "react";
import {
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
import ArrowSVG from "../components/arrow.svg";
import Icon_kreativstrategieSVG from "../components/icon_kreativstrategie.svg";
import Icon_inhalteSVG from "../components/icon_inhalte.svg";
import Icon_interaktivSVG from "../components/icon_interaktiv.svg";
import CIcon from "@/components/cicon";
import { ChakraProvider } from "@chakra-ui/react";
import { transform } from "typescript";
import { easeInOut } from "framer-motion";
import theme from "@/styles/theme";
import { useStyleConfig } from "@chakra-ui/system";

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

export default function ColumnCard() {
  return (
    <Card sx={useStyleConfig("Card")}>
      <CardHeader>
        <Heading variant="layer1">{data.maincard.head1}</Heading>
        <Heading variant="layer2">{data.maincard.head2}</Heading>
      </CardHeader>

      <CardBody>
      <Image src="solution-workflow.png" alt="Unser Workflow" mb="5"/>
        <Image src="grafik-webseite.png" alt="Unsere Kernbereiche"/>
      </CardBody>
    </Card>
  );
}
