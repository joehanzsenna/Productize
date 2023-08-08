import React from "react";
<<<<<<< HEAD

const ExploreSec1:React.FC = () => {
  return <div>

  </div>;
=======
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
>>>>>>> 01984a0ed6f01a99b549c052bcb1571105637640
};

export default ExploreSec1;
