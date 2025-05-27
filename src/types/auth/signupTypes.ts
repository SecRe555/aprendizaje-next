import { z } from "zod";

export const SignUpFormSchema = z.object({
    user: z.string().min(4, 'Minimo 4 caracteres'),
    email: z.string().email('Email invalido'),
    password: z.string().min(8, 'Minimo 8 caracteres'),
    confirmPassword: z.string().min(8, 'Minimo 8 caracteres'),
}).required().refine((data) => data.password === data.confirmPassword, {
    path: ['confirmPassword'], message: 'Las contraseñas no coinciden'
})

export type SignUpSubmitValues = z.infer<typeof SignUpFormSchema>;