import { Badge, Box, Flex, Heading, HStack, Text } from "@chakra-ui/react";
import { LuBug } from "react-icons/lu";
import { useNavigate } from 'react-router-dom';


export default function BugCard() {
    const navigate = useNavigate();

  return (
    <Flex  onClick={()=> navigate('/bug/1') } cursor={'pointer'} transition={'all 0.2s ease'} _hover={{ms:6,boxShadow:'lg'}} boxShadow={'md'} gap={1} p={3} borderRadius={7}  borderStart={'5px solid black'} w={'full'}    direction={'column'} justify={'center'} align={'center'}  >
        <Flex   w={'full'} p={1} justify={'space-between'} align={'center'}  >
            <HStack gap={3}>
                <LuBug size={'25px'} color="black" />
                <Heading size={'xl'}>Bug Title</Heading>
            </HStack>

            <HStack gap={3}>
            <Badge colorPalette="green">Success</Badge>
            <Badge colorPalette="red">Removed</Badge>
            </HStack>
        </Flex>

        <Flex   p={1}  w={'full'} justify={'flex-start'} >
            <Text color={"gray.400"} >bug description</Text>
        </Flex>
 
        <Flex  w={'full'} align={'center'}  justify={'space-between'}  >
                <HStack gap={1}>
                    <Box as={'span'} w={'8px'} h={"8px"} borderRadius={'50%'} bg={'green'}></Box>
                    <Text textStyle={'sm'} color={'gray.500'} >Assigned to :   Mohamed Medhat </Text>
                </HStack>
                <Text textStyle={'sm'} color={'gray.500'} >Updated 2mins ago</Text>
        </Flex>

    </Flex>
  )
}
