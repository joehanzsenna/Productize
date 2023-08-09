import { Box, Heading, Icon, Text } from "@chakra-ui/react";
import React from "react";
import { IoIosArrowDown } from "react-icons/io";

const ExDesignSec2:React.FC = () => {
  return (
    <Box w="100%" maxW={"1440px"} m="5rem auto">
      <Box
        w="80%"
        m="auto"
        display={"grid"}
        gridTemplateColumns={"1fr 1fr"}
        justifyContent={"center"}
      >
        <Box w="45%">
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
            marginBottom={"1rem"}
          >
            <Heading fontSize={"18px"}>Filter</Heading>
            <Text fontSize={"12px"}>Clear</Text>
          </Box>
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
            marginBottom={"5px"}
            borderBottom={"1px solid grey"}
            p={".5rem 0"}
          >
            <Text fontSize={"14px"}>Showing</Text>
            <Icon as={IoIosArrowDown} />
          </Box>
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
            marginBottom={"5px"}
            borderBottom={"1px solid grey"}
            p={".5rem 0"}
          >
            <Text fontSize={"14px"}>Sort by</Text>
            <Icon as={IoIosArrowDown} values="" />
          </Box>
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
            marginBottom={"5px"}
            borderBottom={"1px solid grey"}
            p={".5rem 0"}
          >
            <Text fontSize={"14px"}>Rating</Text>
            <Icon as={IoIosArrowDown} />
          </Box>
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
            marginBottom={"5px"}
            borderBottom={"1px solid grey"}
            p={".5rem 0"}
          >
            <Text fontSize={"14px"}>Price</Text>
            <Icon as={IoIosArrowDown} />
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
