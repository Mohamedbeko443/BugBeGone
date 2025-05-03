import { Box, Heading, Text } from '@chakra-ui/react'
import { useEffect, useState } from 'react';
import api from "../api/api"
import { Spinner } from "@chakra-ui/react"



export default function CommentBody({comment}) {
    const fullDate = comment?.createdAt ?  comment.createdAt.split('-')[0] + '-' +comment.createdAt.split('-')[1] : 'none'
    const base = import.meta.env.VITE_BASE_URL;
    const [user,setUser] = useState(null)
    const [loading , setLoading] = useState(true)

    const getDev = async () => {
        try{
            setLoading(true)
        const res = await api.get(`${base}/api/users/${comment.userId}`);
        setUser( res.data.name);
        setLoading(false)
        }
        catch(err)
        {
            console.log(err);
            setLoading(false)
        }
        finally{
            setLoading(false)
        }
    }

    useEffect(()=>{
        getDev();
    },[])

    console.log(user)

    

    return (
        <Box w={'full'} p={3}>
            <Box bg={'gray.200'} p={{ base: 2, md: 3 }} borderRadius={5}>
                <Heading mb={3} size={'md'}>
                    {loading ?<Spinner size={'xs'} /> : user} <Text as={'span'} fontSize={'sm'} color={'gray.500'}>{fullDate}</Text>
                </Heading>
                <Text fontSize={{ base: 'sm', md: 'md' }}>{comment.content}</Text>
            </Box>
        </Box>
    )
}
