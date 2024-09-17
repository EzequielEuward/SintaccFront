import { Container, Grid, Typography, Card, CardContent, CardMedia, Divider, Box } from '@mui/material';

const CardContainerEzequiel = () => (
  <Card>
    <CardMedia
      component="img"
      alt="Ezequiel"
      height="140"
      image="path/to/ezequiel.jpg" // Reemplazar con la ruta de la imagen
    />
    <CardContent>
      <Typography variant="h5" component="div">
        Ezequiel
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Desarrollador Fullstack
      </Typography>
    </CardContent>
  </Card>
);

const CardContainerLeonel = () => (
  <Card>
    <CardMedia
      component="img"
      alt="Leonel"
      height="140"
      image="path/to/leonel.jpg" // Reemplazar con la ruta de la imagen
    />
    <CardContent>
      <Typography variant="h5" component="div">
        Leonel
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Diseñador UI/UX
      </Typography>
    </CardContent>
  </Card>
);

const CardContainerMelina = () => (
  <Card>
    <CardMedia
      component="img"
      alt="Melina"
      height="140"
      image="path/to/melina.jpg" // Reemplazar con la ruta de la imagen
    />
    <CardContent>
      <Typography variant="h5" component="div">
        Melina
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Product Owner
      </Typography>
    </CardContent>
  </Card>
);

const CardContainerAgustin = () => (
  <Card>
    <CardMedia
      component="img"
      alt="Agustin"
      height="140"
      image="path/to/agustin.jpg" // Reemplazar con la ruta de la imagen
    />
    <CardContent>
      <Typography variant="h5" component="div">
        Agustin
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Backend Developer
      </Typography>
    </CardContent>
  </Card>
);

const CardContainerAlejo = () => (
  <Card>
    <CardMedia
      component="img"
      alt="Alejo"
      height="140"
      image="path/to/alejo.jpg" // Reemplazar con la ruta de la imagen
    />
    <CardContent>
      <Typography variant="h5" component="div">
        Alejo
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Frontend Developer
      </Typography>
    </CardContent>
  </Card>
);

export const SectionTeamDevelopers = () => {
  return (
    <Box sx={{ backgroundColor: '#f5f5f5', py: 5 }}>
      <Container maxWidth="lg">
        <Typography variant="h4" fontWeight="bold" align="center" gutterBottom>
          Conoce nuestro equipo
        </Typography>
        <Divider sx={{ mb: 4 }} />
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4}>
            <CardContainerEzequiel />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <CardContainerLeonel />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <CardContainerMelina />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <CardContainerAgustin />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <CardContainerAlejo />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default SectionTeamDevelopers;
