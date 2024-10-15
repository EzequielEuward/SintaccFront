import { useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { Alert, Button, Grid, Link, TextField, Typography } from '@mui/material';
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hook/'; // Ajusta la ruta según corresponda
import { startCreatingUserWithEmailPassword } from '../../store/auth/thunks'; // Ajusta la ruta según corresponda

const formData = {
  dni: '',
  apellido: '',
  nombre: '',
  fechaNacimiento: '',
  sexoBiologico: '',
  email: '',
  username: '',
  userPassword: '',
  rol: ''
};

const formValidations = {
  dni: [(value) => value.length > 0, 'DNI es obligatorio.'],
  apellido: [(value) => value.length > 0, 'Apellido es obligatorio.'],
  nombre: [(value) => value.length > 0, 'Nombre es obligatorio.'],
  fechaNacimiento: [(value) => value.length > 0, 'Fecha de nacimiento es obligatoria.'],
  sexoBiologico: [(value) => value.length > 0, 'Sexo biológico es obligatorio.'],
  email: [(value) => value.includes('@'), 'El correo debe de tener una @'],
  username: [(value) => value.length > 0, 'El nombre de usuario es obligatorio.'],
  userPassword: [(value) => value.length >= 6, 'La contraseña debe tener al menos 6 caracteres.'],
  rol: [(value) => value.length > 0, 'El rol es obligatorio.']
};

export const RegisterPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formSubmitted, setFormSubmitted] = useState(false);

  const { status, errorMessage } = useSelector(state => state.auth);
  const isCheckingAuthentication = useMemo(() => status === 'checking', [status]);

  const {
    formState, dni, apellido, nombre, fechaNacimiento, sexoBiologico, email, username, userPassword, rol,
    onInputChange, isFormValid, dniValid, apellidoValid, nombreValid, fechaNacimientoValid, sexoBiologicoValid, emailValid,
    usernameValid, userPasswordValid, rolValid
  } = useForm(formData, formValidations);

  const onSubmit = async (event) => {
    event.preventDefault();
    setFormSubmitted(true);

    if (!isFormValid) return;

    try {
      await dispatch(startCreatingUserWithEmailPassword({
        dni,
        apellido,
        nombre,
        fechaNacimiento,
        sexoBiologico,
        email,
        username,
        userPassword,
        rol
      }));
      navigate('/auth/login');
    } catch (error) {
      console.error('Error al registrar:', error);
    }
  };

  return (
    <AuthLayout title="Crear cuenta">
      <form onSubmit={onSubmit} className='animate__animated animate__fadeIn animate__faster'>
        <Grid container spacing={2}>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="DNI"
              type="text"
              placeholder='DNI'
              fullWidth
              name="dni"
              value={dni}
              onChange={onInputChange}
              error={!!dniValid && formSubmitted}
              helperText={dniValid}
              inputProps={{ maxLength: 20 }}
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Apellido"
              type="text"
              placeholder='Apellido'
              fullWidth
              name="apellido"
              value={apellido}
              onChange={onInputChange}
              error={!!apellidoValid && formSubmitted}
              helperText={apellidoValid}
              inputProps={{ maxLength: 40 }}
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Nombre"
              type="text"
              placeholder='Nombre'
              fullWidth
              name="nombre"
              value={nombre}
              onChange={onInputChange}
              error={!!nombreValid && formSubmitted}
              helperText={nombreValid}
              inputProps={{ maxLength: 40 }}
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Fecha de Nacimiento"
              type="date"
              fullWidth
              name="fechaNacimiento"
              value={fechaNacimiento}
              onChange={onInputChange}
              error={!!fechaNacimientoValid && formSubmitted}
              helperText={fechaNacimientoValid}
              InputLabelProps={{ shrink: true }}
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Sexo Biológico"
              type="text"
              placeholder='Sexo Biológico'
              fullWidth
              name="sexoBiologico"
              value={sexoBiologico}
              onChange={onInputChange}
              error={!!sexoBiologicoValid && formSubmitted}
              helperText={sexoBiologicoValid}
              inputProps={{ maxLength: 20 }}
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Correo"
              type="email"
              placeholder='correo@google.com'
              fullWidth
              name="email"
              value={email}
              onChange={onInputChange}
              error={!!emailValid && formSubmitted}
              helperText={emailValid}
              inputProps={{ maxLength: 50 }}
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Nombre de Usuario"
              type="text"
              placeholder='Nombre de Usuario'
              fullWidth
              name="username"
              value={username}
              onChange={onInputChange}
              error={!!usernameValid && formSubmitted}
              helperText={usernameValid}
              inputProps={{ maxLength: 20 }}
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Contraseña"
              type="password"
              placeholder='Contraseña'
              fullWidth
              name="userPassword"
              value={userPassword}
              onChange={onInputChange}
              error={!!userPasswordValid && formSubmitted}
              helperText={userPasswordValid}
              inputProps={{ maxLength: 25 }}
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Rol"
              type="text"
              placeholder='Rol'
              fullWidth
              name="rol"
              value={rol}
              onChange={onInputChange}
              error={!!rolValid && formSubmitted}
              helperText={rolValid}
              inputProps={{ maxLength: 20 }}
            />
          </Grid>

          <Grid container spacing={2} sx={{ mt: 2 }}>
            <Grid item xs={12} sm={6}>
              <Button 
                type="submit" 
                variant="contained" 
                fullWidth
                disabled={isCheckingAuthentication}
              >
                Crear Cuenta
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button 
                variant="outlined" 
                fullWidth
                disabled={isCheckingAuthentication}
              >
                <RouterLink to="/auth/login">
                  Volver al Login
                </RouterLink>
              </Button>
            </Grid>
          </Grid>

          {errorMessage && (
            <Grid item xs={12} sx={{ mt: 2 }}>
              <Alert severity="error">{errorMessage}</Alert>
            </Grid>
          )}
        </Grid>
      </form>
    </AuthLayout>
  );
};
