import React, { createContext, useContext, useEffect } from "react";

interface CityProviderProps {
  children: React.ReactNode;
}

const CityContext = createContext<string | null>(null);

export const CityProvider: React.FC<CityProviderProps> = ({ children }) => {
  const [selectedCity, setCity] = React.useState<string | null>(null);

  return (
    <CityContext.Provider value={selectedCity}>
      {children}
    </CityContext.Provider>
  );
};

export const useSelectedCity = (): string | null => {
  const selectedCity = useContext(CityContext);
  if (selectedCity === null) {
    throw new Error("useSelectedCity must be used within a CityProvider");
  }
  return selectedCity;
};

interface SetSelectedCityProps {
  setCity: (city: string) => void;
}

export const SetSelectedCity: React.FC<SetSelectedCityProps> = ({ setCity }) => {
  useEffect(() => {
    // Здесь мы можем вызвать setCity с нужным городом при монтировании компонента
    setCity("Initial City");
  }, [setCity]); // Указываем зависимость, чтобы вызвать useEffect только при изменении setCity

  // Компонент не должен возвращать ничего визуального
  return null;
};
