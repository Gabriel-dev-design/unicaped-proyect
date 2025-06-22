import {
  Button,
  Grid2,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";

import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import {
  Google,
  LoginOutlined,
  PasswordOutlined,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { AuthLayout } from "../layout/AuthLayout";

export const LoginPage = () => {
  const [showPassword, setShowPassword] = useState("");
  const [visible, setVisible] = useState(true);

  return (
    <>
      <AuthLayout title={"Login"}>
        <form>
          <Grid2 container spacing={2} sx={{ color: "white" }}>
            <Grid2 size={{ xs: 12 }}>
              <TextField
                type="text"
                label="Correo"
                placeholder="Introduca su Correo"
                helperText="Campo requerido"
                error={false}
                variant="outlined"
                fullWidth
                sx={{
                  ".MuiInputLabel-root": {
                    color: "white",
                    fontSize: "14px",
                  },
                  ".MuiOutlinedInput-root": {
                    input: {
                      color: "white",
                      fontSize: "14px",
                      fontFamily: "monospace",
                      borderRadius: "10px",
                    },
                    fieldset: {
                      border: "3px solid  #646cff",
                      borderRadius: 5,
                    },
                    "&.Mui-focused fieldset": {
                      border: "3px solid  #646cff",
                      borderRadius: 5,
                    },
                  },
                }}
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position="start">
                        <EmailOutlinedIcon sx={{ color: "white" }} />
                      </InputAdornment>
                    ),
                  },
                }}
              />
            </Grid2>
            <Grid2 size={{ xs: 12 }}>
              <TextField
                value={showPassword}
                type={visible ? "text" : "password"}
                id="showPassword"
                label="Password"
                placeholder="Password"
                helperText="Campo requerido"
                onChange={(e) => setShowPassword(e.target.value)}
                fullWidth
                sx={{
                  ".MuiInputLabel-root": {
                    color: "white",
                    fontSize: "14px",
                  },
                  ".MuiOutlinedInput-root": {
                    input: {
                      color: "white",
                      fontFamily: "monospace",
                      fontSize: "14px",
                    },
                    fieldset: {
                      border: "3px solid #646cff",
                      borderRadius: 5,
                    },
                  },
                }}
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position="start">
                        <PasswordOutlined sx={{ color: "white" }} />
                      </InputAdornment>
                    ),

                    endAdornment: (
                      <InputAdornment position="start">
                        <IconButton
                          onClick={() => setVisible(!visible)}
                          sx={{ color: "white" }}
                        >
                          {visible ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  },
                }}
              />
            </Grid2>

            <Grid2
              container
              direction="row"
              justifyContent={{ xs: "center", md: "end" }}
              size={{ xs: 12 }}
            >
              <Typography
                display="flex"
                variant="h6"
                color="info"
                component={NavLink}
                to="/auth/register"
              >
                <Typography>¿Olvidaste tu contraseña?</Typography>
              </Typography>

              <Grid2 container size={12}>
                <Grid2 size={{ xs: 12, md: 6 }}>
                  <Button variant="contained" fullWidth>
                    <LoginOutlined sx={{ mr: 2 }} />
                    Login
                  </Button>
                </Grid2>
                <Grid2 size={{ xs: 12, md: 6 }}>
                  <Button variant="contained" fullWidth>
                    <Google sx={{ mr: 2 }} /> Google
                  </Button>
                </Grid2>
              </Grid2>

              <Grid2
                container
                direction="row"
                justifyContent={{ xs: "center", md: "end" }}
                size={{ xs: 12 }}
              >
                <Typography sx={{ mt: 1.5 }}>¿No tiene una cuenta?</Typography>
                <Typography
                  display="flex"
                  variant="h6"
                  color="info"
                  component={NavLink}
                  to="/auth/register"
                >
                  <Typography sx={{ mt: 1.5 }}>Crear una aqui</Typography>
                </Typography>
              </Grid2>
            </Grid2>
          </Grid2>
        </form>
      </AuthLayout>
    </>
  );
};
