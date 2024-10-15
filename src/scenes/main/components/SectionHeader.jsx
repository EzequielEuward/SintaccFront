import { Paper, Typography, Button, Container, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import '../../../style/index.css';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export const SectionHeader = () => {
  const navigate = useNavigate(); 

  const handleRedirect = () => {
    navigate('/auth/login'); 
  };
  return (
    <header>
      <Paper elevation={0} sx={{ backgroundColor: '#3f51b5', color: '#fff', padding: '16px' }}>
        <Container maxWidth="lg" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Typography variant="h6" fontWeight="bold">
            LOGO
          </Typography>
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: '16px' }}>
            <Button color="inherit">Inicio</Button>
            <Button color="inherit">Producto</Button>
            <Button color="inherit">Características</Button>
            <Button color="inherit">Nuestro equipo</Button>
            <Button color="inherit">Planes</Button>
            <Button color="inherit">Contáctanos</Button>
          </Box>
          <button className="Btnn" onClick={handleRedirect}>
            <span className="sign">
              <ArrowForwardIosIcon />
            </span>
            <span className="textt">Iniciar Sesión</span>
          </button>
        </Container>
      </Paper>
    </header>
  );
};

export default SectionHeader;
