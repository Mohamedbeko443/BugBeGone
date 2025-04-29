import {
    Container,
    Flex,
    Input,
    InputGroup,
    NativeSelect,
    Tabs,
    VStack,
} from "@chakra-ui/react";
import { LuSearch, LuFilter } from "react-icons/lu";
import { useState } from "react";
import BugCard from "./BugCard";
import LoadingScreen from "./LoadingScreen";

export default function BugFilter() {
    const [severity, setSeverity] = useState("");

    const tabOptions = [
        { value: "all", label: "All" },
        { value: "open", label: "Open" },
        { value: "inProgress", label: "In Progress" },
        { value: "review", label: "Review" },
        { value: "closed", label: "Closed" },
    ];

    return (
        <Container maxW="7xl" py={4}>
            {/* Search + Severity */}
            <Flex
                direction={{ base: "column", md: "row" }}
                gap={4}
                mb={6}
                align={{ base: "stretch", md: "center" }}
                justify="space-between"
                flexWrap="wrap"
            >
                {/* Search */}
                <InputGroup startElement={<LuSearch />} flex="1" minW="240px">
                    <Input
                        placeholder="Search bugs..."
                        bg="white"
                        color="black"
                        border="1px solid black"
                        _placeholder={{ color: "gray.500" }}
                    />
                </InputGroup>

                {/* Severity Filter */}
                <Flex align="center" gap={2} minW="200px">
                    <LuFilter />
                    <NativeSelect.Root size="sm" width="100%">
                        <NativeSelect.Field
                            placeholder="Sort by severity"
                            value={severity}
                            onChange={(e) => { setSeverity(e.target.value); alert(e.target.value) }}
                            bg="white"
                            color="black"
                            border="1px solid black"
                        >
                            <option value="critical">Critical</option>
                            <option value="high">High</option>
                            <option value="medium">Medium</option>
                            <option value="low">Low</option>
                        </NativeSelect.Field>
                        <NativeSelect.Indicator />
                    </NativeSelect.Root>
                </Flex>
            </Flex>

            {/* Status Tabs */}
            <Tabs.Root defaultValue="all"   variant="plain">
                {/* Wide: row, Mobile: column */}
                <Tabs.List
                    p="1"
                    gap={2}
                    width="100%"
                    display={{ base: "flex" }}
                    flexDir={{ base: "column", md: "row" }}
                    bg="blackAlpha.100"
                    borderRadius={5}
                >
                    {tabOptions.map((tab) => (
                        <Tabs.Trigger
                            key={tab.value}
                            value={tab.value}
                            flex="1"
                            px={4}
                            py={2}
                            textAlign="center"
                            rounded="md"
                            _selected={{
                                bg: "black",
                                color: "white",
                                fontWeight: "bold",
                            }}

                        >
                            {tab.label}
                        </Tabs.Trigger>
                    ))}
                    <Tabs.Indicator display="none" />
                </Tabs.List>
                <Tabs.Content value="all">
                    <VStack gap={3}>
                            <BugCard/>
                            <BugCard/>
                            <BugCard/>
                            <BugCard/>
                            <BugCard/>
                    </VStack>

                </Tabs.Content>

                <Tabs.Content value="open">
                <VStack gap={3}>
                            <BugCard/>
                            <BugCard/>
                            <BugCard/>
                            
                    </VStack>
                </Tabs.Content>
                <Tabs.Content value="inProgress">
                <VStack gap={3}>
                            <BugCard/>
                            <BugCard/>
                            
                    </VStack>
                </Tabs.Content>

                <Tabs.Content value="review">
                <VStack gap={3}>
                            <BugCard/>
                            <BugCard/>
                            <BugCard/>
                            <BugCard/>
                            <BugCard/>
                    </VStack>
                </Tabs.Content>

                <Tabs.Content value="closed">
                <VStack gap={3}>
                            <LoadingScreen/>
                    </VStack>
                </Tabs.Content>
                
            </Tabs.Root>
        </Container>
    );
}
