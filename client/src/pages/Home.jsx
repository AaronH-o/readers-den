// import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Flex, Heading, Text, Container } from "@chakra-ui/react";
import Auth from "../utils/auth";

const Home = () => {
  const navigate = useNavigate();

  return (
    <Container maxW="container.md">
      <Flex direction="column" align="center" justify="center" minH="100vh">
        <Box w="100%" p={6} boxShadow="md" borderRadius="md" textAlign="center">
          <Heading as="h1" size="2xl" mb={6}>
            Welcome to Readers Den
          </Heading>
          {Auth.loggedIn() ? (
            <>
              <Text fontSize="xl" mb={4}>
                You are logged in. Where would you like to go?
              </Text>
              <Flex justify="center" mb={4}>
                <Button
                  colorScheme="blue"
                  mr={2}
                  onClick={() => navigate("/clubs")}
                >
                  Clubs
                </Button>
                <Button
                  colorScheme="teal"
                  onClick={() => navigate("/bookshelf")}
                >
                  Bookshelf
                </Button>
              </Flex>
            </>
          ) : (
            <Text fontSize="xl">Please sign in to continue.</Text>
          )}
        </Box>
      </Flex>
    </Container>
  );
};

export default Home;
