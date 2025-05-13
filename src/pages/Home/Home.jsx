import { useEffect, useState } from "react";
import BugDashboard from "../../components/BugDashboard";
import BugFilter from "../../components/BugFilter";
import useBugsStore from "../../store/Bugs";



export default function Home() {
    const [searchText , setSearchText] = useState("");
    const [severity , setSeverity] = useState("");
    const { fetchBugs } = useBugsStore();


    useEffect(() => {
        fetchBugs();
    },[])

    
    return (
        <>
            <BugDashboard  />
            <BugFilter searchText={searchText} setSearchText={setSearchText}  severity={severity} setSeverity={setSeverity} />
        </>

    )
}
