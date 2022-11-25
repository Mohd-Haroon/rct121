import React from "react";
import {VStack, Grid, GridItem,Stack, SimpleGrid , Flex,Box, Text,Heading,Spacer} from "@chakra-ui/layout"
import {Image} from "@chakra-ui/image"
import { useColorMode } from "@chakra-ui/color-mode";
import {useMediaQuery} from "@chakra-ui/media-query";
import {Button} from "@chakra-ui/button"

let data=[
    {
        imageurl:'https://github.com/Mohd-Haroon/gusty-adjustment-6018/blob/main/Screenshot%20(1970).png?raw=true',
        nameproject:'Cronometer-clone',
        sitedetails:'Cronometer is a website and app for counting calories and tracking your diet and health metrics',
        collaborate:'A collaborative project, built in 5 days by a team of 4 developers',
        techstack:'MERN Stack | Chakra-UI library ',
        codelink:'https://github.com/Mohd-Haroon/gusty-adjustment-6018',
        liveLink:'https://cronometer-6018.netlify.app/'
    },
    {
        imageurl:'https://github.com/Mohd-Haroon/rhetorical-cub-8075/blob/Master/Website%20Sneak%20Peeks/LandingPage.png?raw=true',
        nameproject:'Sugarcosmetic-clone',
        sitedetails:'SugarCosmetic is an e-commerce website which deals in makeup products.',
        collaborate:'A collaborative project, built in 5 days by a team of 5 developers',
        techstack:'MERN Stack | Chakra-UI library ',
        codelink:'https://github.com/Mohd-Haroon/rhetorical-cub-8075',
        liveLink:'https://sugarcosmoclone.netlify.app/'
    },
    {
        imageurl:'https://github.com/Mohd-Haroon/Dnaindia-Clone/blob/main/dnaindia-clone/Screenshot%20(1413).png?raw=true',
        nameproject:'DNAindia clone',
        sitedetails:'One of the leading newspaper and news portal in India',
        collaborate:'An individual project, bult by me in 5 days',
        techstack:'React | Redux | Node | Chakra-UI library | React-router-dom',
        codelink:'https://github.com/Mohd-Haroon/Dnaindia-Clone',
        liveLink:'https://dna-inda-clone-hq.netlify.app/'
    },
    {
        imageurl:'https://user-images.githubusercontent.com/99546040/171988977-fc2e0113-c13c-41f7-be8a-b4e644d58c02.png?raw=true',
        nameproject:'Tic-Tac-Toe',
        sitedetails:' Tic-tac-toe is an instance of an m,n,k-game, where two players alternate taking turns on an m×n board until one of them gets k in a row',
        collaborate:'Individual Project',
        techstack:'React | Chakra-UI library',
        codelink:'https://github.com/Mohd-Haroon/Tic-Tac-Toe',
        liveLink:' https://tictactoe-m-h-q.netlify.app'
    },
    {
        imageurl:'https://github.com/Mohd-Haroon/rct121/blob/main/WhatsApp%20Image%202022-05-28%20at%206.50.28%20PM.jpeg?raw=true',
        nameproject:'BigBasket Clone',
        sitedetails:'BigBasket an online supermarket where user can buy different daily need products',
        collaborate:'A collaborative project, built in 5 days by a team of 5 developers.',
        techstack:'React | Redux | Node | Express | React-router-dom',
        codelink:'https://github.com/Mohd-Haroon/Big-basket-clone',
        liveLink:'https://big-basket-clone-by-masai-school.netlify.app/'
    },
    {
        imageurl:'https://github.com/Mohd-Haroon/rct121/blob/main/WhatsApp%20Image%202022-05-28%20at%206.50.28%20PM%20(1).jpeg?raw=true',
        nameproject:'Netmeds Clone',
        sitedetails:'An e-commerce website that provides different grooming products for men.',
        collaborate:'A collaborative project, built in 5 days by a team of 7 developers',
        techstack:'HTML | CSS | JavaScript',
        codelink:'https://github.com/Mohd-Haroon/netmeds.com/tree/main',
        liveLink:'https://condescending-knuth-5e7b4b.netlify.app/'
        
    }
    ]

