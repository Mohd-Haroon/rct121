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

      <Stack bgGradient="linear(180de,#008a, #ff137d)">
          <Circle position="absolute" bg="blue.100" opacity="0.1" w="300px" h="300px" alignSelf="flex-end" />
          <Flex direction={["column", "row", "row"]} 
            spacing="200px" p={isNotSmallerScreen ? "32" : "0"}
            alignSelf="flex-start">
            <Box mt={isNotSmallerScreen ? "0" : "16"} alignSelf="flex-start" >
                <Text fontSize="5xl" fontWeight="semibold">Hi,</Text>
                <Text fontSize="5xl" fontWeight="semibold">I am</Text>
                <Text fontSize="7xl" fontWeight="bold" bgGradient="linear(to-r, cyan.400, blue.500,purple.600)" bgClip="text">Mohd Haroon Qureshi</Text>
                <Text fontSize="3xl" fontWeight="semibold" color={isDark ? "gray.200" : "gray.500"}>MERN Developer</Text>
                <Button mt={8}  colorScheme="blue" width="195px" onClick={() =>
                    window.open("https://docs.google.com/document/d/1_zh_vPkaOP-EnAOw8i9qIx-WFsQ2L_nr_JAa7VHhUPA/edit?usp=sharing")} zIndex={-1}>Resume</Button>
            
            </Box>
            {/* <Image align="center" mt={isNotSmallerScreen ? "0" : "12"}
                mb={isNotSmallerScreen?"0":"12"} borderRadius="full" 
                backgroundColor="transparent" box="lg" 
                boxSize="300px" src="https://media-exp1.licdn.com/dms/image/C5603AQHFvd32qvdwdw/profile-displayphoto-shrink_100_100/0/1649917419039?e=1658966400&v=beta&t=F3Rxi-DTJQz4ygMyPKYgzse60-lJ-CCGf_KOVmR8EeA" />
                 */}
          </Flex>
      </Stack>
  )
};

