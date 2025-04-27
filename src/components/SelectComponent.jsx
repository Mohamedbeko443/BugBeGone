import { NativeSelect } from "@chakra-ui/react"

export default function SelectComponent({value , setValue}) {
    return (
        <NativeSelect.Root size="sm" >
            <NativeSelect.Field 
                value={value}
                onChange={(e) => setValue(e.currentTarget.value)}
            >
                <option  value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
                <option value="critical">Critical</option>
            </NativeSelect.Field>
            <NativeSelect.Indicator />
        </NativeSelect.Root>
    )
}
