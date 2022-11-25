import React from "react";
import { useColorMode } from "@chakra-ui/color-mode";
import {useMediaQuery} from "@chakra-ui/media-query";
import {Stack, Circle, Flex,Box, Text} from "@chakra-ui/layout"
import {Image} from "@chakra-ui/image"
import {Button} from "@chakra-ui/button"

export const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)")

  return (

      <Stack bgGradient="linear(180de,#008a, #ff137d)" w="100%">
          <Circle position="absolute" bg="blue.100" opacity="0.1" w="250px" h="250px" alignSelf="flex-end" />
          <Flex direction={["column", "row", "row"]} 
             p={isNotSmallerScreen ? "0" : "0"}
            alignSelf="flex-start">
            <Box mt={isNotSmallerScreen ? "0" : "16"} alignSelf="flex-start">
                <Text fontSize="5xl" fontWeight="semibold">Hi,</Text>
                <Text fontSize="5xl" fontWeight="semibold">I am</Text>
                <Text fontSize="7xl" fontWeight="bold" bgGradient="linear(to-r, cyan.400, blue.500,purple.600)" bgClip="text">Mohd Haroon Qureshi</Text>
                <Text fontSize="3xl" fontWeight="semibold" color={isDark ? "gray.200" : "gray.500"}>MERN Developer</Text>
                <Button mt={8}  colorScheme="blue" width="195px" onClick={() =>
                    window.open("https://drive.google.com/file/d/1C1cjcwP6CkViKUbx-oRyHlOzeT0KlMBI/view?usp=sharing")}  >Resume</Button>
            </Box>
            
          </Flex>
      </Stack>
  )
};

