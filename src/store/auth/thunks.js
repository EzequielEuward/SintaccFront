import { CheckingCredentials, login, logout } from "./authSlice";

export const startCreatingUserWithEmailPassword = ({
  dni, apellido, nombre, fechaNacimiento, sexoBiologico, email
}) => {
  return async (dispatch) => {
    dispatch(CheckingCredentials());

    try {
      const response = await fetch('https://localhost:7041/api/Personas', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          idPersona: 0, 
          dni, 
          apellido, 
          nombre, 
          fechaNacimiento, 
          sexoBiologico, 
          email 
        }),
      });

      if (!response.ok) {
        const errorDetails = await response.text();
        throw new Error('Error en la solicitud: ' + errorDetails);
      }

      const data = await response.json();
      dispatch(login({ uid: data.Id_Persona, displayName: nombre, email, photoURL: null }));

    } catch (error) {
      dispatch(logout({ errorMessage: error.message }));
    }
  }
}

export default startCreatingUserWithEmailPassword;
