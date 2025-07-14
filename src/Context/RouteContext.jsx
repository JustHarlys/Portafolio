import { createContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export const RouteContext = createContext();

export default function RouteProvider({ children }) {
  const location = useLocation();
  const [mode, setMode] = useState(false); // false = dev, true = freelance

  useEffect(() => {
    if (location.pathname === "/freelance") {
      setMode(true);
    } else if (location.pathname === "/dev") {
      setMode(false);
    }
  }, [location.pathname]);

  const onToggleMode = () => {
    const newMode = !mode;
    setMode(newMode);
  };

  return (
    <RouteContext.Provider value={{ mode, onToggleMode }}>
      {children}
    </RouteContext.Provider>
  );
}
