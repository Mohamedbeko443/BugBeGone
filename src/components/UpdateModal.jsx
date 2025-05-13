import { Button, Dialog, Field, Input, Textarea, Portal, Stack, NativeSelect } from "@chakra-ui/react"
import { useState } from "react"
import SelectComponent from "./SelectComponent";
import useBugsStore from "../store/Bugs";
import { NumberInput } from "@chakra-ui/react"
import { toaster } from "@/components/ui/toaster"
import { Spinner } from "@chakra-ui/react"
import { useNavigate } from 'react-router-dom';
import useAuthStore from "../store/Auth";
import { jwtDecode } from "jwt-decode";



export default function UpdateModal({ open, setOpen, SelectedBug, id }) {
    const { updateBug, loading, error } = useBugsStore();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        title: SelectedBug.title,
        description: SelectedBug.description,
        severity: SelectedBug.severity,
        developerId: SelectedBug.developerId,
        status: SelectedBug.status
    });

    const accessToken = useAuthStore((state) => state.accessToken);
    const userData = accessToken ? jwtDecode(accessToken) : null;
    const role = userData?.roles[0].split("_")[1];
    const firstChar = (typeof role === 'string' && role.length > 0) ? role[0] : undefined;
    

    console.log(SelectedBug);



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
                description: 'title and description must me at least 5 characters',
                type: 'error'
            })
            return
        }

        try {
            await updateBug(id, {
                title: formData.title,
                description: formData.description,
                severity: formData.severity,
                developerId: formData.developerId,
                status: formData.status,
                submittedById: SelectedBug.submittedById
            });
            navigate('/');
            setOpen(false);
        }
        catch {
            null
        }
    }

    console.log(error);

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

                                {/* change status by developer */}
                                {firstChar === 'D' && <NativeSelect.Root size="sm" width="100%">
                                    <NativeSelect.Field
                                        placeholder="status"
                                        value={formData.status} // status
                                        onChange={(value) => { handleChange('status', value.target.value); console.log(value.target.value) }}  // handle status change
                                        bg="white"
                                        color="black"
                                        border="1px solid black"
                                    >
                                        <option value="IN_PROG">In_progress</option>
                                        <option value="RESOLVED">Resolved</option>
                                        <option value="CLOSED">Closed</option>
                                    </NativeSelect.Field>
                                    <NativeSelect.Indicator />
                                </NativeSelect.Root>}

                                {firstChar === 'T' && 
                                    <NumberInput.Root value={formData.developerId} min={1} onValueChange={(e) => handleChange('developerId', e.value)}  >
                                    <NumberInput.Control />
                                    <NumberInput.Input />
                                    </NumberInput.Root>
                                }
                                

                            </Stack>
                        </Dialog.Body>
                        <Dialog.Footer>
                            <Dialog.ActionTrigger asChild>
                                <Button onClick={() => { setOpen(false) }} colorPalette={'red'} variant="solid">Cancel</Button>
                            </Dialog.ActionTrigger>
                            <Button disabled={loading} onClick={handleSubmit}>  {loading ? <Spinner size={'xs'} /> : 'Update Bug'}  </Button>
                        </Dialog.Footer>
                    </Dialog.Content>
                </Dialog.Positioner>
            </Portal>
        </Dialog.Root>
    )
}
