import { Box, Heading, Icon, Text } from "@chakra-ui/react";
import React from "react";

const ExDesignSec2:React.FC = () => {
  return (
    <Box w="100%" maxW={"1440px"} m="auto">
      <Box
        w="80%"
        m="auto"
        display={"grid"}
        gridTemplateColumns={"1fr 1fr"}
        justifyContent={"center"}
      >
        <Box w="50%">
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Heading>Filter</Heading>
            <Text>Clear</Text>
          </Box>
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Text>Showing</Text>
            <Icon as="" />
          </Box>
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Text>Sort by</Text>
            <Icon as="" values="" />
          </Box>
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Text>Rating</Text>
            <Icon as="" />
          </Box>
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Text>Price</Text>
            <Icon as="" />
          </Box>
        </Box>
        <Box w="100%">
          <Text>Text in here</Text>
        </Box>
      </Box>
    </Box>
  );
};

export default ExDesignSec2;
