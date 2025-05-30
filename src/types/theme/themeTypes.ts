export type ThemeScheme = "light" | "dark" | "system";
export type ColorPalette =
  | "red"
  | "orange"
  | "amber"
  | "yellow"
  | "lime"
  | "green"
  | "emerald"
  | "teal"
  | "cyan"
  | "sky"
  | "blue"
  | "indigo"
  | "violet"
  | "purple"
  | "fucshia"
  | "pink"
  | "rose"
  | "slate"
  | "gray"
  | "zinc"
  | "neutral"
  | "stone";

type PaletteShades = {
  light: string;
  main: string;
  dark: string;
};

export type ColorTheme = {
  light: PaletteShades;
  dark: PaletteShades;
};

export type ThemePalette = {
  theme: ThemeScheme;
  palette: ColorPalette;
};
