import React, { useState } from "react";
import theme from "@/styles/theme";
import { Box, Button, Text } from "@chakra-ui/react";

interface ProgressBarProps {
  progress: number;
  onClick: () => void;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress, onClick }) => {
  const [completed, setCompleted] = useState(false);

  if (progress >= 100 && !completed) {
    setCompleted(true);
  }

  return (
    <Box maxW="200px">
      <Box  borderRadius="full" backgroundColor="#1f1f20"
      style={{ width: `${progress}%`, }}
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
          <Text variant="progressbar" align="end" mr="-7">
            {progress}
          </Text>
        )}
      </Box>
    </Box>
  );
};

export default ProgressBar;
