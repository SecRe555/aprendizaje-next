import { ThemePalette } from "@/types/theme/themeTypes";
import { create } from "zustand";

interface ThemeState {
  themeSelected: ThemePalette;
  setThemeSelected: (theme: ThemePalette) => void;
}

export const useThemeState = create<ThemeState>()((set) => ({
  themeSelected: { theme: "system", palette: "amber" },
  setThemeSelected: (theme: ThemePalette) =>
    set((state) => ({ themeSelected: theme })),
}));
