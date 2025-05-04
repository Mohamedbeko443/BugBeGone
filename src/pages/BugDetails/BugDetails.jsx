import { Box, Button, Container, Flex, Heading, HStack, Text, Textarea, VStack } from "@chakra-ui/react";
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import AlertDialog from './../../components/AlertDialog';
import useBugsStore from "../../store/Bugs";
import { useParams } from 'react-router-dom';
import LoadingScreen from "../../components/LoadingScreen"
import api from "../../api/api"
import EmptyListMessage from "../../components/EmptyListMessage";
import CommentBody from "../../components/CommentBody";
import { toaster } from "@/components/ui/toaster"
import useAuthStore from "../../store/Auth";
import { jwtDecode } from 'jwt-decode';
import UpdateModal from "../../components/UpdateModal";





export default function BugDetails() {
    const navigate = useNavigate();
    const base = import.meta.env.VITE_BASE_URL;
    const [open , setOpen] = useState(false);
    const [comments , setComments] = useState([]);
    const [addCommentLoading, setAddCommentLoading] = useState(false);
    const [value , setValue] = useState("");
    const { id } = useParams();
    const {fetchBugById , error ,  loading , currentBug} = useBugsStore();
    const fullDate = currentBug?.createdAt ?  currentBug.createdAt.split('-')[0] + '-' +currentBug.createdAt.split('-')[1] : 'none';
    const accessToken = useAuthStore((state) => state.accessToken);
    const userData = accessToken ? jwtDecode(accessToken) : null;
    const role = userData?.roles[0].split("_")[1];
    const [openModal , setModalOpen] = useState(false);

    console.log(role);
    console.log(userData);



    const getBug = async () => {
        try {
            const bug = await fetchBugById(id);
        } catch  {
            navigate('/')
        }
    }

    const getComments = async () => {
        try{
            const res = await api.get(`${base}/api/comments/${id}`);
            console.log(res.data);
            setComments(res.data)
        }
        catch
        {
            toaster.create({title:'Failed to Fetch Comments',type:'error'});
        }
    }


    const handleAddComment = async () => {
        try{
            setAddCommentLoading(true);
            const res = await api.post(`${base}/api/comments/${id}`,{content: value,bugId: currentBug.id,userId: 0});

            toaster.create({title:'Comment has been created successfully',type:'success'});
        }
        catch(err)
        {
            setAddCommentLoading(false);
            console.log(err);
            toaster.create({title:'Failed to Create Comment',type:'error'});
        }
        finally{
            setAddCommentLoading(false);
        }
    }

    
    console.log(currentBug);
    console.log(comments);
    console.log(value);
    

    useEffect(()=>{
        getBug();
    },[id])

   


    useEffect(()=>{
        getComments();
    },[id])

    if(loading || !currentBug)
    {
        return <LoadingScreen/>
    }

    if(error)
    {
        return <Text color={'red.500'}>{error}</Text>
    }


    return (
        <Container gap={2} maxW={'7xl'}>
            <Flex justify={'space-between'}  align={'center'}  py={4}>
                <Button onClick={() => navigate('/')} w={'fit-content'}>Back to List</Button>

                <HStack gap={3}>
                <Button w={'fit-content'} onClick={()=> setModalOpen(true)} > Edit Report</Button>
                <Button  onClick ={()=> setOpen(true)} colorPalette={'red'} w={'fit-content'}> Delete </Button>
                </HStack>
            </Flex>

            <Flex mb={8} p={1} w={'full'} boxShadow={'lg'} borderRadius={5} gap={3} direction={'column'}>
                <Flex borderRadius={5} w={'full'} direction={'column'} p={{ base: 2, md: 3 }}>
                    <Flex w={'full'} justify={'space-between'} align={'center'} p={{ base: 2, md: 6 }}>
                        <Heading size={{ base: 'lg', md: '2xl', lg: '3xl' }}>{currentBug.title}</Heading>
                        <Text fontSize={{ base: 'sm', md: 'md' }} color={'gray.400'}>Created: {fullDate}</Text>
                    </Flex>

                    <Box p={{ base: 2, md: 4 }}>
                        <Heading mb={3} size={{ base: 'md', md: '2xl' }}>Description</Heading>
                        <Text fontSize={{ base: 'sm', md: 'md' }} color={'gray.500'}>
                            {currentBug.description}
                        </Text>
                    </Box>

                    <Heading px={'15px'} my={3} size={{ base: 'md', md: '2xl' }}>Comments ({comments.length})</Heading>

                    <VStack w={'full'} spacing={4}>
                        {comments.length === 0 ? (<EmptyListMessage title="No comments" message="Add comments to help other devs to solve this problem " />) : (comments.map((comment =>  <CommentBody key={comment.id} comment={comment} /> )))}
                    </VStack>

                    <Box p={{ base: 2, md: 6 }}>
                        <Textarea value={value} onChange={(e)=>setValue(e.target.value)} resize="vertical" size="lg" placeholder="Add a comment..." />

                        <Flex mt={2} justify={'flex-end'} w={'full'}>
                            <Button w={'fit-content'}>Add Comment</Button>
                        </Flex>
                    </Box>
                </Flex>
            </Flex>

            <AlertDialog open={open} id={currentBug.id} setOpen={setOpen} />
            <UpdateModal  open={openModal} id={id} SelectedBug={currentBug}  setOpen={setModalOpen} />
        </Container>
    );
}
