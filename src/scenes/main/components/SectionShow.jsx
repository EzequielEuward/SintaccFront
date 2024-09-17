import { Typography, Grid, Button } from "@mui/material";
import placeholderImage from "../../../assets/Placeholder.png"; // Ajusta la ruta según tu estructura
export const SectionShow = () => {
    return (
        
        <Grid container spacing={4} alignItems="center" marginBottom="64px">
            
            <Grid item xs={12} md={6}>
                <Typography variant="h4" fontWeight="bold" gutterBottom>
                    Descubre nuestra solución innovadora
                </Typography>
                <Typography variant="body1" color="textSecondary" paragraph>
                    Nuestra plataforma te ofrece herramientas avanzadas para impulsar tu negocio al siguiente nivel. Simplifica tus procesos y enfócate en lo que realmente importa.
                </Typography>
                <Button variant="contained" color="success">
                    Conocer más
                </Button>
            </Grid>
            <Grid item xs={12} md={6}>
                <img
                    src={placeholderImage}
                    alt="Dashboard"
                    style={{ width: '100%', height: 'auto', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}
                />
            </Grid>
        </Grid>
    );
};

export default SectionShow;
