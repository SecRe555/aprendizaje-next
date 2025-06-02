import { ThemePalette } from "@/types/theme/themeTypes";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface ThemeState {
  themeSelected: ThemePalette;
  setThemeSelected: (theme: ThemePalette) => void;
}

export const useThemeState = create<ThemeState>()(
  persist((set, get) => ({
    themeSelected: { theme: "light", palette: "gray" },
    setThemeSelected: (theme: ThemePalette) =>
      set((state) => ({ themeSelected: theme })),
  }), {name: 'theme'})
);
