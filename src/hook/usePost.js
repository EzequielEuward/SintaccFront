import { useState } from "react";

export const usePost = (url) => {
  const [state, setState] = useState({
    data: null,
    isLoading: false,
    hasError: null,
  });

  const postData = async (body) => {
    setState({
      data: null,
      isLoading: true,
      hasError: null,
    });

    try {
      const resp = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });

      if (!resp.ok) {
        const errorDetails = await resp.text();
        throw new Error('Error en la solicitud: ' + errorDetails);
      }

      const data = await resp.json();
      
      // Actualiza el estado con los datos obtenidos
      setState({
        data,
        isLoading: false,
        hasError: null,
      });

      return data; // Retorna los datos para su uso
    } catch (error) {
      console.error(error); // Imprime el error en la consola
      setState({
        data: null,
        isLoading: false,
        hasError: error.message,
      });

      return null; // Retorna null si hubo un error
    }
  };

  const fetchData = async () => {
    setState({
      data: null,
      isLoading: true,
      hasError: null,
    });

    try {
      const resp = await fetch(url);
      if (!resp.ok) {
        const errorDetails = await resp.text();
        throw new Error('Error en la solicitud: ' + errorDetails);
      }

      const data = await resp.json();
      setState({
        data,
        isLoading: false,
        hasError: null,
      });
    } catch (error) {
      console.error(error); // Imprime el error en la consola
      setState({
        data: null,
        isLoading: false,
        hasError: error.message,
      });
    }
  };

  return {
    ...state,
    postData,
    fetchData,
  };
};

export default usePost;
