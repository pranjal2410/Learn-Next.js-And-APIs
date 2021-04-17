import {createContext, useState} from 'react';
import {createMuiTheme} from "@material-ui/core";

const ThemeContext = createContext({theme: null, toggleTheme: null});

const ThemeContextProvider = (props) => {
    const dark = createMuiTheme({
        palette: {
            type: 'dark'
        }
    });

    const light = createMuiTheme({
        palette: {
            type: 'light'
        }
    });

    const [theme, setTheme] = useState(light);

    const toggleTheme = () => {
        setTheme(theme.palette.type === 'light'? dark : light);
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme}}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export { ThemeContext, ThemeContextProvider};