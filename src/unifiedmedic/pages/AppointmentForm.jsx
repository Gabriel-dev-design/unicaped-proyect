// AppointmentForm.jsx
import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import {
  LocalizationProvider,
  DatePicker,
  TimePicker,
} from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { useSnackbar } from "notistack";

const branches = ["CMU. Sto. Dgo. Este", "Torre KP. Sto. Dgo. DN."];

const AppointmentForm = () => {
  const { enqueueSnackbar } = useSnackbar();

  const [form, setForm] = useState({
    nombre: "",
    apellido: "",
    telefono: "",
    sucursal: "",
    fecha: null,
    hora: null,
  });

  const [dialogOpen, setDialogOpen] = useState(false);
  const [showErrors, setShowErrors] = useState(false);

  const handleChange = (field) => (e) => {
    setForm({ ...form, [field]: e.target.value });
  };

  const handleDateChange = (value) => {
    setForm({ ...form, fecha: value });
  };

  const handleTimeChange = (value) => {
    setForm({ ...form, hora: value });
  };

  const validateForm = () => {
    const errors = [];

    if (!form.nombre.trim()) errors.push("nombre");
    if (!form.apellido.trim()) errors.push("apellido");
    if (!/^[0-9]{10,}$/.test(form.telefono)) errors.push("teléfono válido");
    if (!form.sucursal) errors.push("sucursal");
    if (!form.fecha) errors.push("fecha");
    if (!form.hora) errors.push("hora");

    return errors;
  };

  const handleSubmit = () => {
    setShowErrors(true);
    const errors = validateForm();

    if (errors.length > 0) {
      enqueueSnackbar(
        `Por favor completa correctamente los campos: ${errors.join(", ")}`,
        { variant: "error" }
      );
      return;
    }

    setDialogOpen(true);
  };

  const handleConfirm = () => {
    setDialogOpen(false);

    const mensaje = `Hola, soy ${form.nombre} ${
      form.apellido
    }, deseo agendar una cita.\n📞 Teléfono: ${form.telefono}\n🏢 Sucursal: ${
      form.sucursal
    }\n📅 Fecha: ${form.fecha?.toLocaleDateString()}\n🕒 Hora: ${form.hora?.toLocaleTimeString(
      [],
      { hour: "2-digit", minute: "2-digit" }
    )}`;
    const whatsappURL = `https://wa.me/18297979456?text=${encodeURIComponent(
      mensaje
    )}`;
    window.open(whatsappURL, "_blank");

    enqueueSnackbar("¡Su cita ha sido registrada exitosamente!", {
      variant: "success",
    });

    setForm({
      nombre: "",
      apellido: "",
      telefono: "",
      sucursal: "",
      fecha: null,
      hora: null,
    });
    setShowErrors(false);
  };

  const handleCancel = () => {
    setForm({
      nombre: "",
      apellido: "",
      telefono: "",
      sucursal: "",
      fecha: null,
      hora: null,
    });
    setShowErrors(false);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Container maxWidth="sm">
        <Box
          sx={{
            backgroundColor: "#fff",
            padding: 4,
            borderRadius: 2,
            boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
            mt: 5,
          }}
        >
          <Typography
            variant="h5"
            color="#01a198"
            fontWeight="bold"
            gutterBottom
          >
            Agenda tu Cita Médica
          </Typography>

          <TextField
            fullWidth
            label="Nombre"
            value={form.nombre}
            onChange={handleChange("nombre")}
            margin="normal"
            error={showErrors && !form.nombre.trim()}
            helperText={
              showErrors && !form.nombre.trim() && "Ingrese su nombre"
            }
          />

          <TextField
            fullWidth
            label="Apellido"
            value={form.apellido}
            onChange={handleChange("apellido")}
            margin="normal"
            error={showErrors && !form.apellido.trim()}
            helperText={
              showErrors && !form.apellido.trim() && "Ingrese su apellido"
            }
          />

          <TextField
            fullWidth
            label="Teléfono"
            value={form.telefono}
            onChange={handleChange("telefono")}
            margin="normal"
            error={showErrors && !/^[0-9]{10,}$/.test(form.telefono)}
            helperText={
              showErrors &&
              !/^[0-9]{10,}$/.test(form.telefono) &&
              "Ingrese un teléfono válido (mínimo 10 dígitos)"
            }
          />

          <TextField
            select
            fullWidth
            label="Sucursal"
            value={form.sucursal}
            onChange={handleChange("sucursal")}
            margin="normal"
            error={showErrors && !form.sucursal}
            helperText={
              showErrors && !form.sucursal && "Seleccione una sucursal"
            }
          >
            {branches.map((branch) => (
              <MenuItem key={branch} value={branch}>
                {branch}
              </MenuItem>
            ))}
          </TextField>

          <DatePicker
            label="Fecha de la cita"
            value={form.fecha}
            onChange={handleDateChange}
            renderInput={(params) => (
              <TextField
                {...params}
                fullWidth
                margin="normal"
                error={showErrors && !form.fecha}
                helperText={showErrors && !form.fecha && "Seleccione una fecha"}
              />
            )}
          />

          <TimePicker
            label="Hora de la cita"
            value={form.hora}
            onChange={handleTimeChange}
            renderInput={(params) => (
              <TextField
                {...params}
                fullWidth
                margin="normal"
                error={showErrors && !form.hora}
                helperText={showErrors && !form.hora && "Seleccione una hora"}
              />
            )}
          />

          <Box sx={{ mt: 3, display: "flex", justifyContent: "space-between" }}>
            <Button
              onClick={handleSubmit}
              variant="contained"
              sx={{ backgroundColor: "#01a198" }}
            >
              Enviar cita
            </Button>
            <Button
              onClick={handleCancel}
              variant="outlined"
              sx={{ borderColor: "#de2322", color: "#de2322" }}
            >
              Cancelar
            </Button>
          </Box>
        </Box>

        <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
          <DialogTitle>Favor confirmar cita</DialogTitle>
          <DialogContent>
            <DialogContentText>
              <strong>Nombre:</strong> {form.nombre} {form.apellido} <br />
              <strong>Teléfono:</strong> {form.telefono} <br />
              <strong>Sucursal:</strong> {form.sucursal} <br />
              <strong>Fecha:</strong> {form.fecha?.toLocaleDateString()} <br />
              <strong>Hora:</strong>{" "}
              {form.hora?.toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setDialogOpen(false)}>Cancelar</Button>
            <Button
              onClick={handleConfirm}
              sx={{ backgroundColor: "#01a198", color: "#fff" }}
              autoFocus
            >
              Confirmar
            </Button>
          </DialogActions>
        </Dialog>
      </Container>
    </LocalizationProvider>
  );
};

export default AppointmentForm;
