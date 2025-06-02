import { create } from "zustand";

interface MenuState {
    menuSelected: string | null;
    setMenuSelected: (menu: string) => void;
}

export const useMenuState = create<MenuState>()((set) => ({
    menuSelected: null,
    setMenuSelected: (menu) => set((state) => ({menuSelected: menu}))
}))
