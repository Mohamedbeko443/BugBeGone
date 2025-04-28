import { Button, Container, HStack, VStack } from "@chakra-ui/react"
import { Toaster, toaster } from "@/components/ui/toaster"
import Login from "./pages/login/Login"
import Header from "./components/Header"
import BugCard from "./components/BugCard"


function App() {
  

  return (
    <>
    <Toaster />

      <Header/>

    <Container  maxW={"7xl"}>
        <VStack gap={4}>
        <BugCard/>
        <BugCard/>
        <BugCard/>
        <BugCard/>
        </VStack>
    </Container>
    
    
    </>
  )
}

export default App
