import React, { createContext, useState } from "react";
import { useLocation } from "react-router-dom";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export const SearchContext = createContext();

export const SearchProvider = ({children}) => {
  let query = useQuery()
  const [search, setSearch] = useState(query.get("name"))
  return (
    <SearchContext.Provider value= {{search, setSearch}}>
      {children}
    </SearchContext.Provider>
  )
}