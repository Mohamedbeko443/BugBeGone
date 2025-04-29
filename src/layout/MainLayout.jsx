import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import { Box } from "@chakra-ui/react";


export default function MainLayout() {
  return (
    <Box>
        <Header/>
        <Outlet/>
    </Box>
  )
}
