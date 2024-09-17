import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import { tokens } from "../../../theme";
import { Box, Card, CardContent, Typography, Grid } from "@mui/material";
import { Person } from "@mui/icons-material";
import { DashboardLayout } from "../../dashboard/layout";
import { Header } from "../../global/Header";
import { planInfo } from './../../../data/mockData';

export const PlanPage = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const plans = Object.keys(planInfo);
  const [selectedPlan, setSelectedPlan] = useState(null);

  const handlePlanClick = (plan) => {
    setSelectedPlan(plan);
  };
  return (
    <DashboardLayout>
      {/* Encabezado */}
      <Box display="flex" justifyContent="space-between" alignItems="center" mb="20px">
        <Header
          title="Planes"
          subtitle="Gestiona tus planes alimenticios"
        />
      </Box>

      <Box
        display="flex"
        justifyContent="flex-start"
        alignItems="flex-start"
        width="100%"
        sx={{ padding: "16px 8px", height: "calc(100vh - 64px)" }}
      >
        <Box
          width="100%"
          sx={{
            padding: "16px",
            backgroundColor: colors.primary[100],
            boxShadow: 2,
            borderRadius: "8px",
          }}
        >
          {/* Grid de los planes */}
          <Grid container spacing={2}>
            <Grid item xs={12} lg={9}>
              <Grid container spacing={2} mb={2}>
                {plans.map((plan) => (
                  <Grid item xs={12} sm={6} md={4} lg={3} key={plan}>
                    <Card
                      sx={{
                        cursor: "pointer",
                        "&:hover": { backgroundColor: colors.primary[200] },
                        textAlign: "center",
                        transition: "background-color 0.3s",
                        height: "100px",
                      }}
                      onClick={() => handlePlanClick(plan)} // Manejar clic en la tarjeta
                    >
                      <CardContent>
                        <Typography variant="body1" sx={{ fontWeight: "medium" }}>
                          {plan}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>

              {/* Gráficos */}
              <Card>
                <CardContent>
                  <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: "16px" }}>
                    Gráficos
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "300px",
                      backgroundColor: colors.primary[300],
                      borderRadius: "8px",
                    }}
                  >
                    <Person fontSize="large" sx={{ color: colors.primary[500] }} />
                  </Box>
                </CardContent>
              </Card>
            </Grid>


            <Grid item xs={12} lg={3}>
              <Card sx={{ height: "100%", backgroundColor: colors.primary[50], boxShadow: 1 }}>
                <CardContent>
                  <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: "16px" }}>
                    Info Planes
                  </Typography>

                  {selectedPlan ? (
                    <>
                      <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: "8px" }}>
                        {selectedPlan}
                      </Typography>
                      <Typography variant="body2" sx={{ marginBottom: "8px" }}>
                        <strong>Objetivo: </strong>{planInfo[selectedPlan].objetivo}
                      </Typography>
                      <Typography variant="body2" sx={{ marginBottom: "8px" }}>
                        <strong>Calorías: </strong>{planInfo[selectedPlan].calorias}
                      </Typography>
                      <Typography variant="body2" sx={{ marginBottom: "8px" }}>
                        <strong>Macronutrientes: </strong>{planInfo[selectedPlan].macronutrientes}
                      </Typography>
                      <Typography variant="body2" sx={{ marginBottom: "8px" }}>
                        <strong>Tiempo recomendado: </strong>{planInfo[selectedPlan].tiempo}
                      </Typography>
                      <Typography variant="body2" sx={{ marginBottom: "16px" }}>
                        <strong>Beneficios: </strong>
                        <ul>
                          {planInfo[selectedPlan].beneficios.map((beneficio, index) => (
                            <li key={index}>{beneficio}</li>
                          ))}
                        </ul>
                      </Typography>
                    </>
                  ) : (
                    <Typography variant="body2">Selecciona un plan para ver más detalles.</Typography>
                  )}
                  
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </DashboardLayout >
  );
};

export default PlanPage;
