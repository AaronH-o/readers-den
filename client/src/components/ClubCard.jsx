// import React from "react";
import { Box, Image, Text, Button, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const ClubCard = ({ name, image }) => {
  const navigate = useNavigate();

  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={4}
      mb={6}
      width="100%"
    >
      <Image src={image} alt={name} borderRadius="md" mb={4} />
      <VStack align="start" spacing={2}>
        <Text fontWeight="bold" fontSize="lg">
          {name}
        </Text>
        <Button
          colorScheme="blue"
          onClick={() => navigate("/create-club")}
          size="sm"
        >
          Create Club
        </Button>
        <Button
          colorScheme="green"
          onClick={() => navigate("/join-club")}
          size="sm"
        >
          Join Club
        </Button>
        <Button
          colorScheme="teal"
          onClick={() => navigate("/my-bookshelf")}
          size="sm"
        >
          My Bookshelf
        </Button>
      </VStack>
    </Box>
  );
};

export default ClubCard;
