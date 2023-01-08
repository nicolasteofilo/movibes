import create from "zustand";
import { mountStoreDevtool } from 'simple-zustand-devtools';

interface State {
  searchTerm: string,
  updateSearchTerm: (term: string) => void,
}

export const useSearchStore = create<State>((set) => {
  return {
    searchTerm: '',
    updateSearchTerm(term: string) {
      set(() => ({searchTerm: term}))
    },
  }
})

if (process.env.NODE_ENV === 'development') {
  mountStoreDevtool('Search Store', useSearchStore);
}
