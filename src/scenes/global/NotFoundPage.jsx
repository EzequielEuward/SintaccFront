import React from 'react';
import { Box, Typography, Button, useTheme } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import { Link, useNavigate } from 'react-router-dom';

export const NotFoundPage = () => {
  const theme = useTheme();
  const navigate = useNavigate(); // Hook para navegación

  // Verificar si el tema tiene las propiedades necesarias
  const backgroundColor = theme.palette.grey[100] || '#e0e0e0'; // Color de fondo por defecto
  const primaryColor = theme.palette.primary.main || '#3f51b5'; // Color primario por defecto
  const secondaryColor = theme.palette.secondary.main || '#f50057'; // Color secundario por defecto

  const handleRedirect = () => {
    navigate('/dashboard'); // Redirige a /dashboard
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        background: `linear-gradient(to bottom, ${backgroundColor}, ${backgroundColor})`,
        padding: '0 16px',
        textAlign: 'center',
      }}
    >
      <SentimentVeryDissatisfiedIcon
        sx={{
          fontSize: 96,
          color: secondaryColor,
          marginBottom: 4,
          animation: 'bounce 2s infinite'
        }}
      />
      <Typography variant="h1" component="h1" sx={{ fontSize: '3rem', fontWeight: 'bold', color: primaryColor, marginBottom: 2 }}>
        ¡Ups! Página no encontrada
      </Typography>
      <Typography variant="h6" sx={{ fontSize: '1.25rem', color: theme.palette.text.primary, marginBottom: 4 }}>
        Parece que te has perdido en el ciberespacio.
      </Typography>
      <Box sx={{ maxWidth: '600px', marginBottom: 4 }}>
        <Typography variant="body1" sx={{ fontSize: '1.125rem', color: theme.palette.text.secondary, marginBottom: 2 }}>
          Quizás el enlace que seguiste era antiguo, o tal vez los aliens se llevaron esta página a su planeta.
        </Typography>
        <Typography variant="body1" sx={{ fontSize: '1.125rem', color: theme.palette.text.secondary }}>
          No te preocupes, ¡aún puedes volver a casa!
        </Typography>
      </Box>
      <Button
        onClick={handleRedirect} 
        variant="contained"
        color="primary"
        startIcon={<HomeIcon />}
        sx={{
          backgroundColor: primaryColor,
          '&:hover': {
            backgroundColor: theme.palette.primary.dark,
          },
        }}
      >
        Volver al Dashboard
      </Button>
    </Box>
  );
}

export default NotFoundPage;
