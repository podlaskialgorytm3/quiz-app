import React, { useContext } from "react";
import { ViewContext } from "../context/ViewContext";

export const ViewContextProvider = ({ children }) => {
  const { view } = useContext(ViewContext);


  return (
    <ViewContext.Provider value={view}>
      <div className="flex flex-col justify-center items-center h-5/6">
        {children}
      </div>
    </ViewContext.Provider>
  );
};
