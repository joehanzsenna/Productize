import React from "react";
import { Box } from "@chakra-ui/react";
import  backgroundImage  from '../../../assets/image/backgroundImage.png';

const ExploreSec1: React.FC = () => {
  return (
    <Box as={`section`}>

      <Box
      display={`flex`}
      justifyContent={`center`}
      alignItems={`center`}
      mt={`5.7rem`}


      >
        <img src={backgroundImage} alt="background-image" />

      </Box>


    </Box>
  )
};

export default ExploreSec1;
