import React from "react";
import { Box, Image, Text, VStack } from "@chakra-ui/react";

const BookCard = ({ title, author, image }) => {
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={4}
      mb={6}
      width="100%"
    >
      <Image src={image} alt={title} borderRadius="md" mb={4} />
      <VStack align="start" spacing={2}>
        <Text fontWeight="bold" fontSize="lg">
          {title}
        </Text>
        <Text fontSize="md" color="gray.600">
          {author}
        </Text>
      </VStack>
    </Box>
  );
};

export default BookCard;
