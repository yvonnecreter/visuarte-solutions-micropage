import React, { useState } from 'react';
import theme from '@/styles/theme';
import { Box, Button } from '@chakra-ui/react';

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
    <Box>
      {completed ? (
        <Button onClick={onClick}>Click me!</Button>
      ) : (
        <Box style={{ width: `${progress}%`, backgroundColor: 'blue', height: '20px'}} />
      )}
    </Box>
  );
};

export default ProgressBar;