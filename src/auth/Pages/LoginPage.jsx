import { useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { Grid, Typography, TextField, Button, Link, Alert } from '@mui/material';

import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hook';
import { CheckingCredentials, login } from '../../store/auth';

export const LoginPage = () => {
  const { status, errorMessage } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [localErrorMessage, setLocalErrorMessage] = useState('');
  const { email, password, onInputChange } = useForm({
    email: '',
    password: ''
  });

  const isAuthenticating = useMemo(() => status === 'checking', [status]);

  const onSubmit = async (event) => {
    event.preventDefault();

    // Validaciones
    if (!email.includes('@')) {
      setLocalErrorMessage('El correo electrónico debe contener un "@"');
      return;
    }

    if (password.length < 6) {
      setLocalErrorMessage('La contraseña debe tener al menos 6 caracteres');
      return;
    }

    setLocalErrorMessage(''); // Limpiar mensajes de error

    // Disparar acción de checking credentials
    dispatch(CheckingCredentials());

    // Simulación de la respuesta del backend
    setTimeout(() => {
      const mockResponse = {
        uid: '12345',
        email: 'user@example.com',
        displayName: 'Usuario de Prueba',
        photoURL: 'https://example.com/photo.jpg'
      };

      // Aquí podrías usar el mockResponse directamente en lugar de la respuesta del fetch
      dispatch(login({
        uid: mockResponse.uid,
        email: mockResponse.email,
        displayName: mockResponse.displayName,
        photoURL: mockResponse.photoURL
      }));

      navigate('/dashboard'); // Nota: Corregí el nombre de la ruta a 'dashboard'
    }, 1000); // Simula un retraso de 1 segundo

    // En caso de error simulado
    // setLocalErrorMessage('Error de simulación: Credenciales incorrectas');
    // dispatch(logout({ errorMessage: 'Error de simulación: Credenciales incorrectas' }));
  }

  return (
    <AuthLayout title='Login'>
      <form onSubmit={onSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField 
              label="Correo"
              type='email'
              placeholder='correo@google.com'
              fullWidth
              name='email'
              value={email}
              onChange={onInputChange}
              inputProps={{ 
                maxLength: 25 
              }}
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField 
              label="Contraseña"
              type='password'
              placeholder='contraseña'
              fullWidth
              name='password'
              value={password}
              onChange={onInputChange}
              inputProps={{ 
                maxLength: 25 
              }}
            />
          </Grid>

          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12} sm={6}>
              <Button variant='contained' fullWidth type='submit' disabled={isAuthenticating}>
                Login
              </Button>
            </Grid>
          </Grid>
        </Grid>

        {localErrorMessage && (
          <Grid container sx={{ mt: 2 }}>
            <Grid item xs={12}>
              <Alert severity="error">{localErrorMessage}</Alert>
            </Grid>
          </Grid>
        )}

        <Grid container direction='row' justifyContent='flex-end'>
          <Link component={RouterLink} color='inherit' to="/auth/register">
            Crear una cuenta
          </Link>
        </Grid>
      </form>
    </AuthLayout>
  )
}

export default LoginPage;
