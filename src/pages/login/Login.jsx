import { Box, Input, Field, Flex, Heading, Text, Button, Spinner } from "@chakra-ui/react";
import { PasswordInput } from "@/components/ui/password-input";
import { useFormik } from "formik";
import {LoginSchema} from "../../schemas/schemas"
import { useNavigate } from 'react-router-dom';
import { toaster } from "@/components/ui/toaster"

export default function Login() {

    const navigate = useNavigate();

//TODO api integration 

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: LoginSchema,
        onSubmit: async (values, actions) => {
            console.log("Login attempt with:", values);
            await new Promise((resolve) => setTimeout(resolve, 1000)); 
            actions.setSubmitting(false);

            toaster.create({
                title: 'Welcome back Lio!',
                type : 'success'
            })

            navigate('/');
        },
    });

    return (
        <Flex
            direction={"column"}
            justify={"center"}
            align={"center"}
            minH={"100vh"}
            px={4}
            gap={10}
        >
            <Box textAlign="center">
                <Heading mb={2} size="4xl">
                    BugBeDone
                </Heading>
                <Text color={"gray.500"}>
                    Log in to manage your projects
                </Text>
            </Box>

            <Flex
                as="form"
                onSubmit={formik.handleSubmit}
                border={"2px solid"}
                borderColor={'gray.800'}
                w={"100%"}
                maxW={"400px"}
                mb={4}
                direction={"column"}
                alignItems={"flex-start"}
                justifyContent={"center"}
                p={7}
                borderRadius={4}
                boxShadow={"lg"}
            >
                <Box mb={7}>
                    <Heading mb={2} size="2xl">
                        BugBeDone
                    </Heading>
                    <Text fontSize={"sm"} mt={-2} color={"gray.500"}>
                        Enter your credentials to access the bug tracking system
                    </Text>
                </Box>

                <Field.Root mb={5} w={"100%"}>
                    <Field.Label>
                        Email <Field.RequiredIndicator />
                    </Field.Label>
                    <Input 
                        name="email" 
                        placeholder="Enter your email" 
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        isInvalid={formik.touched.email && formik.errors.email}
                    />
                    {formik.touched.email && formik.errors.email && (
                        <Text fontSize="sm" color="red.500" mt={1}>
                            {formik.errors.email}
                        </Text>
                    )}
                </Field.Root>

                <Field.Root mb={4} w={"100%"}>
                    <Field.Label>
                        Password <Field.RequiredIndicator />
                    </Field.Label>
                    <PasswordInput
                        name="password"
                        placeholder="•••••••••"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        isInvalid={formik.touched.password && formik.errors.password}
                    />
                    {formik.touched.password && formik.errors.password && (
                        <Text fontSize="sm" color="red.500" mt={1}>
                            {formik.errors.password}
                        </Text>
                    )}
                </Field.Root>

                <Button
                    type="submit"
                    w={"full"}
                    p={3}
                    isDisabled={formik.isSubmitting}
                >
                    {formik.isSubmitting ? <Spinner size="sm" /> : "Login"}
                </Button>
            </Flex>
        </Flex>
    );
}
