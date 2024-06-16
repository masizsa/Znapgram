import * as z from "zod";

const SignupValidation = z.object({
    name: z.string().min(2, {message: "Too short"}),
    username: z.string().min(2, {message: "Too short"}),
    email: z.string().email(),
    password: z.string().min(8, {message: "Password must be at least 8 characters"})
});
const SigninValidation = z.object({
    email: z.string().email(),
    password: z.string().min(8, {message: "Password must be at least 8 characters"})
});

export { SignupValidation, SigninValidation };
