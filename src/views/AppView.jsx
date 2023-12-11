import React from "react";
import { ViewContext } from "../context/ViewContext";

export const ViewContextProvieder = ({children}) => {
    return(
        <ViewContext.Provider>
            <div className="flex flex-col justify-center items-center h-5/6">
                {children}
            </div>
        </ViewContext.Provider>
    )
}