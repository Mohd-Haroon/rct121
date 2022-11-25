import {
  Box,
  Center,
  Container,
  Grid,
  GridItem,
  SimpleGrid,
  ChakraProvider,
} from "@chakra-ui/react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <div>
          <SimpleGrid columns={[1,3,3,3]} spacing={10}>
            <Box bg="tomato" colspan={1} rowspan={1} height="80px">Nav</Box>
            <Box bg="tomato" colspan={2} rowspan={2} height="80px">Content</Box>
            <Box bg="tomato" colspan={1} rowspan={2} height="80px">Widget</Box>
          </SimpleGrid>
        </div>
      </ChakraProvider>
    </div>
  );
}

export default App;
