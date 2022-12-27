import { useState, createContext } from "react";

interface SearchContextData {
  search: string;
  setSearch: (value: string) => void;
}

const initialState: SearchContextData = {
  search: "",
  setSearch: function (value: string): void {},
};

export const SearchContext = createContext<SearchContextData>(initialState);

interface SearchProviderProps {
  children: React.ReactNode;
}

export function SearchProvider({ children }: SearchProviderProps) {
  const [search, setSearch] = useState("");

  function handleChangeSearch(value: string) {
    setSearch(value);
  }

  return (
    <SearchContext.Provider
      value={{
        search,
        setSearch: handleChangeSearch
      }}
    >
      {children}
    </SearchContext.Provider>);
}
