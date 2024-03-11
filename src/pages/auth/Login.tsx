import AuthLayout from "../../componentes/layouts/AuthLayout";
import { LoadingButton } from "@mui/lab";
import { Stack, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { api } from "../../services/endpoints";
import { useAuth } from "../../hooks/useAuth";

function Login() {
  const { mutate } = useAuth();

  const { register, handleSubmit, formState } = useForm({
    defaultValues: {
      email: "codegods@codegods.com",
      password: "************",
    },
  });

  const onSubmit = () => {
    return api
      .signInWithEmailAndPassword()
      .then(() => mutate())
      .catch(() => {});
  };

  return (
    <AuthLayout variant="login">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack
          gap={2}
          bgcolor={"linear-gradient(rgb(58, 60, 74), rgb(36, 38, 50))"}
        >
          <TextField
            disabled
            type="email"
            {...register("email")}
            label="Correo"
          />
          <TextField
            disabled
            type="password"
            {...register("password")}
            label="Contraseña"
          />
          <LoadingButton
            type="submit"
            variant="contained"
            loading={formState.isSubmitting}
          >
            Iniciar sesión
          </LoadingButton>
        </Stack>
      </form>
    </AuthLayout>
  );
}

export default Login;
