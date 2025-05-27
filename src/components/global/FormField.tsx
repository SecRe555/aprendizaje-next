import { TextField, TextFieldProps } from "@mui/material";
import { FieldErrors } from "react-hook-form";

// Definir tipos para las props
interface InputFieldProps {
  errors: FieldErrors;
}

const FormField: React.FC<InputFieldProps & TextFieldProps> = ({
  label,
  name,
  errors,
  type = "text",
  ...props
}) => {
  return (
    <TextField
      {...props}
      label={label}
      name={name}
      type={type}
      error={!!errors[name || ""]}
      helperText={(errors[name || ""]?.message as string) || ""}
    />
  );
};

export default FormField;
