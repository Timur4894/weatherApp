import React, { createContext, useState, useContext } from 'react';

interface CityContextType {
  selectedCity: string;
  setSelectedCity: React.Dispatch<React.SetStateAction<string>>;
}

const CityContext = createContext<CityContextType>({
  selectedCity: '',
  setSelectedCity: () => {},
});

interface CityProviderProps {
  children: React.ReactNode;
}

export const CityProvider: React.FC<CityProviderProps> = ({ children }) => {
  const [selectedCity, setSelectedCity] = useState<string>('');

  return (
    <CityContext.Provider value={{ selectedCity, setSelectedCity }}>
      {children}
    </CityContext.Provider>
  );
};

export const useCity = (): CityContextType => useContext(CityContext);
