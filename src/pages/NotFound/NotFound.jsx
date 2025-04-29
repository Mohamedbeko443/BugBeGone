import React from 'react';
import { Box, Heading, Text, VStack, Button, Flex } from '@chakra-ui/react';
import { FaBug } from 'react-icons/fa';
import { Link } from 'react-router-dom';


import './NotFound.css';

export default function NotFound() {
    return (
        <Box
            bg="white"
            color="black"
            h="100vh"
            display="flex"
            alignItems="center"
            justifyContent="center"
            px={4}
        >
            <VStack spacing={6} textAlign="center">
                <Flex align="center" justify="center">
                    <Heading fontSize="8xl" color="black">
                        404
                    </Heading>
                    <Box
                        as={FaBug}
                        fontSize="80px"
                        color="black"
                        className="float"
                        ml={4} 
                    />
                </Flex>
                <Text fontSize="lg" color="black">
                    Oops! The page you're looking for doesn't exist.
                </Text>
                <Button
                    as={Link}
                    to="/"
                    bg="black"
                    color="white"
                    _hover={{ bg: "gray.800" }}
                >
                    Go Home
                </Button>
            </VStack>
        </Box>
    );
}
