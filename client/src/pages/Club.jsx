import { Navigate, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { Box, Flex, Text, Container, Spinner } from "@chakra-ui/react";

import BookList from "../components/BookList";
import BookReviewForm from "../components/BookReviewForm";

import { QUERY_USER, QUERY_ME } from "../utils/queries";
import Auth from "../utils/auth";

const Club = () => {
  const { username: userParam } = useParams();

  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam },
  });

  const user = data?.me || data?.user || {};

  // Navigate to personal profile page if username is yours
  if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
    return <Navigate to="/me" />;
  }

  if (loading) {
    return (
      <Flex justify="center" mt={4}>
        <Spinner size="xl" />
      </Flex>
    );
  }

  if (!user?.username) {
    return (
      <Container>
        <Text fontSize="lg" mt={4}>
          You need to be logged in to see this. Use the navigation links above
          to sign up or log in!
        </Text>
      </Container>
    );
  }

  return (
    <Container maxW="container.xl" p={4}>
      <Flex direction="column" align="center" justify="center">
        <Box w="100%" maxW="800px" mb={5}>
          <BookList
            books={user.books}
            title={`${user.username}'s reviews...`}
            showTitle={false}
            showUsername={false}
          />
        </Box>
        {!userParam && (
          <Box
            w="100%"
            maxW="800px"
            mb={3}
            p={3}
            borderWidth={1}
            borderRadius="lg"
            borderColor="gray.300"
          >
            <BookReviewForm />
          </Box>
        )}
      </Flex>
    </Container>
  );
};

export default Club;
