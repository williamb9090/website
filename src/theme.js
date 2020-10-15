import {createMuiTheme} from '@material-ui/core'
import { withTheme } from '@material-ui/styles'

const light = createMuiTheme({
    palette: {
        primary: {
            main: "#34435E",
            text: "#111621"
        },
        secondary: {
            main: "#111621"
        }
    },
    typography: {
        fontFamily: "Montserrat",
        body2: {
            fontSize: "2rem",
        }
    },
    shape: {
        borderRadius: 3,
    },
    overrides: {
        MuiButton: {
            disableRipple: true,
        },
        MuiIconButton: {
            disableRipple: true,
            disableFocusRipple: true,
        }
    },
    breakpoints: {
        values: {
            mobile: 960,
            xs: 0,
            sm: 600,
            md: 960,
            lg: 1280,
            xl: 1920,
        },
    },
    props: {
        MuiButton: {
            disableRipple: true,
            // color: "primary",
            // variant: "contained"
        },
        MuiIconButton: {
            disableRipple: true,
        },
    },
    id: "light",
});

const dark = createMuiTheme({
    palette: {
        primary: {
            main: "#111621",
            text: "white"
        },
        secondary: {
            main: "#fffde7"
        }
    },
    typography: {
        fontFamily: "Montserrat",
        body2: {
            fontSize: "2rem",
        }
    },
    shape: {
        borderRadius: 3,
    },
    overrides: {
        MuiButton: {
            root: {
                textTransform: "none"
            }
        }
    },
    breakpoints: {
        values: {
            mobile: 960,
            xs: 0,
            sm: 600,
            md: 960,
            lg: 1280,
            xl: 1920,
        },
    },
    props: {
        MuiButton: {
            disableRipple: true,
        },
        MuiIconButton: {
            disableRipple: true,
        }
    },
    id: "dark",
})

export {light as light}
export {dark as dark}