import { EmptyState, VStack } from "@chakra-ui/react"
import { FaBug } from 'react-icons/fa';

export default function EmptyListMessage() {
    return (
        <EmptyState.Root  size={'lg'} >
            <EmptyState.Content>
                <EmptyState.Indicator>
                    <FaBug />
                </EmptyState.Indicator>
                <VStack textAlign="center">
                    <EmptyState.Title>No Bugs Found</EmptyState.Title>
                    <EmptyState.Description>
                    Hooray! No bugs here. Keep up the good work!
                    </EmptyState.Description>
                </VStack>
            </EmptyState.Content>
        </EmptyState.Root>
    )
}
