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
// interface features {
//   id: number;
//     img: string;
//     title: string;
//     price: number;
//     naming: string;

// }

const ExDesignSec1: React.FC = () => {
  const [feat] = useState(featuredDb);

  return (
    <Box maxW={"1440px"} w="100%" height={"auto"} m="0 auto">
      <Box w="80%" m="0 auto">
        <Box w="100%">
          <Heading
            as="h3"
            mb="8"
            fontSize={"24px"}
            fontWeight={"700"}
            fontStyle={"normal"}
          >
            Design
          </Heading>
          <Box
            as="ul"
            listStyleType={"none"}
            display={"flex"}
            gap={"4"}
            borderBottom={"1px solid lightgrey"}
            // paddingBottom={"4"}
          >
            <Box
              as="li"
              fontSize={"16px"}
              _hover={{
                color: "#111014",
                fontWeight: "600",
                borderBottom: ".1rem solid #000",
              }}
              cursor={"pointer"}
              color={"#878789"}
              fontWeight={"500"}
              p={"1rem .5rem"}
            >
              Featured
            </Box>
            <Box
              as="li"
              fontSize={"16px"}
              _hover={{
                color: "#111014",
                fontWeight: "600",
                borderBottom: ".1rem solid #000",
              }}
              cursor={"pointer"}
              color={"#878789"}
              p={"1rem .5rem"}
            >
              New
            </Box>
            <Box
              as="li"
              fontSize={"16px"}
              _hover={{
                color: "#111014",
                fontWeight: "600",
                borderBottom: ".1rem solid #000",
              }}
              cursor={"pointer"}
              color={"#878789"}
              p={"1rem .5rem"}
            >
              Trending
            </Box>
            <Box
              as="li"
              fontSize={"16px"}
              _hover={{
                color: "#111014",
                fontWeight: "600",
                borderBottom: ".1rem solid #000",
              }}
              cursor={"pointer"}
              color={"#878789"}
              p={"1rem .5rem"}
            >
              Most popular
            </Box>
          </Box>
        </Box>

        <Box w="100%" mt="8">
          <Heading
            as="h3"
            mb="4"
            fontSize={"24px"}
            fontWeight={"700"}
            fontStyle={"normal"}
          >
            Featured
          </Heading>
          <Swiper
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            navigation={{
              nextEl: ".swiper-button-nexting",
              prevEl: ".swiper-button-previous",
              clickable:  : true,
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
            w="80%"
            p="1rem"
            m="auto"
            mb="3rem"
            display={"flex"}
            justifyContent={"end"}
          >
            <Box w="6rem" display={"flex"} justifyContent={"space-between"}>
              <Box>
                <Icon
                  as={BsArrowLeftShort}
                  fontSize={"2.5rem"}
                  zIndex={"2"}
                  cursor={"pointer"}
                  className="swiper-button-previous"
                />
              </Box>
              <Box>
                <Icon
                  as={BsArrowRightShort}
                  fontSize={"2.5rem"}
                  zIndex={"2"}
                  cursor={"pointer"}
                  className="swiper-button-nexting"
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ExDesignSec1;
