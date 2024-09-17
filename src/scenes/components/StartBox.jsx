import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";

export const StatBox = ({ title, subtitle, icon, increase, textColorTitle, textColorSubtitle, textColorIncrease }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box
      width="100%"
      m="0 30px"
      sx={{
        // Media query para pantallas más pequeñas
        "@media (max-width: 600px)": {
          m: "0 15px",
        },
      }}
    >
      <Box display="flex" justifyContent="space-between">
        <Box>
          {icon}
          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{
              color: textColorTitle || colors.grey[900], // Permite cambiar el color del título
              // Media query para pantallas más pequeñas
              "@media (max-width: 600px)": {
                fontSize: "1.5rem", // Ajuste de tamaño para pantallas más pequeñas
              },
            }}
          >
            {title}
          </Typography>
        </Box>
      </Box>
      <Box display="flex" justifyContent="space-between" mt="2px">
        <Typography
          variant="h5"
          sx={{
            color: textColorSubtitle || colors.greenAccent[500], // Permite cambiar el color del subtítulo
            // Media query para pantallas más pequeñas
            "@media (max-width: 600px)": {
              fontSize: "1rem", // Ajuste de tamaño para pantallas más pequeñas
            },
          }}
        >
          {subtitle}
        </Typography>
        <Typography
          variant="h5"
          fontStyle="italic"
          sx={{
            color: textColorIncrease || colors.greenAccent[600], // Permite cambiar el color del aumento
            // Media query para pantallas más pequeñas
            "@media (max-width: 600px)": {
              fontSize: "1rem", // Ajuste de tamaño para pantallas más pequeñas
            },
          }}
        >
          {increase}
        </Typography>
      </Box>
    </Box>
  );
};

export default StatBox;
