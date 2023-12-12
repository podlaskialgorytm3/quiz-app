import React from "react";
import { ViewContext } from "../context/ViewContext";

export const ViewContextProvider = ({ children }) => {

  const ctxValue = {
    view: 'start'
  }
  return (
    <ViewContext.Provider value={ctxValue}>
      <div className="flex flex-col justify-center items-center h-5/6">
        {children}
      </div>
    </ViewContext.Provider>
  );
};
