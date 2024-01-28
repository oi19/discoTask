import { z } from "zod";

const formSchema = z.object({
    name: z
        .string({
            required_error: "Name is Required",
            invalid_type_error: "This Name is Invalid",
        })
        .trim()
        .min(3, { message: "Min Number of Charactar(s) is 3" })
        .max(16, { message: "Min Number of Charactar(s) is 8" }),
    email: z
        .string({
            required_error: "This Field is Required",
        })
        .trim()
        .email({ message: "Email is Invalid" }),
    password: z
        .string({
            required_error: "This Field is Required",
        })
        .trim(),
    confirmPassowrd: z
        .string({
            required_error: "This Field is Required",
        })
        .trim(),
});

type formSchemaType = z.infer<typeof formSchema>;

export { formSchema, type formSchemaType };