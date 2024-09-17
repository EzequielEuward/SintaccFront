import { useState } from "react";

export const usePost = (url) => {
  const [state, setState] = useState({
    data: null,
    isLoading: false,
    hasError: null,
  });

  const postData = async (body) => {
    setState({
      ...state,
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

      setState({
        data,
        isLoading: false,
        hasError: null,
      });
    } catch (error) {
      setState({
        data: null,
        isLoading: false,
        hasError: error.message,
      });
    }
  };

  const fetchData = async () => {
    setState({
      ...state,
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
