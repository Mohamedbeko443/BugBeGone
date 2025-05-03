import { Button, Dialog, Field, Input, Textarea, Portal, Stack } from "@chakra-ui/react"
import { useState } from "react"
import SelectComponent from "./SelectComponent";
import useBugsStore from "../store/Bugs";
import { NumberInput } from "@chakra-ui/react"
import { toaster } from "@/components/ui/toaster"
import { Spinner } from "@chakra-ui/react"




export default function AddModal({ open, setOpen }) {

    const { createBug, loading} = useBugsStore();
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        severity: 'low',
        developerId: 0
    });



    const handleChange = (field, value) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));

    };

        
    const handleSubmit = async () => {
        if (formData.description.length < 5 || formData.title.length < 5) {
            toaster.create({
                title: 'Please Enter right data',
                description : 'title and description must me at least 5 characters',
                type: 'error'
            })
            return
        }

        try {
            await createBug({
                title: formData.title,
                description: formData.description,
                severity: formData.severity,
                developerId: formData.developerId
            });

            setOpen(false);
            resetForm();
        }
        catch {
            null
        }
    }

    const resetForm = ()=> {
        setFormData(
            {
                title: '',
                description: '',
                severity: 'low',
                developerId: 0
            }
        )
    }

    return (
        <Dialog.Root size={{ base: 'xs', md: 'md' }} open={open} onOpenChange={(e) => setOpen(e.open)} placement={'center'} >
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
                                    <Field.Label>Title</Field.Label>
                                    <Input value={formData.title} onChange={(e) => handleChange('title', e.target.value)} placeholder="title..." />

                                </Field.Root>

                                <Field.Root >
                                    <Field.Label>
                                        Description <Field.RequiredIndicator />
                                    </Field.Label>
                                    <Textarea autoresize value={formData.description} onChange={(e) => handleChange('description', e.target.value)} placeholder="Detailed Description of the Bug" variant="outline" />

                                </Field.Root>

                                <Field.Root >
                                    <Field.Label>
                                        Severity <Field.RequiredIndicator />
                                    </Field.Label>
                                    <SelectComponent value={formData.severity} setValue={(value) => handleChange('severity', value)} />
                                </Field.Root>

                                <NumberInput.Root value={formData.developerId} min={1} onValueChange={(e) => handleChange('developerId', e.value)}  >
                                    <NumberInput.Control />
                                    <NumberInput.Input />
                                </NumberInput.Root>

                            </Stack>
                        </Dialog.Body>
                        <Dialog.Footer>
                            <Dialog.ActionTrigger asChild>
                                <Button onClick={()=>{setOpen(false); resetForm(); }} colorPalette={'red'} variant="solid">Cancel</Button>
                            </Dialog.ActionTrigger>
                            <Button disabled={loading} onClick={handleSubmit}>  {loading ? <Spinner size={'xs'} /> : 'Submit Bug' }  </Button>
                        </Dialog.Footer>
                    </Dialog.Content>
                </Dialog.Positioner>
            </Portal>
        </Dialog.Root>
    )
}
