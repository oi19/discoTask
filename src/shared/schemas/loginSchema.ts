import { z } from "zod";

const formSchema = z.object({
    loginName: z
        .string({
            required_error: "This Field is Required",
            invalid_type_error: "Invalid Name",
        })
        .trim(),
    loginEmail: z
        .string({
            required_error: "This Field is Required",
        })
        .trim()
        .email({ message: "Invalid Email" }),
});

type formSchemaType = z.infer<typeof formSchema>;

export { formSchema, type formSchemaType };