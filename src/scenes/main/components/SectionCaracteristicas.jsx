// IndexMainPage.js
import { Grid, Typography, Paper, Box } from '@mui/material';
import { Hexagon, Settings, Shield, Star, DollarSign } from 'lucide-react';
 


export const SectionCaracteristicas = () => {
    return (
        <section>
            <Typography variant="h4" align="center" fontWeight="bold" marginBottom="48px">
                Características
            </Typography>
            <Grid container spacing={4}>
                <FeatureCard
                    icon={<Hexagon className="w-8 h-8" />}
                    title="Rendimiento Rápido"
                    description="Nuestro producto ofrece un rendimiento excepcional, con respuestas instantáneas y una experiencia fluida."
                />
                <FeatureCard
                    icon={<Settings className="w-8 h-8" />}
                    title="Personalización Avanzada"
                    description="Personaliza tu experiencia con nuestras herramientas de configuración intuitivas."
                />
                <FeatureCard
                    icon={<Shield className="w-8 h-8" />}
                    title="Seguridad Robusta"
                    description="Nuestras medidas de seguridad avanzadas protegen tus datos de manera efectiva."
                />
                <FeatureCard
                    icon={<Star className="w-8 h-8" />}
                    title="Diseño Elegante"
                    description="Nuestra interfaz de usuario es visualmente atractiva y fácil de usar."
                />
                <FeatureCard
                    icon={<DollarSign className="w-8 h-8" />}
                    title="Precio Asequible"
                    description="Nuestro producto ofrece un excelente valor por tu dinero."
                />
            </Grid>
        </section>
    )
}


function FeatureCard({ icon, title, description }) {
    return (
      <Grid item xs={12} md={6} lg={4}>
        <Paper elevation={3} sx={{ padding: '16px', borderRadius: '8px' }}>
          <Box sx={{ width: '64px', height: '64px', backgroundColor: '#4caf50', color: '#fff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
            {icon}
          </Box>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {description}
          </Typography>
        </Paper>
      </Grid>
    );
  }
  

export default SectionCaracteristicas
