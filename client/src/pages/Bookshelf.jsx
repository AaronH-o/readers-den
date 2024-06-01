// import React from "react";
import { Box, Flex, Heading, Container, SimpleGrid } from "@chakra-ui/react";
import BookCard from "../components/BookCard";
import { useQuery } from "@apollo/client";
import { QUERY_BOOKS } from "../utils/queries";

const groupBooksByClub = (books) => {
  return books.reduce((groups, book) => {
    const club = book.club;
    if (!groups[club]) {
      groups[club] = [];
    }
    groups[club].push(book);
    return groups;
  }, {});
};

const Bookshelf = () => {
  const { data } = useQuery(QUERY_BOOKS);
  if (!data) {
    return;
  }
  console.log(data);

  const groupedBooks = groupBooksByClub(data.books);
  console.log(groupedBooks);

  return (
    <Container maxW="container.md">
      <Flex direction="column" align="center" justify="center" minH="100vh">
        <Box w="100%" p={6} boxShadow="md" borderRadius="md" textAlign="center">
          <Heading as="h1" size="2xl" mb={6}>
            Bookshelf
          </Heading>
          {Object.keys(groupedBooks).map((club, index) => (
            <Box key={index} mb={8} w="100%">
              <Heading as="h2" size="lg" mb={4} textAlign="left">
                {club}
              </Heading>
              <SimpleGrid columns={[1, null, 2]} spacing={6}>
                {groupedBooks[club].map((book, idx) => (
                  <BookCard
                    key={idx}
                    title={book.title}
                    author={book.author}
                    image={book.image}
                    bookId={book._id}
                  />
                ))}
              </SimpleGrid>
            </Box>
          ))}
        </Box>
      </Flex>
    </Container>
  );
};

export default Bookshelf;
