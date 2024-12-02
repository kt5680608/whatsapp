import { createTheme, ThemeProvider as MuiThemeProvider } from "@mui/material"

const theme = createTheme({
    components:{
        MuiButton:{
            defaultProps:{
                disableRipple: true,
                disableElevation: true,
                variant: "contained"
            }
        }
    }
});

export const ThemeProvider= ({children}) => {
    return (
        <MuiThemeProvider theme = {theme}>
            {children}
        </MuiThemeProvider>
    )
}