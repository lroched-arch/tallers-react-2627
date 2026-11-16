import { createContext, useContext } from "react";

export const TasquesContext = createContext(null)

export function useTasques() {
  const context = useContext(TasquesContext)

  if (!context) {
    throw new Error("useTasques s'ha de fer servir dins de <TasquesProvider>")
  }

  return context
}


