// pages/PatientPage.js
import { useState } from "react";
import { useTheme } from "@emotion/react";
import { tokens } from "../../../theme";
import { DashboardLayout } from "../../dashboard/layout";
import { DeletePatientModal, PatientDrawer, PatientForm, PatientTable } from "../components";

import { Container, Typography } from "@mui/material";

export const PatientPage = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [patients, setPatients] = useState([]);
  const [newPatient, setNewPatient] = useState({
    nombre: "",
    apellido: "",
    edad: 0,
    identificacion: "",
  });
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [selectedDeleteReason, setSelectedDeleteReason] = useState("");
  const [patientToDelete, setPatientToDelete] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPatient((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const patient = {
      id: patients.length + 1,
      ...newPatient,
      edad: Number(newPatient.edad),
    };
    setPatients((prev) => [...prev, patient]);
    setNewPatient({ nombre: "", apellido: "", edad: 0, identificacion: "" });
  };

  const handleEdit = (id) => {
    console.log("Editar paciente con ID:", id);
  };

  const handleDeleteClick = (patient) => {
    setPatientToDelete(patient);
    setDeleteDialogOpen(true);
  };

  const handleCloseDeleteDialog = () => {
    setDeleteDialogOpen(false);
    setSelectedDeleteReason("");
  };

  const handleConfirmDelete = () => {
    if (selectedDeleteReason) {
      setPatients((prev) => prev.filter((p) => p.id !== patientToDelete.id));
      setDeleteDialogOpen(false);
      setSelectedDeleteReason("");
      console.log(`Paciente eliminado por el motivo: ${selectedDeleteReason}`);
    } else {
      alert("Por favor selecciona un motivo.");
    }
  };

  const handleViewPatient = (patient) => {
    setSelectedPatient(patient);
    setDrawerOpen(true);
  };

  return (
    <DashboardLayout>
      <Container maxWidth={false} style={{ marginLeft: "-16px" }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Pacientes
        </Typography>

        <PatientForm
          newPatient={newPatient}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
        />

        <Typography variant="h5" component="h2" gutterBottom>
          Lista de Pacientes
        </Typography>

        <PatientTable
          patients={patients}
          onEdit={handleEdit}
          onDelete={handleDeleteClick}
          onView={handleViewPatient}
        />

        <PatientDrawer
          drawerOpen={drawerOpen}
          setDrawerOpen={setDrawerOpen}
          selectedPatient={selectedPatient}
        />

        <DeletePatientModal
          open={deleteDialogOpen}
          handleClose={handleCloseDeleteDialog}
          handleConfirmDelete={handleConfirmDelete}
          selectedDeleteReason={selectedDeleteReason}
          setSelectedDeleteReason={setSelectedDeleteReason}
        />
      </Container>
    </DashboardLayout>
  );
};

export default PatientPage;
