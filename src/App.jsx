import { Button, Container, HStack, VStack } from "@chakra-ui/react"
import { Toaster, toaster } from "@/components/ui/toaster"
import Login from "./pages/login/Login"
import Header from "./components/Header"
import BugCard from "./components/BugCard"
import BugDetails from "./pages/BugDetails/BugDetails"
import BugDashboard from "./components/BugDashboard"


function App() {
  

  return (
    <>
    <Toaster />

      <Header/>

    <BugDashboard/>
    
    
    </>
  )
}

export default App
