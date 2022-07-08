// Context for light and dark modes

import { createContext } from "react";

export const themes = {
    light: {
        backgroundColor: '#F5F5F5',
        color: 'black'
    },
    dark: {
        backgroundColor: '#221010',
        color: 'white'
    }
};

// Set default theme to light
const ThemeContext = createContext(themes.light); 

export default ThemeContext;