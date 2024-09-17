import { useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { Alert, Button, Grid, Link, TextField, Typography } from '@mui/material';
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hook/';
import { startCreatingUserWithEmailPassword } from '../../store/auth/thunks';

const formData = {
  dni: '',
  apellido: '',
  nombre: '',
  fechaNacimiento: '',
  sexoBiologico: '',
  email: ''
};

const formValidations = {
  dni: [(value) => value.length > 0, 'DNI es obligatorio.'],
  apellido: [(value) => value.length > 0, 'Apellido es obligatorio.'],
  nombre: [(value) => value.length > 0, 'Nombre es obligatorio.'],
  fechaNacimiento: [(value) => value.length > 0, 'Fecha de nacimiento es obligatoria.'],
  sexoBiologico: [(value) => value.length > 0, 'Sexo biológico es obligatorio.'],
  email: [(value) => value.includes('@'), 'El correo debe de tener una @'],
};

export const RegisterPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formSubmitted, setFormSubmitted] = useState(false);

  const { status, errorMessage } = useSelector(state => state.auth);
  const isCheckingAuthentication = useMemo(() => status === 'checking', [status]);

  const {
    formState, dni, apellido, nombre, fechaNacimiento, sexoBiologico, email,
    onInputChange, isFormValid, dniValid, apellidoValid, nombreValid, fechaNacimientoValid, sexoBiologicoValid, emailValid
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
        email
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

          <Grid item xs={12} display={!!errorMessage ? '' : 'none'}>
            <Alert severity='error'>{errorMessage}</Alert>
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <Button
              disabled={isCheckingAuthentication}
              type="submit"
              variant='contained'
              fullWidth>
              Crear cuenta
            </Button>
          </Grid>

          <Grid container direction='row' justifyContent='flex-end' sx={{ mt: 2 }}>
            <Typography sx={{ mr: 1 }}>¿Ya tienes cuenta?</Typography>
            <Link component={RouterLink} color='inherit' to="/auth/login">
              ingresar
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};

export default RegisterPage;
