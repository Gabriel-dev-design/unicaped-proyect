// AppointmentForm.jsx
// Este componente renderiza un formulario para agendar citas médicas
// Los usuarios pueden seleccionar sucursal, fecha y hora, y enviar la información por WhatsApp
// Incluye validación de campos y bloqueo de días/horarios no disponibles

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
import { es } from "date-fns/locale";

// Días no disponibles para agendar: 0 = domingo, 3 = miércoles
const diasNoDisponibles = [0, 6];

// Horario disponible para citas (8 AM a 5 PM)
const horaInicio = 8;
const horaFin = 17;

// Sucursales disponibles para seleccionar
const branches = ["CMU. Sto. Dgo. Este", "Torre KP. Sto. Dgo. DN."];

const AppointmentForm = () => {
  const { enqueueSnackbar } = useSnackbar();

  // Estado del formulario
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

  // Función para manejar cambios de campos
  const handleChange = (field) => (e) => {
    setForm({ ...form, [field]: e.target.value });
  };

  const handleDateChange = (value) => {
    setForm({ ...form, fecha: value });
  };

  const handleTimeChange = (value) => {
    setForm({ ...form, hora: value });
  };

  // Validación del formulario
  const validateForm = () => {
    const errors = [];
    if (!form.nombre.trim()) errors.push("nombre");
    if (!form.apellido.trim()) errors.push("apellido");
    if (!/^[0-9]{10,}$/.test(form.telefono)) errors.push("teléfono válido");
    if (!form.sucursal) errors.push("Sucursal");
    if (!form.fecha) errors.push("fecha");
    if (!form.hora) errors.push("hora");
    return errors;
  };

  // Envío del formulario
  const handleSubmit = () => {
    setShowErrors(true);
    const errors = validateForm();
    if (errors.length > 0) {
      enqueueSnackbar(
        `Por favor completa correctamente los campos: ${errors.join(", ")}`,
        {
          variant: "error",
        }
      );
      return;
    }
    setDialogOpen(true);
  };

  // Confirmar y enviar datos a WhatsApp
  const handleConfirm = () => {
    setDialogOpen(false);
   const mensaje = `Hola, soy ${form.nombre} ${
     form.apellido
   }, deseo agendar una cita.
📞 Teléfono: ${form.telefono}
🏢 Sucursal: ${form.sucursal}
📅 Fecha: ${form.fecha?.toLocaleDateString()}
🕒 Hora: ${form.hora?.toLocaleTimeString([], {
     hour: "2-digit",
     minute: "2-digit",
   })}

✅ *Una vez recibamos tu solicitud, confirmaremos tu cita a la brevedad.*`;
    const whatsappURL = `https://wa.me/18297979456?text=${encodeURIComponent(
      mensaje
    )}`;
    window.open(whatsappURL, "_blank");

    enqueueSnackbar("¡Su cita ha sido registrada exitosamente!", {
      variant: "success",
    });

    // Limpiar el formulario
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

  // Cancelar y limpiar el formulario
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
    <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={es}>
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#f5f5f5",
          px: 2,
          mt: { xs: 10, md: 5 },
        }}
      >
        <Container maxWidth="sm">
          <Typography
            variant="h4"
            align="center"
            sx={{
              fontWeight: 800,
              fontSize: { xs: "1.8rem", md: "2.2rem" },
              color: "#01a198",
              fontFamily: "Poppins",
              letterSpacing: { xs: ".1rem", md: ".2rem" },
              mb: 3,
            }}
          >
            Agenda tu cita aquí a través de WhatsApp
          </Typography>

          <Box
            sx={{
              backgroundColor: "#fff",
              padding: 4,
              borderRadius: 2,
              boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
            }}
          >
            <Typography
              variant="h5"
              color="#01a198"
              fontWeight="bold"
              gutterBottom
            >
              Datos de Padre o tutor
            </Typography>

            {/* Campos del formulario */}
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
              label="Seleccione Lugar"
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

            {/* DatePicker con restricción de días no disponibles */}
            <DatePicker
              label="Fecha de la cita"
              value={form.fecha}
              onChange={handleDateChange}
              format="dd/MM/yyyy"
              minDate={new Date()} // ✅ No permite seleccionar fechas pasadas
              shouldDisableDate={(date) =>
                diasNoDisponibles.includes(date.getDay())
              }
              renderInput={(params) => (
                <TextField
                  {...params}
                  fullWidth
                  margin="normal"
                  error={showErrors && !form.fecha}
                  helperText={
                    showErrors && !form.fecha && "Seleccione una fecha válida"
                  }
                />
              )}
            />

            {/* TimePicker con validación de horario */}
            <TimePicker
              label="Hora de la cita"
              value={form.hora}
              onChange={(newValue) => {
                if (!newValue) return;

                const now = new Date();
                const selectedDate = form.fecha;
                const selectedHour = newValue.getHours();
                const selectedMinutes = newValue.getMinutes();

                const isToday =
                  selectedDate &&
                  selectedDate.toDateString() === now.toDateString();

                // Si es hoy y la hora seleccionada es anterior a la hora actual
                if (
                  isToday &&
                  (selectedHour < now.getHours() ||
                    (selectedHour === now.getHours() &&
                      selectedMinutes <= now.getMinutes()))
                ) {
                  enqueueSnackbar(
                    "No puedes seleccionar una hora pasada del día actual.",
                    { variant: "warning" }
                  );
                  return;
                }

                if (selectedHour < horaInicio || selectedHour >= horaFin) {
                  enqueueSnackbar(
                    "Horario no disponible. Seleccione entre 8:00 AM y 5:00 PM.",
                    { variant: "warning" }
                  );
                  return;
                }

                setForm((prev) => ({ ...prev, hora: newValue }));
              }}
              ampm={true}
              renderInput={(params) => (
                <TextField
                  {...params}
                  fullWidth
                  margin="normal"
                  error={showErrors && !form.hora}
                  helperText={
                    showErrors && !form.hora && "Seleccione una hora válida"
                  }
                />
              )}
            />

            <Box
              sx={{ mt: 3, display: "flex", justifyContent: "space-between" }}
            >
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

          {/* Confirmación final antes de redirigir al WhatsApp */}
          <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
            <DialogTitle>Confirmar para envio via WhatApp</DialogTitle>
            <DialogContent>
              <DialogContentText>
                <strong>Nombre:</strong> {form.nombre} {form.apellido} <br />
                <strong>Teléfono:</strong> {form.telefono} <br />
                <strong>Sucursal:</strong> {form.sucursal} <br />
                <strong>Fecha:</strong>{" "}
                {form.fecha?.toLocaleDateString("es-DO", {
                  weekday: "long", // lunes, martes...
                  day: "numeric", // 28
                  month: "long", // junio
                  year: "numeric", // 2025
                })}
                <br />
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
      </Box>
    </LocalizationProvider>
  );
};

export default AppointmentForm;
