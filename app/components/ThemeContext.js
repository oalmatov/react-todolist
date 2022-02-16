import React, { useContext, useState } from 'react';

const ThemeContext = React.createContext();
const ThemeUpdateContext = React.createContext();

export const useTheme = () => {
    return useContext(ThemeContext);
};

export const useThemeUpdate = () => {
    return useContext(ThemeUpdateContext);
};

export function ThemeProvider({ children }) {
    const [blueTheme, setBlueTheme] = useState(true);

    const toggleTheme = () => {
        setBlueTheme((prevTheme) => !prevTheme);
    };

    return (
        <ThemeContext.Provider value={blueTheme}>
            <ThemeUpdateContext.Provider value={toggleTheme}>
                {children}
            </ThemeUpdateContext.Provider>
        </ThemeContext.Provider>
    );
}
