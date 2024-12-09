import { createTheme, ThemeProvider as MuiThemeProvider } from "@mui/material"

const theme = createTheme({
    spacing: 2,
    palette:{
        primary: {
            main: '#0CA996'
        },
        mode: 'dark',
    },
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