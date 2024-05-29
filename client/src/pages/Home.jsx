// import React from "react";
import { Box, Heading, Text, Flex } from "@chakra-ui/react";
import Auth from "../utils/auth";
const Home = () => {
  return (
    <Flex direction="column" align="center" justify="center" minH="100vh">
      <Box>
        <Heading>Welcome to Readers Den</Heading>
        <Text>Please sign in to continue.</Text>
      </Box>
    </Flex>
  );
};

export default Home;
