import {
  ColorPalette,
  ColorTheme,
  ThemeScheme,
} from "@/types/theme/themeTypes";
import { createTheme } from "@mui/material";

const colors: Record<ColorPalette, ColorTheme> = {
  red: {
    light: { light: "#ef4444", main: "#b91c1c", dark: "#7f1d1d" },
    dark: { light: "#fee2e2", main: "#ff6467", dark: "#ef4444" },
  },
  orange: {
    light: { light: "#fb923c", main: "#c2410c", dark: "#7c2d12" },
    dark: { light: "#ffedd5", main: "#fed7aa", dark: "#fb923c" },
  },
  amber: {
    light: { light: "#fbbf24", main: "#b45309", dark: "#78350f" },
    dark: { light: "#fef3c7", main: "#fde68a", dark: "#fbbf24" },
  },
  yellow: {
    light: { light: "#eab308", main: "#a16207", dark: "#854d0e" },
    dark: { light: "#fef9c3", main: "#fef08a", dark: "#fde047" },
  },
  lime: {
    light: { light: "#84cc16", main: "#4d7c0f", dark: "#365314" },
    dark: { light: "#ecfccb", main: "#d9f99d", dark: "#a3e635" },
  },
  green: {
    light: { light: "#22c55e", main: "#15803d", dark: "#14532d" },
    dark: { light: "#dcfce7", main: "#bbf7d0", dark: "#4ade80" },
  },
  emerald: {
    light: { light: "#10b981", main: "#065f46", dark: "#064e3b" },
    dark: { light: "#d1fae5", main: "#a7f3d0", dark: "#34d399" },
  },
  teal: {
    light: { light: "#14b8a6", main: "#115e59", dark: "#134e4a" },
    dark: { light: "#ccfbf1", main: "#99f6e4", dark: "#2dd4bf" },
  },
  cyan: {
    light: { light: "#06b6d4", main: "#0e7490", dark: "#164e63" },
    dark: { light: "#cffafe", main: "#a5f3fc", dark: "#22d3ee" },
  },
  sky: {
    light: { light: "#0ea5e9", main: "#0369a1", dark: "#075985" },
    dark: { light: "#e0f2fe", main: "#bae6fd", dark: "#38bdf8" },
  },
  blue: {
    light: { light: "#3b82f6", main: "#1d4ed8", dark: "#1e40af" },
    dark: { light: "#dbeafe", main: "#bfdbfe", dark: "#60a5fa" },
  },
  indigo: {
    light: { light: "#6366f1", main: "#4338ca", dark: "#312e81" },
    dark: { light: "#e0e7ff", main: "#c7d2fe", dark: "#818cf8" },
  },
  violet: {
    light: { light: "#8b5cf6", main: "#6d28d9", dark: "#4c1d95" },
    dark: { light: "#ede9fe", main: "#ddd6fe", dark: "#a78bfa" },
  },
  purple: {
    light: { light: "#a78bfa", main: "#7c3aed", dark: "#4c1d95" },
    dark: { light: "#ede9fe", main: "#c4b5fd", dark: "#8b5cf6" },
  },
  fucshia: {
    light: { light: "#d946ef", main: "#a21caf", dark: "#701a75" },
    dark: { light: "#fae8ff", main: "#f5d0fe", dark: "#d946ef" },
  },
  pink: {
    light: { light: "#ec4899", main: "#be185d", dark: "#831843" },
    dark: { light: "#fce7f3", main: "#fbcfe8", dark: "#f472b6" },
  },
  rose: {
    light: { light: "#f43f5e", main: "#9f1239", dark: "#881337" },
    dark: { light: "#ffe4e6", main: "#fecdd3", dark: "#fda4af" },
  },
  slate: {
    light: { light: "#64748b", main: "#334155", dark: "#0f172a" },
    dark: { light: "#f1f5f9", main: "#e2e8f0", dark: "#cbd5e1" },
  },
  gray: {
    light: { light: "#6b7280", main: "#4b5563", dark: "#111827" },
    dark: { light: "#f9fafb", main: "#d1d5db", dark: "#6b7280" },
  },
  zinc: {
    light: { light: "#71717a", main: "#52525b", dark: "#18181b" },
    dark: { light: "#fafafa", main: "#a1a1aa", dark: "#71717a" },
  },
  neutral: {
    light: { light: "#737373", main: "#525252", dark: "#171717" },
    dark: { light: "#fafafa", main: "#a3a3a3", dark: "#737373" },
  },
  stone: {
    light: { light: "#78716c", main: "#57534e", dark: "#1c1917" },
    dark: { light: "#fafaf9", main: "#d6d3d1", dark: "#78716c" },
  },
};

export const generateTheme = ({
  scheme,
  palette,
}: {
  scheme: "light" | "dark";
  palette: ColorPalette;
}) => {
  const mainColor =
    scheme === "light" ? colors[palette].light.main : colors[palette].dark.main;

  return createTheme({
    cssVariables: true,
    colorSchemes: {
      light: scheme === "light",
      dark: scheme === "dark",
    },
    palette: {
      mode: scheme,
      primary: {
        main: mainColor,
      },
    },
    typography: {
      fontFamily: "var(--font-geist-sans) var(--font-geist-mono)",
    },
    components: {
      MuiButtonBase: {
        styleOverrides: {
          root: {
            ".MuiButtonBase-root": {
              boxShadow: "0 10px 15px -3px rgba(107, 114, 128, 0.5)",
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
              transform: "translateY(-5px)", //"scale(1.15)",
            },
            "&.MuiButton-contained": {
              borderRadius: 15,
              boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.7)",
            },
          },
        },
      },
      MuiIconButton: {
        styleOverrides: {
          root: {
            fontSize: "1.20rem",
            padding: 10,
            border: `1px solid ${mainColor}80`,
            borderRadius: 15,
            boxShadow: "0 5px 5px -3px rgba(0, 0, 0, 0.7)",
            transition: "transform 0.3s ease-in-out",
            "&:hover": {
              transform: "translateY(-5px)",
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
              backgroundColor:
                scheme === "light"
                  ? colors[palette].dark.dark
                  : colors[palette].light.dark,
              color: scheme === "light" ? "black" : "light",
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
      MuiListItem: {
        styleOverrides: {
          root:  {
            color: mainColor,
            "&:hover": {
              backgroundColor: mainColor,
              color: "var(--mui-palette-background-paper)"
            },
          }
        },
      },
    },
  });
};
