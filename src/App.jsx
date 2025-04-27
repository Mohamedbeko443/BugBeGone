import { Button, HStack, VStack } from "@chakra-ui/react"
import { Toaster, toaster } from "@/components/ui/toaster"


function App() {
  

  return (
    <>
    <Toaster />

      <HStack p={5}  gap={10} bg={'red'} >
      <Button onClick={()=> toaster.create({title:'hello react',type:'error'})} >Click me</Button>
      <Button onClick={()=> toaster.create({title:'hello react',type:'success'})} >Click me</Button>
    </HStack>
    
    </>
  )
}

export default App
