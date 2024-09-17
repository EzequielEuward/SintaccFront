// Footer.js
import { Link } from 'react-router-dom';
import { Box, Container, Typography, Link as MuiLink } from '@mui/material';

export const SectionFooter = () => {
  return (
    <footer style={{ backgroundColor: '#3F51B5', color: '#FFFFFF' }}>
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Box display="flex" flexDirection="column" alignItems="center" textAlign="center">
          <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
            LOGO
          </Typography>
          <Typography variant="body2" sx={{ mb: 4 }}>
            Sistema de Nutrición Innovador
          </Typography>
          <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }} justifyContent="center" gap={2}>
            <MuiLink to="/" component={Link} sx={{ color: '#FFFFFF', '&:hover': { color: '#A5D6A7' } }}>
              Inicio
            </MuiLink>
            <MuiLink to="/producto" component={Link} sx={{ color: '#FFFFFF', '&:hover': { color: '#A5D6A7' } }}>
              Producto
            </MuiLink>
            <MuiLink to="/caracteristicas" component={Link} sx={{ color: '#FFFFFF', '&:hover': { color: '#A5D6A7' } }}>
              Características
            </MuiLink>
            <MuiLink to="/equipo" component={Link} sx={{ color: '#FFFFFF', '&:hover': { color: '#A5D6A7' } }}>
              Nuestro equipo
            </MuiLink>
            <MuiLink to="/planes" component={Link} sx={{ color: '#FFFFFF', '&:hover': { color: '#A5D6A7' } }}>
              Planes
            </MuiLink>
            <MuiLink to="/contacto" component={Link} sx={{ color: '#FFFFFF', '&:hover': { color: '#A5D6A7' } }}>
              Contáctanos
            </MuiLink>
          </Box>
          <Typography variant="body2" sx={{ mt: 4 }}>
            &copy; 2024 Tu Empresa de Nutrición. Todos los derechos reservados.
          </Typography>
        </Box>
      </Container>
    </footer>
  );
}

export default SectionFooter;
