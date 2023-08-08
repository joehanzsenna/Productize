import React from 'react';
import { Box } from '@chakra-ui/react';
import backgroundImage from '../../../assets/image/backgroundImage.png';
import Container from '../../../components/Container';

const ExploreSec1: React.FC = () => {
  return (
    <Box as={`section`}>
      <Container>
        <Box
          display={`flex`}
          justifyContent={`center`}
          alignItems={`center`}
          mt={`5.7rem`}
        >
          <img src={backgroundImage} alt='background-image' />
        </Box>
      </Container>
    </Box>
  );
};

export default ExploreSec1;
