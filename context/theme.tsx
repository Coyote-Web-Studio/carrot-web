import { ThemeProvider } from "styled-components";
import { useState, createContext, useContext } from "react";
// import darkTheme from "./../themes/dark";
import lightTheme from "./../themes/light";

const Context: any = createContext("");

const ThemeContext = ({ children }: any) => {
    const [theme, setTheme] = useState(lightTheme);

    // useEffect(() => {
    //     if (
    //         window.matchMedia &&
    //         window.matchMedia("(prefers-color-scheme: dark)").matches
    //     ) {
    //         setTheme(darkTheme);
    //     }
    // }, []);

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
