import { z } from 'zod'

export const LoginFormSchema = z.object({
    user: z.string().nonempty('Campo requerido'),
    password: z.string().min(8, 'Debe ser minimo de 8 caracteres')
}).required()

export type LoginSubmitValues = z.infer<typeof LoginFormSchema>;