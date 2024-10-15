import { CheckingCredentials, login, logout } from './authSlice';

const fetchData = async (url, method, body) => {
  const response = await fetch(url, {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    throw new Error('Error en la conexión con el servidor');
  }

  return await response.json();
};

export const startLoginWithDniAndPassword = ({ dni, password }) => {
  return async (dispatch) => {
    dispatch(CheckingCredentials());

    const url = 'https://localhost:7041/api/Usuarios';

    try {
      // Realiza la solicitud de inicio de sesión
      const data = await fetchData(url, 'POST', { dni, password });

      if (!data) {
        throw new Error('Error en la autenticación');
      }

      if (!data.activo) {
        throw new Error('El usuario no está activo.');
      }

      // Despacha la acción de login con los datos recibidos
      dispatch(login({
        uid: data.idUsuario,
        username: data.userName,
        rol: data.rol,
        nombre: data.nombre,
        apellido: data.apellido,
      }));

      return data; // Retorna los datos para su uso posterior si es necesario

    } catch (error) {
      dispatch(logout({ errorMessage: error.message }));
      return null; // Retorna null en caso de error
    }
  };
};

export const startCreatingUserWithEmailPassword = ({
  dni, apellido, nombre, fechaNacimiento, sexoBiologico, email, username, userPassword, rol
}) => {
  return async (dispatch) => {
    dispatch(CheckingCredentials());

    const personaUrl = 'https://localhost:7041/api/Personas';
    const usuarioUrl = 'https://localhost:7041/api/Usuarios';

    try {
      // Crear la persona primero
      const personaData = await fetchData(personaUrl, 'POST', {
        idPersona: 0, 
        dni,
        apellido,
        nombre,
        fechaNacimiento,
        sexoBiologico,
        email
      });

      if (!personaData || !personaData.idPersona) {
        throw new Error('Error al crear la persona');
      }

      // Luego crear el usuario asociado
      const usuarioData = await fetchData(usuarioUrl, 'POST', {
        idUsuario: 0, 
        userName: username,
        userPassword,
        rol,
        activo: true,
        idPersona: personaData.idPersona 
      });

      if (!usuarioData || !usuarioData.idUsuario) {
        throw new Error('Error al crear el usuario');
      }

      dispatch(login({
        uid: usuarioData.idUsuario,
        displayName: nombre,
        email,
        photoURL: null,
      }));

    } catch (error) {
      dispatch(logout({ errorMessage: error.message }));
    }
  };
};

export default startLoginWithDniAndPassword;
