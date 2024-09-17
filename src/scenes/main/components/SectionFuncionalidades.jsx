import { Typography, Grid, Card, CardContent, CardMedia } from "@mui/material";
import placeholderImage from "../../../assets/Placeholder.png"; // Ajusta la ruta según tu estructura

export const SectionFuncionalidades = () => {
  return (
    <Grid container spacing={4} marginBottom="32px">
      <Grid item xs={12} md={6}>
        <Card elevation={3} sx={{ padding: '24px', borderRadius: '8px' }}>
          <CardContent>
            <Typography variant="h5" fontWeight="bold" gutterBottom>
              Funcionalidades únicas
            </Typography>
          </CardContent>
          <CardMedia
            component="img"
            image={placeholderImage} // Usa la variable importada
            alt="Funcionalidades únicas"
            sx={{ width: '100%', height: 'auto' }}
          />
        </Card>
      </Grid>
      <Grid item xs={12} md={6}>
        <Card elevation={3} sx={{ padding: '24px', borderRadius: '8px' }}>
          <CardContent>
            <Typography variant="h5" fontWeight="bold" gutterBottom>
              Buena interfaz
            </Typography>
          </CardContent>
          <CardMedia
            component="img"
            image={placeholderImage} // Usa la variable importada
            alt="Buena interfaz"
            sx={{ width: '100%', height: 'auto' }}
          />
        </Card>
      </Grid>
    </Grid>
  );
};

export default SectionFuncionalidades;
