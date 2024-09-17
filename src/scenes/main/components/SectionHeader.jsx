import { Paper, Typography, Button, Container, Box } from "@mui/material"

export const SectionHeader = () => {
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
            <Button variant="contained" color="primary">
              Iniciar Sesion
            </Button>
          </Container>
        </Paper>
      </header>
   
  )
}

export default SectionHeader
