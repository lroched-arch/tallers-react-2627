import { createContext, useContext } from "react";

export const FiltreTasquesContext = createContext(null)

export function useFiltreTasques() {
  const context = useContext(FiltreTasquesContext)

  if (!context) {
    throw new Error("useTasques s'ha de fer servir dins de <TasquesProvider>")
  }

  return context
}
