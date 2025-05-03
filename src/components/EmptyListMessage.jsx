import { EmptyState, VStack } from "@chakra-ui/react"
import { FaBug } from 'react-icons/fa';

export default function EmptyListMessage({message = "Hooray! No bugs here. Keep up the good work!" , title = "No Bugs Found"}) {
    return (
        <EmptyState.Root  size={'lg'} >
            <EmptyState.Content>
                <EmptyState.Indicator>
                    <FaBug />
                </EmptyState.Indicator>
                <VStack textAlign="center">
                    <EmptyState.Title>{title}</EmptyState.Title>
                    <EmptyState.Description>
                    {message}
                    </EmptyState.Description>
                </VStack>
            </EmptyState.Content>
        </EmptyState.Root>
    )
}
