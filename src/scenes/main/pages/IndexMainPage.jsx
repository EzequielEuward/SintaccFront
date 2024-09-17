import { Button, Container, Grid, Typography, Paper, Box } from '@mui/material';
import { SectionPlanes, SectionFooter, SectionCaracteristicas, SectionHeader, SectionFuncionalidades, SectionShow, SectionTeamDevelopers } from '../components/';

export const IndexMainPage = () => {
  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: '#f5f5f5' }}>

      <SectionHeader />

      <main>
        <Container maxWidth="lg" sx={{ paddingY: '32px' }}>

          <SectionFuncionalidades />

          <SectionShow />

          <SectionCaracteristicas />

          <SectionPlanes />

          <SectionTeamDevelopers/>
          
        </Container>
      </main>
      <SectionFooter />
    </Box>
  );
}

export default IndexMainPage;
