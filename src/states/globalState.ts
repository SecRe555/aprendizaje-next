import { ThemePalette } from "@/types/theme/themeTypes";
import { create } from "zustand";

interface ThemeState {
  themeSelected: ThemePalette;
  setThemeSelected: (theme: ThemePalette) => void;
}

export const useThemeState = create<ThemeState>()((set) => ({
  themeSelected: { theme: "light", palette: "red" },
  setThemeSelected: (theme: ThemePalette) =>
    set((state) => ({ themeSelected: theme })),
}));
