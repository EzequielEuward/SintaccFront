import React from 'react';
import { Check, X } from 'lucide-react';
import { Button, Container, Grid, Typography, Paper, Box, List, ListItem } from '@mui/material';

const plans = [
  {
    name: "Plan Basico",
    price: 2000,
    description: "Este es un plan basico de lo que ofrecemos.",
    features: [
      { name: "Pacientes ilimitados", included: true, highlight: "ilimitados" },
      { name: "Plan de recetas Basico", included: true, highlight: "Basico" },
      { name: "Informes en pantalla", included: true },
      { name: "Seguridad de datos", included: true },
      { name: "Planes de comida personalizados", included: true },
      { name: "Calculadora nutricional", included: true },
      { name: "Seguimiento de procesos", included: true },
      { name: "Recordatorios y notificaciones", included: true },
      { name: "Funciona solo en Web", included: false },
      { name: "Soporte de 1 mes", included: false },
      { name: "Creacion de dietas personalizadas", included: false },
    ]
  },
  {
    name: "Plan Professional",
    price: 3000,
    description: "Este es el plan intermedio que ofrecemos.",
    features: [
      { name: "Pacientes ilimitados", included: true, highlight: "ilimitados" },
      { name: "Plan de recetas Basico", included: true, highlight: "Basico" },
      { name: "Informes en pantalla", included: true },
      { name: "Seguridad de datos", included: true, highlight: "Seguridad" },
      { name: "Planes de comida personalizados", included: true, highlight: "personalizados" },
      { name: "Calculadora nutricional", included: true, highlight: "Calculadora" },
      { name: "Seguimiento de procesos", included: true },
      { name: "Creación de dietas", included: true, highlight: "Creación" },
      { name: "Recordatorios y notificaciones", included: true },
      { name: "Funciona solo en Web", included: false },
      { name: "Soporte de 6 meses", included: false },
    ]
  }
];

export const SectionPlanes = () => {
  return (
    <Box sx={{ py: 6, backgroundColor: '#f5f5f5' }}>
      <Container maxWidth="lg">
        <Typography variant="h4" fontWeight="bold" align="center" gutterBottom>
          Planes
        </Typography>
        <Grid container spacing={4}>
          {plans.map((plan) => (
            <Grid item xs={12} sm={6} md={4} key={plan.name}>
              <Paper elevation={3} sx={{ padding: 3, borderRadius: 2, backgroundColor: '#fff' }}>
                <Box sx={{ backgroundColor: '#e3f2fd', borderRadius: '50%', padding: '8px 16px', display: 'inline-block', marginBottom: 2 }}>
                  <Typography variant="h6" color="#0d47a1">
                    ARS / ${plan.price}
                  </Typography>
                </Box>
                <Typography variant="h5" fontWeight="bold" gutterBottom>
                  {plan.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" paragraph>
                  {plan.description}
                </Typography>
                <List>
                  {plan.features.map((feature, index) => (
                    <ListItem key={index} sx={{ display: 'flex', alignItems: 'center' }}>
                      {feature.included ? (
                        <Check sx={{ color: 'green', marginRight: 1 }} />
                      ) : (
                        <X sx={{ color: 'red', marginRight: 1 }} />
                      )}
                      <Typography variant="body2" color="textSecondary">
                        {feature.name.split(' ').map((word, wordIndex) =>
                          feature.highlight && word.toLowerCase() === feature.highlight.toLowerCase() ?
                            <span key={wordIndex} style={{ fontWeight: 'bold' }}>{word} </span> :
                            word + ' '
                        )}
                      </Typography>
                    </ListItem>
                  ))}
                </List>
                <Box sx={{ marginTop: 2 }}>
                  <Button variant="contained" color="success" fullWidth>
                    Elegir Plan
                  </Button>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default SectionPlanes;
