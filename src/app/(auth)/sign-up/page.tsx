"use client";

import { Button, Grid, Paper, Typography } from "@mui/material";
import FormField from "@/components/global/FormField";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignUpFormSchema, SignUpSubmitValues } from "@/types/auth/signupTypes";
import { onSubmitSignUp } from "@/actions/auth/signupAction";

export default function SignUpPage() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpSubmitValues>({ resolver: zodResolver(SignUpFormSchema) });

  return (
    <Paper
      component={"section"}
      className="w-4/5 h-10/12 max-w-[600px] max-h-[550px] p-8 pb-2"
    >
      <form
        className="w-full h-full flex flex-col justify-center items-center gap-8"
        onSubmit={handleSubmit((data) => onSubmitSignUp(data, router))}
      >
        <Typography variant="h5" component={"h1"} textAlign={"center"}>
          Registro de cuenta
        </Typography>
        <Grid container rowSpacing={{ xs: 2, md: 4 }} columnSpacing={0}>
          <Grid size={{ xs: 12, md: 6 }} className="flex justify-center">
            <FormField
              label="Nombre de usuario"
              id="user"
              errors={errors}
              {...register("user")}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }} className="flex justify-center">
            <FormField
              label="Correo electronico"
              id="email"
              errors={errors}
              {...register("email")}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }} className="flex justify-center">
            <FormField
              label="Contraseña"
              id="password"
              errors={errors}
              type="password"
              {...register("password")}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }} className="flex justify-center">
            <FormField
              label="Confirmar contraseña"
              id="confirmPassword"
              errors={errors}
              type="password"
              {...register("confirmPassword")}
            />
          </Grid>
          {/* <Grid size={{ xs: 12, md: 6 }}></Grid>
          <Grid size={{ xs: 12, md: 6 }}></Grid> */}
        </Grid>
        <Button type="submit">Registrarse</Button>
      </form>
    </Paper>
  );
}
