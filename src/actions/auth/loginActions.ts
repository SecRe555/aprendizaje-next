import { LoginSubmitValues } from "@/types/auth/loginTypes";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export const onSubmitLogin = async (data: LoginSubmitValues, router: AppRouterInstance) => {
    console.log(data)
    router.push('/')
}