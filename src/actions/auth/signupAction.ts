import { SignUpSubmitValues } from "@/types/auth/signupTypes";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export const onSubmitSignUp = async (data: SignUpSubmitValues, router: AppRouterInstance) => {
    console.log(data)
    router.push('/login')
}