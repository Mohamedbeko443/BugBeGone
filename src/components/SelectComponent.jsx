import { NativeSelect } from "@chakra-ui/react"

export default function SelectComponent({value , setValue}) {
    return (
        <NativeSelect.Root size="sm" >
            <NativeSelect.Field 
                value={value}
                onChange={(e) => setValue(e.currentTarget.value)}
            >
                <option value="LOW">Low</option>
                <option value="MEDIUM">Medium</option>
                <option value="HIGH">High</option>
                <option value="CRITICAL">Critical</option>
            </NativeSelect.Field>
            <NativeSelect.Indicator />
        </NativeSelect.Root>
    )
}
