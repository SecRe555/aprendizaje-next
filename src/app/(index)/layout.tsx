"use client";

import {
  AppBar as MuiAppBar,
  Button,
  Drawer as MuiDrawer,
  IconButton,
  Toolbar,
  Typography,
  styled,
  CSSObject,
  Theme,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
  useTheme,
  Menu,
  MenuItem,
  Divider,
  Select,
  SelectChangeEvent,
  useMediaQuery,
  FormControl,
  InputLabel,
} from "@mui/material";
import { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import { Icon } from "@iconify/react";
import { useState } from "react";
import { systemTheme } from "@/theme/theme";
import { useRouter } from "next/navigation";
import { useThemeState } from "@/states/themeState";
import { ColorPalette, ThemePalette } from "@/types/theme/themeTypes";
import { colors } from "@/theme/themeFactory";

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  variants: [
    {
      props: ({ open }) => open,
      style: {
        ...openedMixin(theme),
        "& .MuiDrawer-paper": openedMixin(theme),
      },
    },
    {
      props: ({ open }) => !open,
      style: {
        ...closedMixin(theme),
        "& .MuiDrawer-paper": closedMixin(theme),
      },
    },
  ],
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  variants: [
    {
      props: ({ open }) => open,
      style: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(["width", "margin"], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
    },
  ],
}));

type NavOption = { icon: string; text: string };
const options: NavOption[] = [
  { icon: "line-md:home-md-twotone", text: "Menu Principal" },
  { icon: "line-md:grid-3-filled", text: "Materias" },
  { icon: "line-md:chat-filled", text: "Chat" },
];

const colorLabels: Record<ColorPalette, string> = {
  red: "Rojo",
  orange: "Naranja",
  amber: "Ámbar",
  yellow: "Amarillo",
  lime: "Lima",
  green: "Verde",
  emerald: "Esmeralda",
  teal: "Azul verdoso",
  cyan: "Cian",
  sky: "Celeste",
  blue: "Azul",
  indigo: "Índigo",
  violet: "Violeta",
  purple: "Morado",
  fucshia: "Fucsia",
  pink: "Rosa",
  rose: "Rosado",
  slate: "Pizarra",
  gray: "Gris",
  zinc: "Cinc",
  neutral: "Neutro",
  stone: "Piedra",
};

export default function LayoutAuth({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const isMenuOpen = Boolean(anchorEl);
  const handleClickMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMenu = () => setAnchorEl(null);

  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  const handleToggleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

  const router = useRouter();
  const theme = useTheme();
  const { themeSelected, setThemeSelected } = useThemeState();
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  return (
    <main className="w-dvw h-dvh flex flex-col">
      <AppBar position="sticky" className="">
        <Toolbar className="gap-4">
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            className="mr-2"
            onClick={handleToggleDrawer}
          >
            {openDrawer ? (
              <Icon icon="line-md:close" />
            ) : (
              <Icon icon="line-md:menu" />
            )}
          </IconButton>
          <Typography variant="h6" component="h1" className="px-5 grow">
            Experencias educativas
          </Typography>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            className="mr-2"
          >
            <Icon icon="line-md:sun-rising-filled-loop" />
            <Icon icon="line-md:moon-filled-alt-loop" />
            <Icon icon="line-md:computer-twotone" />
          </IconButton> */}
          <IconButton onClick={handleClickMenu}>
            <Icon icon="line-md:account" />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={isMenuOpen}
            onClose={handleCloseMenu}
            onClick={handleCloseMenu}
            slotProps={{
              paper: {
                elevation: 0,
                sx: {
                  overflow: "visible",
                  filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                  mt: 1.5,
                  borderRadius: 0,
                },
              },
            }}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          >
            <MenuItem>
              <ListItemIcon>
                <Icon icon="line-md:account" />
              </ListItemIcon>
              Cuenta
            </MenuItem>
            {/* <MenuItem>
              <ListItemIcon>
                {themeSelected.theme === "system" && (
                  <Icon icon="line-md:computer-twotone" />
                )}
                {themeSelected.theme === "light" && (
                  <Icon icon="line-md:sun-rising-filled-loop" />
                )}
                {themeSelected.theme === "dark" && (
                  <Icon icon="line-md:moon-filled-alt-loop" />
                )}
              </ListItemIcon>
              Tema
            </MenuItem>
            <MenuItem>
              <Box component={"span"} sx={{ width: 18, height: 18, bgcolor: theme.palette.primary.main }} />
              Color
            </MenuItem> */}
            <Divider />
            <MenuItem>
              <ListItemIcon>
                <Icon icon="line-md:logout" />
              </ListItemIcon>
              Cerrar sesion
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={openDrawer}>
        <Box sx={{ ...systemTheme.mixins.toolbar }} />
        <List>
          {options.map(({ icon, text }, index) => (
            <ListItem key={index} className="my-1" disablePadding>
              <ListItemButton
                className="min-h-12 pr-2 flex justify-start items-center gap-0.5"
                disableRipple
              >
                <ListItemIcon
                  className="min-w-0 justify-center items-center ml-[-13px] mr-1"
                  sx={{ color: "inherit" }}
                >
                  <Icon icon={icon} fontSize={24} color="currentColor" />
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box className="w-fit fixed bottom-5 right-5 flex gap-4">
        <FormControl>
          <InputLabel>Tema</InputLabel>
          <Select
            label="Tema"
            value={themeSelected.theme}
            onChange={(event: SelectChangeEvent) =>
              setThemeSelected({
                ...themeSelected,
                theme: event.target.value,
              } as ThemePalette)
            }
            MenuProps={{
              style: { maxHeight: 48 * 5.5 }, // Cada elemento mide 48px con todo y padding
              slotProps: {
                paper: {
                  elevation: 0,
                  sx: {
                    borderRadius: 0,
                  },
                },
              },
            }}
          >
            <MenuItem value="system">
              <ListItemIcon>
                <Icon icon="line-md:computer-twotone" />
              </ListItemIcon>
              Sistema
            </MenuItem>
            <MenuItem value="light">
              <ListItemIcon>
                <Icon icon="line-md:sun-rising-filled-loop" />
              </ListItemIcon>
              Claro
            </MenuItem>
            <MenuItem value="dark">
              <ListItemIcon>
                <Icon icon="line-md:moon-filled-alt-loop" />
              </ListItemIcon>
              Oscuro
            </MenuItem>
          </Select>
        </FormControl>
        <FormControl>
          <InputLabel>Paleta</InputLabel>
          <Select
            label="Paleta"
            value={themeSelected.palette}
            onChange={(event: SelectChangeEvent) =>
              setThemeSelected({
                ...themeSelected,
                palette: event.target.value,
              } as ThemePalette)
            }
            MenuProps={{
              style: { maxHeight: 48 * 5.5 }, // Cada elemento mide 48px con todo y padding
              slotProps: {
                paper: {
                  elevation: 0,
                  sx: {
                    borderRadius: 0,
                  },
                },
              },
            }}
          >
            {Object.entries(colorLabels).map(([key, label]) => (
              <MenuItem key={key} value={key}>
                <ListItemIcon>
                  <Box
                    component="span"
                    sx={{
                      width: 18,
                      height: 18,
                      bgcolor: prefersDarkMode
                        ? colors[key as ColorPalette].dark.main
                        : colors[key as ColorPalette].light.main,
                    }}
                  />
                </ListItemIcon>
                {label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </main>
  );
}
