import { useEffect } from "react";
import BugDashboard from "../../components/BugDashboard";
import BugFilter from "../../components/BugFilter";
import useBugsStore from "../../store/Bugs";



export default function Home() {

    const { fetchBugs} = useBugsStore();


    useEffect(() => {
        fetchBugs();
    },[])

    
    return (
        <>
            <BugDashboard  />
            <BugFilter />
        </>

    )
}
