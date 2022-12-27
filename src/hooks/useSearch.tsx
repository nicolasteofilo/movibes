import { useContext } from "react";
import { SearchContext } from "../contexts/SearchContext";

export const useSearch = () => {
  const context = useContext(SearchContext);

  if (context === undefined) {
    throw new Error('useUser can only be used inside UserProvider');
  }

  return context;
}
