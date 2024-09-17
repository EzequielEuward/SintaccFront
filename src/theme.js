import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";

// color design tokens export
export const tokens = (mode) => ({
  ...(mode === "light"
    ? {
      // Paleta de colores para el modo claro
      grey: {
        100: "#F9FAFB",  // Color de fondo
        200: "#2A2A37",  //#eeeeee Gris muy claro
        300: "#e0e0e0",  // Gris medio
        400: "#FFFFFF",
        500: "#9e9e9e",
        600: "#757575",
        700: "#616161",
        800: "#424242",  // Gris oscuro para texto
        900: "#212121",  // Gris muy oscuro
      },
      primary: {
        100: "#F9FAFB",  // Color de fondo
        200: "#e0e0e0",  // Gris muy claro
        300: "#eeeeee",  // Gris medio
        400: "#9e9e9e",  // Gris oscuro
        500: "#1C252E",  // Gris oscuro para texto
        600: "#757575",
        700: "#616161",
        800: "#424242",
        900: "#212121",
      },
      greenAccent: {
        100: "#e8f5e9",
        200: "#c8e6c9",
        300: "#a5d6a7",
        400: "#81c784",
        500: "#66bb6a",  // Verde destacado
        600: "#4caf50",
        700: "#43a047",
        800: "#388e3c",
        900: "#2e7d32",
      },
      redAccent: {
        100: "#ffebee",
        200: "#ffcdd2",
        300: "#ef9a9a",
        400: "#e57373",
        500: "#ef5350",  // Rojo destacado
        600: "#f44336",
        700: "#e53935",
        800: "#d32f2f",
        900: "#c62828",
      },
      blueAccent: {
        100: "#e3f2fd",
        200: "#bbdefb",
        300: "#90caf9",
        400: "#64b5f6",
        500: "#42a5f5",  // Azul destacado
        600: "#2196f3",
        700: "#1e88e5",
        800: "#1976d2",
        900: "#1565c0",
      },
      sidebar: "#f5f5f5", // Color claro para el sidebar en modo claro
    }
    : {
      // Paleta de colores para el modo oscuro
      grey: {
        100: "#1C1C27",  // Fondo oscuro
        200: "#eeeeee", //#2A2A37
        300: "#3C3C53",  // Fondo de cajas
        400: "#4C4C66",
        500: "#6C6C7A",
        600: "#8A8A91",
        700: "#A8A8A7",
        800: "#C6C6C3",
        900: "#E4E4E0",
      },
      primary: {
        100: "#1C1C27",  // Fondo oscuro
        200: "#2A2A37",
        300: "#3C3C53",
        400: "#4C4C66",
        500: "#6C6C7A",
        600: "#8A8A91",
        700: "#A8A8A7",
        800: "#C6C6C3",
        900: "#E4E4E0",
      },
      greenAccent: {
        100: "#dbf5ee",
        200: "#b7ebde",
        300: "#94e2cd",
        400: "#70d8bd",
        500: "#4cceac",
        600: "#3da58a",
        700: "#2e7c67",
        800: "#1e5245",
        900: "#0f2922",
      },
      redAccent: {
        100: "#f8dcdb",
        200: "#f1b9b7",
        300: "#e99592",
        400: "#e2726e",
        500: "#db4f4a",
        600: "#af3f3b",
        700: "#832f2c",
        800: "#58201e",
        900: "#2c100f",
      },
      blueAccent: {
        100: "#e1e2fe",
        200: "#c3c6fd",
        300: "#a4a9fc",
        400: "#868dfb",
        500: "#6870fa",
        600: "#535ac8",
        700: "#3e4396",
        800: "#2a2d64",
        900: "#151632",
      },
      // sidebar: "#121621", // Color oscuro para el sidebar en modo oscuro
    }),
});

// mui theme settings
export const themeSettings = (mode) => {
  const colors = tokens(mode);
  return {
    palette: {
      mode: mode,
      ...(mode === "light"
        ? {
          primary: {
            main: colors.primary[500],
          },
          secondary: {
            main: colors.greenAccent[500],
          },
          neutral: {
            dark: colors.grey[800], // Gris oscuro para textos
            main: colors.grey[700], // Gris medio para el texto principal
            light: colors.grey[100], // Gris muy claro para fondos
          },
          background: {
            default: colors.grey[100], // Fondo blanco usando gris muy claro
          },
        }
        : {
          primary: {
            main: colors.primary[500],
          },
          secondary: {
            main: colors.greenAccent[500],
          },
          neutral: {
            dark: colors.grey[300], // Gris claro para textos
            main: colors.grey[400], // Gris medio para el texto principal
            light: colors.grey[500], // Gris claro para fondos
          },
          background: {
            default: colors.grey[100], // Fondo oscuro
          },
        }),
    },
    typography: {
      fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 20,
        fontWeight: "bold", // Añadido para hacer negrita
      },
      h5: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 14,
      },
      subtitle1: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 16,
      },
    },
  };
};

// context for color mode
export const ColorModeContext = createContext({
  toggleColorMode: () => { },
});

export const useMode = () => {
  const [mode, setMode] = useState("light");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === "light" ? "dark" : "light")),
    }),
    []
  );

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return [theme, colorMode];
};
