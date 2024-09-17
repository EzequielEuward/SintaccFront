
import { Drawer, List, ListItem, ListItemText, Avatar, Divider, Typography } from "@mui/material";

export const PatientDrawer = ({ drawerOpen, setDrawerOpen, selectedPatient }) => {
  return (
    <Drawer
      anchor="right"
      open={drawerOpen}
      onClose={() => setDrawerOpen(false)}
    >
      <List style={{ width: '350px', padding: '16px' }}>
        <Avatar
          style={{ margin: '0 auto 16px', width: 80, height: 80 }}
        >
          {selectedPatient?.nombre?.charAt(0)}
        </Avatar>
        <Typography variant="h6" align="center">
          {selectedPatient?.nombre} {selectedPatient?.apellido}
        </Typography>
        <Divider style={{ margin: '16px 0' }} />

        <ListItem>
          <ListItemText primary="Edad" secondary={selectedPatient?.edad || "N/A"} />
        </ListItem>
        <ListItem>
          <ListItemText primary="Identificación" secondary={selectedPatient?.identificacion || "N/A"} />
        </ListItem>
        <ListItem>
          <ListItemText primary="Fecha de Nacimiento" secondary={selectedPatient?.fechaNacimiento || "N/A"} />
        </ListItem>
        <ListItem>
          <ListItemText primary="Sexo" secondary={selectedPatient?.sexo || "N/A"} />
        </ListItem>
        <ListItem>
          <ListItemText primary="Grupo Sanguíneo" secondary={selectedPatient?.grupoSanguineo || "N/A"} />
        </ListItem>
        <ListItem>
          <ListItemText primary="Estado Civil" secondary={selectedPatient?.estadoCivil || "N/A"} />
        </ListItem>
        <ListItem>
          <ListItemText primary="Dirección" secondary={selectedPatient?.direccion || "N/A"} />
        </ListItem>
        <ListItem>
          <ListItemText primary="Teléfono" secondary={selectedPatient?.telefono || "N/A"} />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default PatientDrawer;
