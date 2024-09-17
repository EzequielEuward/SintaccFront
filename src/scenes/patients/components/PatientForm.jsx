import { Grid, TextField, Button, Typography, Paper } from "@mui/material";

export const PatientForm = ({ newPatient, handleInputChange, handleSubmit }) => {
  return (
    <Paper elevation={3} style={{ padding: "16px", marginBottom: "16px" }}>
      <Typography variant="h5" component="h2" gutterBottom>
        Agregar Nuevo Paciente
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Nombre"
              name="nombre"
              value={newPatient.nombre}
              onChange={handleInputChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Apellido"
              name="apellido"
              value={newPatient.apellido}
              onChange={handleInputChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Edad"
              name="edad"
              type="number"
              value={newPatient.edad}
              onChange={handleInputChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Número de Identificación"
              name="identificacion"
              value={newPatient.identificacion}
              onChange={handleInputChange}
              fullWidth
              required
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          style={{ marginTop: "16px" }}
        >
          Guardar Paciente
        </Button>
      </form>
    </Paper>
  );
};

export default PatientForm;
