// import React from "react";
import { Box, Heading, Flex, Link as ChakraLink } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Clubs = () => {
  return (
    <Flex direction="column" align="center" justify="center" minH="100vh">
      <Box>
        <Heading>Clubs</Heading>
        <ChakraLink as={Link} to="/create-club">
          Create Club
        </ChakraLink>
        <ChakraLink as={Link} to="/join-club">
          Join Club
        </ChakraLink>
        <ChakraLink as={Link} to="/my-bookshelf">
          My Bookshelf
        </ChakraLink>
      </Box>
    </Flex>
  );
};

export default Clubs;
