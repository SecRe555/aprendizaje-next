"use client";

import { onSubmitLogin } from "@/actions/auth/loginActions";
import FormField from "@/components/global/FormField";
import { LoginFormSchema, LoginSubmitValues } from "@/types/auth/loginTypes";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, Link as MuiLink, Paper, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSubmitValues>({ resolver: zodResolver(LoginFormSchema) });

  const router = useRouter();

  return (
    <Paper
      component={"section"}
      className="w-4/5 h-10/12 max-w-[450px] max-h-[550px] p-8 pb-2"
    >
      <form
        className="w-full h-3/4 flex flex-col justify-center items-center gap-5"
        onSubmit={handleSubmit((data) => onSubmitLogin(data, router))}
      >
        <Typography variant="h5" component={"h1"}>
          Inicio de sesión
        </Typography>
        <FormField
          label="Correo"
          id="user"
          errors={errors}
          {...register("user")}
        />
        <FormField
          label="Contraseña"
          id="password"
          errors={errors}
          {...register("password")}
        />
        <Button type="submit">Iniciar sesión</Button>
      </form>
      <Box
        component={"div"}
        className="h-1/4 flex flex-col justify-center items-center gap-5"
      >
        <MuiLink component={Link} href={"/sign-up"}>
          Registrate
        </MuiLink>
        <MuiLink component={Link} href={"/recover-password"}>
          Recupera tu contraseña
        </MuiLink>
      </Box>
    </Paper>
  );
}
