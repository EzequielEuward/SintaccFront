// src/routes/AppRouter.jsx
import { Routes, Route } from 'react-router-dom';
import { AuthRoutes } from '../auth/routes/AuthRoutes';
import { Dashboard } from '../scenes/dashboard/pages';
import { PatientPage, PatientDiagnosisPage, PatientMetricsPage } from '../scenes/patients/page';
import { FAQ } from '../scenes/faq/FaqComponent';
import { CalendarPage } from '../scenes/calendar/page';
import { PlanPage } from '../scenes/plans/pages/PlanPages';
import { NotFoundPage } from '../scenes/global';  
import { FoodTablePage } from '../scenes/alimentos/pages';
import {IndexMainPage} from '../scenes/main/pages/IndexMainPage';

export const AppRouter = () => {
  return (
    <Routes>
      {/* Rutas de autenticación */}

      <Route path="/index" element={<IndexMainPage/>}></Route>

      <Route path="/auth/*" element={<AuthRoutes />} />

      {/* Rutas de la aplicación principal */}
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/patients/" element={<PatientPage />} />
      <Route path="/patients/diagnosis" element={<PatientDiagnosisPage />} />
      <Route path="/patients/metrics" element={<PatientMetricsPage />} />

      <Route path="/foods/plans" element={<PlanPage />} />

      <Route path="/foods/list" element={<FoodTablePage />} />

      
      <Route path="/faq" element={<FAQ />} />
      <Route path="/calendar/view" element={<CalendarPage />} />
     

      {/* Redireccionar cualquier otra ruta a la página de error */}
      <Route path="/*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRouter;
