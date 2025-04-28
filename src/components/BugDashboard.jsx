import { Box, Heading, SimpleGrid, Text, Flex, Container } from '@chakra-ui/react';
import { FaBug, FaExclamationCircle, FaClock } from 'react-icons/fa';
import { MdErrorOutline } from 'react-icons/md';


export default function BugDashboard() {

    const bugData = [
        { label: 'Total Bugs', count: 6, icon: FaBug },
        { label: 'Open Bugs', count: 2, icon: FaExclamationCircle },
        { label: 'In Progress', count: 1, icon: FaClock },
        { label: 'Critical Bugs', count: 1, icon: MdErrorOutline },
    ];

    return (
        <Container maxW="7xl" py={5}>
            <Heading size={'3xl'} mb={6} color="black">
                Bug Dashboard
            </Heading>
            <SimpleGrid gap={4} columns={{ base: 1, md: 2, lg: 4 }} spacing={6}>
                {bugData.map((bug, index) => (
                    <Box
                        key={index}
                        p={5}
                        borderWidth="1px"
                        borderRadius="lg"
                        bg="white"
                        transition="all 0.3s"
                        _hover={{ boxShadow: 'md' }}
                    >
                        <Flex justify="space-between" align="center" mb={3}>
                            <Text fontSize="md" color="gray.700">
                                {bug.label}
                            </Text>
                            <Box fontSize="24px" color="gray.600">
                                <bug.icon  color='red' />
                            </Box>
                        </Flex>
                        <Text fontSize="2xl" fontWeight="bold" color="black">
                            {bug.count}
                        </Text>
                    </Box>
                ))}
            </SimpleGrid>
        </Container>
    )
}
