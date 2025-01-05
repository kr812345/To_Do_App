"use client";

import { createContext } from "react";

export const DateContext = createContext();

export const DateProvider = ({ value, children }) => {
  return (
    <DateContext.Provider value={value}>
      {children}
    </DateContext.Provider>
  );
};
