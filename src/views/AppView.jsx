import React from "react";
import { ViewContext } from "../context/ViewContext";

export const ViewContextProvieder = ({children}) => {
    const viewContextValue = 'start'
    return(
        <ViewContext.Provider value={viewContextValue}>
            {children}
        </ViewContext.Provider>
    )
}