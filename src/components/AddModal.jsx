import { Button, Dialog, Field, Input,Textarea,  Portal, Stack } from "@chakra-ui/react"
import { useState } from "react"
import SelectComponent from "./SelectComponent";



export default function AddModal({ open, setOpen }) {
    const [selectValue , setSelectValue] = useState(null);

    return (
        <Dialog.Root size={{base:'xs',md:'md'}} open={open} onOpenChange={(e) => setOpen(e.open)} placement={'center'} >
            <Portal>
                <Dialog.Backdrop />
                <Dialog.Positioner>
                    <Dialog.Content>
                        <Dialog.Header>
                            <Dialog.Title>Report New Bug</Dialog.Title>
                        </Dialog.Header>
                        <Dialog.Body pb="4">
                            <Stack gap="4">
                                <Field.Root>
                                    <Field.Label>First Name</Field.Label>
                                    <Input placeholder="First Name" />
                                </Field.Root>

                                <Field.Root >
                                    <Field.Label>
                                        Description <Field.RequiredIndicator />
                                    </Field.Label>
                                    <Textarea autoresize  placeholder="Detailed Description of the Bug" variant="outline" />
                                </Field.Root>

                                <Field.Root >
                                    <Field.Label>
                                        Severity <Field.RequiredIndicator />
                                    </Field.Label>
                                    <SelectComponent value={selectValue} setValue={setSelectValue} />
                                </Field.Root>

                                
                            </Stack>
                        </Dialog.Body>
                        <Dialog.Footer>
                            <Dialog.ActionTrigger asChild>
                                <Button colorPalette={'red'} variant="solid">Cancel</Button>
                            </Dialog.ActionTrigger>
                            <Button  onClick={()=> alert(selectValue)} >Submit Bug</Button>
                        </Dialog.Footer>
                    </Dialog.Content>
                </Dialog.Positioner>
            </Portal>
        </Dialog.Root>
    )
}
