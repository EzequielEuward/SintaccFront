// src/auth/routes/AuthRoutes.jsx
import { Routes, Route, Navigate } from 'react-router-dom';
import { LoginPage, RegisterPage } from '../Pages';

export const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="login" element={<LoginPage />} />
      <Route path="register" element={<RegisterPage />} />
      {/* Cualquier ruta no especificada redirige a /auth/login */}
      <Route path="/*" element={<Navigate to="/auth/login" />} />
    </Routes>
  );
};

export default AuthRoutes;
