"use client";
import { createTheme } from "@mui/material/styles";

export const systemTheme = createTheme({
  cssVariables: true,
  colorSchemes: {
    dark: true,
  },
  typography: {
    fontFamily: "var(--font-geist-sans) var(--font-geist-mono)",
  },
  components: {
    MuiButtonBase: {
      styleOverrides: {
        root: {
          ".MuiButtonBase-root": {
            boxShadow: "0 10px 15px -3px rgba(107, 114, 128, 0.5)", // shadow + shadow-gray-500
            transition: "transform 0.3s ease-in-out",
            "&:hover": {
              transform: "scale(1.5)",
            },
          },
        },
      },
    },
    MuiButton: {
      defaultProps: {
        variant: "contained",
      },
      styleOverrides: {
        root: {
          textTransform: "none",
          transition: "transform 0.3s ease-in-out",
          "&:hover": {
            transform: "scale(1.15)",
          },
          "&.MuiButton-contained": {
            borderRadius: 15,
            boxShadow: "0 10px 15px -3px rgba(107, 114, 128, 0.7)", // shadow + shadow-gray-500
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-notchedOutline": {
            borderRadius: "15px",
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: "25px",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          "&.MuiAppBar-root": {
            borderRadius: 0,
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          "&.MuiCard-root": {
            borderRadius: "15px",
          },
        },
      },
    },
  },
});

export const lightTheme = createTheme({
  palette: {
    mode: "light",
  },
  colorSchemes: {
    dark: false,
  },
  cssVariables: true,
  typography: systemTheme.typography,
  components: systemTheme.components,
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
  colorSchemes: {
    dark: true,
  },
  cssVariables: true,
  typography: systemTheme.typography,
  components: systemTheme.components,
});
