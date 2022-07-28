/** @format */

import { createContext, useContext } from "react";

export const AppContext = createContext({
  theme: "light",
  openNavbar: false,
});

export function useAppContext() {
  return useContext(AppContext);
}
