import React from "react";
import { useLocalStore, MobXProviderContext } from "mobx-react";
import { TStores } from "../types";

export const storesContext = React.createContext<TStores | null>(null);

export const StoresProvider = ({ children }: any) => {
  const stores = useLocalStore(createStores);
  return (
    <storesContext.Provider value={stores}>{children}</storesContext.Provider>
  );
};

export function createStores() {
    return {};
  }
