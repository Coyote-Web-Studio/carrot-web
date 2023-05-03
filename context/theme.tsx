import { ThemeProvider } from "styled-components";
import { useState, createContext, useContext, useEffect } from "react";
import lightTheme from "./../themes/light";
import darkTheme from "./../themes/dark";

const Context: any = createContext("");

const ThemeContext = ({ children }: any) => {
    const [theme, setTheme] = useState(darkTheme);

    useEffect(() => {
        if (
            window.matchMedia &&
            window.matchMedia("(prefers-color-scheme: dark)").matches
        ) {
            setTheme(darkTheme);
        }
    }, []);

    return (
        <Context.Provider value={[theme, setTheme]}>
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </Context.Provider>
    );
};

export default ThemeContext;

export const useThemeContext = () => {
    return useContext(Context);
};
