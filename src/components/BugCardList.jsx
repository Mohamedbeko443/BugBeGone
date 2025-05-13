import BugCard from './BugCard'
import EmptyListMessage from './EmptyListMessage'
import useBugsStore from '../store/Bugs'
import LoadingScreen from './LoadingScreen';
import { VStack } from '@chakra-ui/react';

export default function BugCardList({bugs , searchText, severity }) {
    const { loading } = useBugsStore();

    const filtered = bugs.filter((bug) => {
        const matchesSearch = bug.title.toLowerCase().includes(searchText.toLowerCase());
        const matchesSeverity = severity ? bug.severity === severity : true;
        return matchesSearch && matchesSeverity;
    });

    if (loading)
        return <LoadingScreen />

    if(!filtered.length) {
        return <EmptyListMessage  />
    }

    return (
        <VStack w={'full'} gap={3} >
            {filtered.map((bug) => (
                <BugCard key={bug.id} bug={bug} />
            ))}
        </VStack>
    )
}
