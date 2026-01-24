import { createContext, ReactNode, useContext, useEffect, useState } from 'react';

import Lockr from 'lockr';

type LeagueContextType = {
  currentSelectedLeague: string | null;
  setCurrentSelectedLeague: (value: string | null) => void;
};

const LOCAL_KEY = 'lastSelectedLeague';

const LeagueContext = createContext<LeagueContextType | undefined>(undefined);

export function LeagueProvider({ children }: { children: ReactNode }) {
  const [currentSelectedLeague, setCurrentSelectedLeagueState] = useState<string | null>(
    () => Lockr.get(LOCAL_KEY) || null,
  );

  const setCurrentSelectedLeague = (value: string | null) => {
    if (value === null) {
      Lockr.rm(LOCAL_KEY);
    } else {
      Lockr.set(LOCAL_KEY, value);
    }
    setCurrentSelectedLeagueState(value);
  };

  useEffect(() => {
    const onStorage = (e: StorageEvent) => {
      if (e.key === LOCAL_KEY) {
        setCurrentSelectedLeagueState(e.newValue);
      }
    };
    window.addEventListener('storage', onStorage);
    return () => window.removeEventListener('storage', onStorage);
  }, []);

  return (
    <LeagueContext.Provider value={{ currentSelectedLeague, setCurrentSelectedLeague }}>
      {children}
    </LeagueContext.Provider>
  );
}

export const useLeague = (): LeagueContextType => {
  const ctx = useContext(LeagueContext);
  if (!ctx) {
    throw new Error('useLeague must be used within LeagueProvider');
  }
  return ctx;
};
