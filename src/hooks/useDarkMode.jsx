import React, { useContext } from "react";
import { DarkModeContext } from "../contexts/DarkModeContext";

function useDarkMode() {
  const contexts = useContext(DarkModeContext);
  if (!contexts) {
    console.log("useDarkmode must be used within a DarkModeProvider");
    return;
  } else return contexts;
}

export default useDarkMode;
