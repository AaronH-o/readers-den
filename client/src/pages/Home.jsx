import { useQuery } from "@apollo/client";
import { Box, Flex, Spinner, Container } from "@chakra-ui/react";

import BookList from "../components/BookList";
import BookReviewForm from "../components/BookReviewForm";

import { QUERY_BOOKS } from "../utils/queries";

const Home = () => {
  const { loading, data } = useQuery(QUERY_BOOKS);
  const books = data?.books || [];

  return (
    <Container maxW="container.xl" p={4}>
      <Flex direction="column" align="center" justify="center">
        <Box
          w="100%"
          maxW="800px"
          mb={4}
          p={4}
          borderWidth={1}
          borderRadius="lg"
          borderColor="gray.300"
        >
          <BookReviewForm />
        </Box>
        <Box w="100%" maxW="800px" mb={4}>
          {loading ? (
            <Flex justify="center">
              <Spinner size="xl" />
            </Flex>
          ) : (
            <BookList books={books} title="Bookshelf" />
          )}
        </Box>
      </Flex>
    </Container>
  );
};

export default Home;
