import { Badge, Box, Flex, Heading, HStack, Text } from "@chakra-ui/react";
import { LuBug } from "react-icons/lu";
import { useNavigate } from 'react-router-dom';
import api from "../api/api"
import { useEffect, useState } from "react";
import { Spinner } from "@chakra-ui/react"



export default function BugCard({bug}) {
    const base = import.meta.env.VITE_BASE_URL;

    const [dev,setDev] = useState(null);
    const fullDate = bug.updatedAt.split('-')[0] + '-' +bug.updatedAt.split('-')[1] 
    const navigate = useNavigate();


        const getDev = async () => {
            const res = await api.get(`${base}/api/users/${bug.developerId}`);
            setDev(res.data.name);
        }
        useEffect(()=>{
            getDev();
        },[])



    return (
    <Flex  onClick={()=> navigate(`/bug/${bug.id}`) } cursor={'pointer'} transition={'all 0.2s ease'} _hover={{ms:6,boxShadow:'lg'}} boxShadow={'md'} gap={1} p={3} borderRadius={7}  borderStart={'5px solid black'} w={'full'}    direction={'column'} justify={'center'} align={'center'}  >
        <Flex   w={'full'} p={1} justify={'space-between'} align={'center'}  >
            <HStack gap={3}>
                <LuBug size={'25px'} color="black" />
                <Heading size={'xl'}>{bug.title}</Heading>
            </HStack>

            <HStack gap={3}>
            <Badge colorPalette="green">{bug.severity}</Badge>
            <Badge colorPalette="red">{bug.status}</Badge>
            </HStack>
        </Flex>

        <Flex   p={1}  w={'full'} justify={'flex-start'} >
            <Text color={"gray.400"} >{bug.description}</Text>
        </Flex>
 
        <Flex  w={'full'} align={'center'}  justify={'space-between'}  >
                <HStack gap={1}>
                    <Box as={'span'} w={'8px'} h={"8px"} borderRadius={'50%'} bg={'green'}></Box>
                    <Text textStyle={'sm'} color={'gray.500'} >Assigned to : {dev ? dev : <Spinner size={'xs'} />} </Text>
                </HStack>
                <Text textStyle={'sm'} color={'gray.500'} >{fullDate}</Text>
        </Flex>

    </Flex>
  )
}
