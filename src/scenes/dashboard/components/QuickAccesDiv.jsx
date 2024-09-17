import React from 'react';
import { Box, Button, Typography, useTheme } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { CalendarMonth as CalendarMonthIcon, People as PeopleIcon, LocalHospital as LocalHospitalIcon, Description as DescriptionIcon } from '@mui/icons-material';
import { tokens } from "../../../theme";

const QuickAccessButton = ({ icon, label, count, route, colors }) => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';

  return (
    <Button
      onClick={() => navigate(route)}
      sx={{
        width: '300px',  // Ajuste del ancho del botón
        height: '150px',  // Ajuste de la altura del botón
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '12px',
        backgroundColor: colors.primary[300],
        color: isDarkMode ? colors.grey[900] : colors.primary[500],
        '&:hover': {
          backgroundColor: colors.primary[400],
        },
        margin: '10px',
        boxShadow: '0px 1px 3px rgba(0,0,0,0.12), 0px 1px 2px rgba(0,0,0,0.24)',  // Sombra ligera para efecto de tarjeta
      }}
    >
      {React.cloneElement(icon, {
        style: { color: isDarkMode ? colors.grey[900] : colors.primary[500], fontSize: '40px' },  // Tamaño y color del icono
      })}
      <Typography variant="h6">{label}</Typography>
      <Typography variant="body2">{count}</Typography>
    </Button>
  );
};

export const QuickAccesDiv = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box
      gridColumn="span 12"
      display="flex"
      justifyContent="space-around"
      alignItems="center"
      sx={{ 
        backgroundColor: colors.primary[100],
        padding: '20px', 
        borderRadius: '8px', 
        boxShadow: 'none',
      }}
    >
      <QuickAccessButton
        icon={<CalendarMonthIcon />}
        label="Calendar"
        count="3 upcoming events"
        route="/calendar"
        colors={colors}
      />
      <QuickAccessButton
        icon={<PeopleIcon />}
        label="Patients"
        count="200 registered"
        route="/patients"
        colors={colors}
      />
      <QuickAccessButton
        icon={<LocalHospitalIcon />}
        label="Hospitals"
        count="50 affiliated"
        route="/hospitals"
        colors={colors}
      />
      <QuickAccessButton
        icon={<DescriptionIcon />}
        label="Reports"
        count="120 available"
        route="/reports"
        colors={colors}
      />
    </Box>
  );
};
