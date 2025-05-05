import { Box, Button, Container, Flex, Heading, HStack, Text } from "@chakra-ui/react"
import { toaster } from "@/components/ui/toaster"
import { FiLogOut } from "react-icons/fi";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import AddModal from "./AddModal";
import useAuthStore from './../store/Auth';
import {jwtDecode} from 'jwt-decode';
import api from "../api/api"
import { Spinner } from "@chakra-ui/react"


export default function Header() {
    const [open , setOpen] = useState(false);
    const navigate = useNavigate();
    const accessToken = useAuthStore((state) => state.accessToken);
    const userData = accessToken ? jwtDecode(accessToken) : null;
    const role = userData?.roles[0].split("_")[1];
    const base = import.meta.env.VITE_BASE_URL;
    const [loading , setLoading] = useState(false)

    
    
    const handleLogout =  () => {
            try{
                setLoading(true);
                const res = api.post(`${base}/api/auth/logout`, {}, {withCredentials: true});
                console.log(res.data);
                toaster.create({
                    title: 'you have been logged out successfully',
                    type: 'success'
                });
                useAuthStore.persist.clearStorage();
                navigate('/login');
                console.log("Logged out successfully");
            } 
            catch (err){
                setLoading(false);
                console.log(err);
                toaster.create({
                    title: 'Something went wrong!',
                    description: 'Please try again.',
                    type: 'error'
                });
            }
            finally{
                setLoading(false);
            }
    }

    return (
    <Container my={5}  maxW={"7xl"} >
        
        <Flex p={6} justify={'space-between'}  gap={{base:6,md:0}}  direction={{base:'column',md:'row'}} align={{base:'flex-start',md:'center'}}  borderRadius={7} w={'full'} boxShadow={'md'} >
                <Box   bg={'white'}>
                    <Heading  size={'3xl'} >
                        BugBeGone
                    </Heading>
                    <Text  color={"gray.400"}>Logged in as Mohamed Medhat ({role})</Text>
                </Box>

                <HStack gap={4} >
                    <Button variant={'solid'} onClick={()=>setOpen(true)} colorPalette={'black'}>New Bug</Button>
                    <Button onClick={handleLogout} disabled={loading} variant={'solid'} colorPalette={'red'}>  <FiLogOut />  {loading ? <Spinner size={'md'} /> : "Logout"} </Button>
                </HStack>
        </Flex>

        <AddModal  open={open} setOpen={setOpen}  />

    </Container>
  )
}
