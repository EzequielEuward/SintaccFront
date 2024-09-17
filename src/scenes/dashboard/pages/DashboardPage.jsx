// src/pages/DashboardPage.jsx
import { Box, Button, Typography, useTheme } from "@mui/material"; // Asegúrate de importar useTheme
import { tokens } from "../../../theme";
import { TableDiv, QuickAccesDiv } from "../components";
import {DashboardLayout} from "../../dashboard/layout"; // Importación correcta de Layout
import {Header} from "../../global"; // Importación correcta de Header

export const Dashboard = () => {
  const theme = useTheme(); // Utiliza el hook useTheme para obtener el tema actual
  const colors = tokens(theme.palette.mode); // Define colors usando tokens y el modo del tema actual
  const nombre = "Juanceto01";

  return (
    <DashboardLayout>
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center" mb="20px">
        <Header title="Panel de administrador" subtitle={`Bienvenido, ${nombre} 👋`} />
        <Box>
          <Button
            sx={{
              backgroundColor: colors.blueAccent[700], // Ahora colors está definido correctamente
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            Descargar reportes
          </Button>
        </Box>
      </Box>

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="minmax(140px, auto)"
        gap="20px"
      >
        <QuickAccesDiv />
        <TableDiv />
        {/* Otros componentes de Dashboard */}
      </Box>
    </DashboardLayout>
  );
};

export default Dashboard;
