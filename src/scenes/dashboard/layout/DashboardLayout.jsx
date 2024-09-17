import { Box, useTheme } from "@mui/material";
import { Sidebar, Topbar } from "../../global";
import { tokens } from "../../../theme";

export const DashboardLayout = ({ children }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', backgroundColor: colors.grey[100] }}>
      {/* Sidebar fijo a la izquierda */}
      <Sidebar />

      {/* Área principal de contenido */}
      <Box sx={{ flexGrow: 1 }}>
        {/* Topbar */}
        <Topbar />

        {/* Contenido de la página específica */}
        <Box
          m="20px"
          sx={{
            flexGrow: 1,
            backgroundColor: colors.grey[100],
            color: colors.primary[500],
          }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default DashboardLayout;
