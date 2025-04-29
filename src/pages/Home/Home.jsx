import { Box } from "@chakra-ui/react";
import BugDashboard from "../../components/BugDashboard";
import BugFilter from "../../components/BugFilter";



export default function Home() {
    return (
        <Box>
            <BugDashboard />
            <BugFilter />
        </Box>

    )
}
