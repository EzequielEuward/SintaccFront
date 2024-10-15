import { useEffect, useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { Grid, TextField, Button, Link, Alert } from '@mui/material';
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hook';
import { CheckingCredentials, login, logout } from '../../store/auth';
import { usePost } from '../../hook'; // Asegúrate de que este hook esté correctamente implementado

export const LoginPage = () => {
  const { status, errorMessage } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [localErrorMessage, setLocalErrorMessage] = useState('');

  const { dni, password, onInputChange } = useForm({
    dni: '', 
    password: ''
  });

  const isAuthenticating = useMemo(() => status === 'checking', [status]);

  const postLogin = usePost('https://localhost:7041/api/Usuarios/');

  const onSubmit = async (event) => {
    event.preventDefault();

    // Validaciones básicas del formulario
    if (dni.trim() === '' || password.trim() === '') {
      setLocalErrorMessage('Debe completar todos los campos.');
      return;
    }

    setLocalErrorMessage('');

    // Despachar el estado de autenticación
    dispatch(CheckingCredentials());

    try {
      // Realiza la solicitud de inicio de sesión
      const data = await postLogin.postData({ dni, password });
      
      // Agrega el console.log aquí
      console.log(data); // Verifica la estructura de la respuesta

      if (!data) {
        throw new Error('Error en la autenticación');
      }

      if (!data.activo) {
        throw new Error('El usuario no está activo.');
      }

      // Despacha la acción de login con los datos recibidos
      dispatch(login({
        username: data.userName,   // Nombre de usuario
        rol: data.rol,             // Rol del usuario
        nombre: data.nombre,       // Asegúrate de que este campo esté en la respuesta
        apellido: data.apellido,   // Asegúrate de que este campo esté en la respuesta
      }));

      // Redirigir al usuario después de un inicio de sesión exitoso
      navigate('/dashboard'); // Cambia esto a la ruta deseada

    } catch (error) {
      dispatch(logout({ errorMessage: error.message }));
      setLocalErrorMessage(error.message); // Muestra el mensaje de error
    }
  };

  // Efecto para manejar el error de autenticación
  useEffect(() => {
    if (status !== 'checking' && errorMessage) {
      setLocalErrorMessage(errorMessage); // Muestra el mensaje de error
    } else {
      setLocalErrorMessage(''); // Limpia el mensaje si la autenticación está en proceso
    }
  }, [status, errorMessage]);

  return (
    <AuthLayout title='Login'>
      <form onSubmit={onSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField 
              label="DNI"
              type='text'
              placeholder='DNI'
              fullWidth
              name='dni'
              value={dni}
              onChange={onInputChange}
              inputProps={{ maxLength: 25 }}
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField 
              label="Contraseña"
              type='password'
              placeholder='Contraseña'
              fullWidth
              name='password'
              value={password}
              onChange={onInputChange}
              inputProps={{ maxLength: 25 }}
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
  );
};

export default LoginPage;