export const Projects=()=>{
    const { colorMode, toggleColorMode } = useColorMode();
    const isDark = colorMode === "dark";
    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)")

    return(
        <VStack w="100%" >
            <Heading borderBottom="2px solid steelblue" mt="100px" mb="50px" fontWeight="100" align="center" fontSize="5xl">Recent Projects</Heading>
            <SimpleGrid  w={['100%', '75%', '75%',"60%"]} columns={[1,1,1,2]} gap="20px">
                {
                    data.map((ele,ind)=>(
                        <Box key={ind}  p="15px" border="2px solid steelblue" borderRadius="5px"  _hover={{boxShadow:'dark-lg',transform: 'scale(1.05)',transition:"all .25s ease-in"}} _focus={{ boxShadow: "outline" }}>
                            <Image src={ele.imageurl} w="500px" h="280px"/>
                            <Text mt="5px" fontWeight="400" fontSize="1.5rem">{ele.nameproject}</Text>
                            <Text mt="5px" fontWeight="400">{ele.sitedetails}</Text>
                            <Text mt="5px" fontWeight="400">{ele.collaborate}</Text>
                            <Text mt="5px" fontWeight="400">{ele.techstack}</Text>
                            <Flex w="70%">

                            <Button width="125px" mt={6} colorScheme="blue" onClick={() =>
                            window.open(`${ele.codelink}`)}  >Code</Button> 
                            <Spacer />
                            <Button width="125px" mt={6} ml={2} colorScheme="blue" onClick={() =>
                            window.open(`${ele.liveLink}`)} >Live</Button>
                            </Flex>
                        </Box>
                    ))
                }
                
                {/* <Box p="15px" border="2px solid steelblue" borderRadius="5px"  _hover={{boxShadow:'dark-lg'}}>
                    <Image src="https://github.com/Mohd-Haroon/rct121/blob/8dad215e643c445cced3a58a5656d0138cd32759/WhatsApp%20Image%202022-05-28%20at%206.50.27%20PM.jpeg?raw=true"/>
                    <Text mt="10px" fontWeight="300" fontSize="1.5rem">Nykaa Man Clone</Text>
                    <Text mt="10px" fontWeight="300">BigBasket an online supermarket where user can buy different daily need products</Text>
                    <Text mt="10px" fontWeight="300">A collaborative project, built in 5 days by a team of 5 developers.</Text>
                    <Text mt="10px" fontWeight="300">HTML | CSS | JavaScript</Text>
                    <Flex w="70%">

                    <Button width="125px" mt={8} colorScheme="blue" onClick={() =>
                    window.open("https://github.com/Mohd-Haroon/Nyka-man-clone")}>Code</Button> 
                    <Spacer />
                    <Button width="125px" mt={8} colorScheme="blue" onClick={() =>
                    window.open("https://remarkable-klepon-8f9936.netlify.app/")}>Live</Button>
                    </Flex>
                </Box>
                <Box p="15px" border="2px solid steelblue" borderRadius="5px"  _hover={{boxShadow:'dark-lg'}}>
                    <Image src="https://github.com/Mohd-Haroon/rct121/blob/main/WhatsApp%20Image%202022-05-28%20at%206.50.28%20PM%20(1).jpeg?raw=true"/>
                    <Text mt="10px" fontWeight="300" fontSize="1.5rem">Netmeds Clone</Text>
                    <Text mt="10px" fontWeight="300">An e-commerce website that provides different grooming products for men.</Text>
                    <Text mt="10px" fontWeight="300">A collaborative project, built in 5 days by a team of 7 developers.</Text>
                    <Text mt="10px" fontWeight="300">HTML | CSS | JavaScript </Text>
                    <Flex w="70%">

                    <Button width="125px" mt={8} colorScheme="blue" onClick={() =>
                    window.open("https://github.com/Mohd-Haroon/netmeds.com/tree/main")}>Code</Button> 
                    <Spacer />
                    <Button width="125px" mt={8} colorScheme="blue" onClick={() =>
                    window.open("https://condescending-knuth-5e7b4b.netlify.app/")}>Live</Button>
                    </Flex>
                </Box>             */}
                </SimpleGrid>
        </VStack>
    )
}



{/* <Box  p="15px" border="2px solid steelblue" borderRadius="5px"  _hover={{boxShadow:'dark-lg',transform: 'scale(1.05)',transition:"all .25s ease-in"}} _focus={{ boxShadow: "outline" }}>
                    <Image src="https://github.com/Mohd-Haroon/rct121/blob/main/WhatsApp%20Image%202022-05-28%20at%206.50.28%20PM.jpeg?raw=true" />
                    <Text mt="10px" fontWeight="300" fontSize="1.5rem">BigBasket Clone</Text>
                    <Text mt="10px" fontWeight="300">BigBasket an online supermarket where user can buy different daily need products</Text>
                    <Text mt="10px" fontWeight="300">A collaborative project, built in 5 days by a team of 5 developers.</Text>
                    <Text mt="10px" fontWeight="300">React | Redux | Node | Express | MongoDB</Text>
                    <Flex w="70%">

                    <Button width="125px" mt={8} colorScheme="blue" onClick={() =>
                    window.open("https://github.com/Mohd-Haroon/Big-basket-clone")}  >Code</Button> 
                    <Spacer />
                    <Button width="125px" mt={8} colorScheme="blue" onClick={() =>
                    window.open("https://big-basket-clone-by-masai-school.netlify.app/")} >Live</Button>
                    </Flex>
                </Box> */}


                // {
                //     imageurl:'https://github.com/Mohd-Haroon/rct121/blob/main/WhatsApp%20Image%202022-05-28%20at%206.50.27%20PM.jpeg?raw=true',
                //     nameproject:'Nykaa Man Clone',
                //     sitedetails:'BigBasket an online supermarket where user can buy different daily need products',
                //     collaborate:'A collaborative project, built in 5 days by a team of 5 developers',
                //     techstack:'HTML | CSS | JavaScript',
                //     codelink:'https://github.com/Mohd-Haroon/Nyka-man-clone',
                //     liveLink:'https://remarkable-klepon-8f9936.netlify.app/'
                // },