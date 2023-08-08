import React, { useState } from "react";
import { Box, Heading, Icon, Image, Text } from "@chakra-ui/react";
import ExploreImg01 from "../../../../assets/ExploreImg01.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import { featuredDb } from "../ExDesignDB/ExDesignDb";
import { BsArrowRightShort, BsArrowLeftShort } from "react-icons/bs";

const ExDesignSec1: React.FC = () => {
  const [feat] = useState(featuredDb);

  return (
    <Box maxW={"1440px"} w="100%" height={"auto"} m="0 auto">
      <Box w="80%" m="0 auto">
        <Box w="100%">
          <Heading as="h3" mb="8" fontSize={"23"} fontWeight={"600"}>
            Design
          </Heading>
          <Box
            as="ul"
            listStyleType={"none"}
            display={"flex"}
            gap={"4"}
            borderBottom={"1px solid lightgrey"}
            paddingBottom={"4"}
          >
            <Box as="li">Featured</Box>
            <Box as="li">New</Box>
            <Box as="li">Trending</Box>
            <Box as="li">Most popular</Box>
          </Box>
        </Box>

        <Box w="100%" mt="8">
          <Heading as="h3" mb="4" fontSize={"23"} fontWeight={"600"}>
            Featured
          </Heading>
          <Swiper
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-previous",
              clickable: true,
            }}
            className="mySwiper" 
          >
            {feat.map((featuredDb) => {
              const { id, title, naming, img, price } = featuredDb;
              return (
                <SwiperSlide>
                  <Box
                    display={"flex"}
                    justifyContent={"start"}
                    alignItems={"start"}
                    bg="#AEDEE0"
                    p="3"
                    gap={"4"}
                    key={id}
                  >
                    {/* <img src="" alt="" /> */}
                    <Image src={img} alt="exploreImg" />
                    <Box>
                      <Heading fontSize={"1rem"}>{title}</Heading>
                      <Text>₦{price}</Text>
                      <Text>{naming}</Text>
                    </Box>
                  </Box>
                </SwiperSlide>
              );
            })}
          </Swiper>
          <Box
            position={"absolute"}
            w="5rem"
            right={"0"}
            display={"flex"}
            alignItems={"center"}
          >
            <Box>
              <Icon as={BsArrowLeftShort} className="swiper-button-previous" />
            </Box>
            <Box>
              <Icon as={BsArrowRightShort} className="swiper-button-next" />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ExDesignSec1;
