import { Box, Button, Container, Flex, Heading, HStack, Text, Textarea, VStack } from "@chakra-ui/react";



export default function BugDetails() {
    return (
        <Container gap={2} maxW={'7xl'} >

                <Box py={4} >
                        <Button w={'fit'} >Back to List</Button>
                </Box>


            <Flex mb={8} p={1}    w={'full'} boxShadow={'lg'} borderRadius={5}  gap={3} direction={'column'}>

                <Flex  borderRadius={5} w={'full'}  direction={'column'} p={3}  >

                    <Flex   w={'full'}  justify={'space-between'} align={'center'} p={6} >
                        <Heading size={'3xl'}> Bug Title  </Heading>
                        <Text fontStyle={'md'} color={'gray.400'}> Created: 4/20/2025 </Text>
                    </Flex>

                    <Box  p={4}  >
                        <Heading mb={3} size={'2xl'} >Description</Heading>
                        <Text fontStyle={'md'} color={'gray.500'} >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora, deleniti.</Text>
                    </Box>  

                    <Heading  px={'15px'} my={3} size={'2xl'} >Comments (2)</Heading>


                    <VStack    w={'full'}>
                        <Box w={'full'}  p={3}  >
                            

                            <Box bg={'gray.200'} p={3} >
                                <Heading mb={3} size={'md'}> Mohamed Medhat  <Text as={'span'} textStyle={'sm'} color={'gray.500'}> 4/22/2025 </Text>  </Heading>
                                <Text>This is a comment btw</Text>
                            </Box>
                        </Box>
                        <Box w={'full'}  p={3}  >
                            

                            <Box bg={'gray.200'} p={3} >
                                <Heading mb={3} size={'md'}> Mohamed Medhat  <Text as={'span'} textStyle={'sm'} color={'gray.500'}> 4/22/2025 </Text>  </Heading>
                                <Text>This is a comment btw</Text>
                            </Box>
                        </Box>
                    </VStack>

                    <Box  p={6} >
                            <Textarea autoresize  size="xl" placeholder="Add a comment..." />

                            <Flex mt={2} justify={'flex-end'} w={'full'}  >
                                    <Button w={'fit'} >Add Comment</Button>
                            </Flex>
                            
                    </Box>



                </Flex>
            </Flex>
        </Container>
    )
}
