"use client";

import { systemTheme, lightTheme, darkTheme } from "@/theme/theme";
import { useThemeState } from "@/states/globalState";
import { ThemeScheme } from "@/types/theme/themeTypes";
import { Theme, ThemeProvider, useMediaQuery } from "@mui/material";
import { useEffect, useState } from "react";
import { generateTheme } from "@/theme/themeFactory";

const themes: Record<ThemeScheme, Theme> = {
  system: systemTheme,
  light: lightTheme,
  dark: darkTheme,
};

export default function ThemeWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const { themeSelected } = useThemeState();
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [theme, setTheme] = useState<Theme>(
    generateTheme({ scheme: 'dark', palette: themeSelected.palette })
  );

  useEffect(() => {
    let scheme: 'light' | 'dark' = 'dark'
    if (themeSelected.theme === "system") {
      scheme = prefersDarkMode ? "dark" : "light"
    } else {
      scheme = themeSelected.theme
    }
    setTheme(generateTheme({ scheme: scheme, palette: themeSelected.palette }))
  }, [themeSelected.theme, prefersDarkMode]);

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
