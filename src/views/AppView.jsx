import React, { useState } from "react";
import { ViewContext } from "../context/ViewContext";

export const ViewContextProvider = ({ children }) => {
  const [view,setView] = useState('start')
  const changeView = (newView) => {
    setView(newView)
  }
  return (
    <ViewContext.Provider value={{view,changeView}}>
      <div className="flex flex-col justify-center items-center h-5/6">
        {children}
      </div>
    </ViewContext.Provider>
  );
};
