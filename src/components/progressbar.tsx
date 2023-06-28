import React, { useState, useEffect } from "react";
import theme from "@/styles/theme";
import { Box, Button, Text } from "@chakra-ui/react";

interface ProgressBarProps {
  progress: number;
  onClick: () => void;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress, onClick }) => {
  const [completed, setCompleted] = useState(false);
  const [countdown, setCountdown] = useState(3);
  /* if (progress >= 100 && !completed) {
    setCompleted(true);
  } */

  useEffect(() => {
    if (progress > 99 && !completed) {
      const intervalId = setInterval(() => {
        setCountdown((countdown) => countdown - 1);
      }, 1000);

      setTimeout(() => {
        clearInterval(intervalId);
        setCompleted(true);
      }, 3000);
  
    }}, [progress, completed, countdown]);
  
  let barW = progress*0.8+Math.round(((3-countdown)/3)*20);
  

  return (
    <Box maxW="200px">
      <Box  borderRadius="full" backgroundColor="#1f1f20"
        width= {barW < 100 ?  barW+"%" : "100%"}
      p="1">
        {completed ? (
          <Text onClick={onClick} align="center" 
          variant="progressbar"
          textTransform="uppercase"
          color="white"
          style={{cursor: "pointer"}}
          letterSpacing={"1px"}>
            Entdecken
          </Text>
        ) : ( 
          <Text variant="progressbar" align="end" mr="-12" color="black">
            { barW<100 ? (barW+"%") : (100+"%")}
          </Text>
        )}
      </Box>
    </Box>
  );
};

export default ProgressBar;
