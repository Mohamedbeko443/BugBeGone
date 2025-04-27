import { Button } from "@chakra-ui/react"
import { useState } from "react"



export default function Login() {

    const [count , setCount] = useState(0)

  return (
        <Button onClick={()=> setCount(prev => prev + 1)} >{count}</Button>
  )
}
