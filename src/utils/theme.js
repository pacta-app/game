import { createMuiTheme } from "@material-ui/core/styles";
import { blueGrey } from "@material-ui/core/colors";

const drawerWidth = 240;

/*
    MuiCircularProgress: {
      root: {
        position: 'absolute',
        left: 0,
        top: 0
      }
    },
*/

export const styles = theme => ({
  root: {
    display: "flex"
  },
  content: {
    display: "flex",
    flexGrow: 1,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: 0,
    [theme.breakpoints.up("sm")]: {
      width: "100%",
      marginLeft: 0
    }
  },
  contentShift: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth
    }
  }
});

export const theme = createMuiTheme({
  palette: {
    common: {
      black: "rgba(40, 31, 31, 1)",
      white: "#fff"
    },
    background: {
      paper: "#fff",
      default: "#F5F7F8"
    },
    error: {
      light: "#e57373",
      main: "#f44336",
      dark: "#d32f2f",
      contrastText: "rgba(185, 149, 149, 1)"
    },
    text: {
      primary: "rgba(0, 0, 0, 0.87)",
      secondary: "rgba(0, 0, 0, 0.54)",
      disabled: "rgba(0, 0, 0, 0.38)",
      hint: "rgba(0, 0, 0, 0.38)"
    },
    primary: {
      light: blueGrey[400],
      main: blueGrey[600],
      dark: blueGrey[900],
      contrastText: "#fff"
    },
    secondary: {
      light: blueGrey[100],
      main: blueGrey[300],
      dark: blueGrey[600],
      contrastText: "#000"
    }
  },
  typography: {
    useNextVariants: true,
    fontFamily: ["Roboto Slab", "serif"].join(",")
  },
  overrides: {
    MuiDrawer: {
      paper: {
        backgroundColor: "#ffffff",
        width: drawerWidth
      },
      root: {
        backgroundColor: "#ffffff",
        width: drawerWidth,
        "@media print": {
          display: "none"
        }
      }
    },
    MuiAppBar: {
      colorDefault: {
        backgroundColor: blueGrey[50],
        boxShadow: "none",
        borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
        "@media print": {
          display: "none"
        }
      },
      colorPrimary: {
        backgroundImage:
          "linear-gradient(315deg," + blueGrey[600] + "," + blueGrey[800] + ")",
        boxShadow: "none",
        borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
        "@media print": {
          display: "none"
        }
      },
      colorSecondary: {
        backgroundColor: "transparent",
        boxShadow: "none",
        borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
        "@media print": {
          display: "none"
        }
      }
    },
    MuiBadge: {
      badge: {
        background: blueGrey[50],
        color: blueGrey[800],
        border: "1px solid" + blueGrey[500]
      },
      colorSecondary: {
        border: 0
      },
      colorError: {
        border: 0,
        color: "#fff"
      }
    },
    MuiTooltip: {
      tooltip: {
        color: "#fff"
      }
    },
    MuiIconButton: {
      root: {
        color: blueGrey[500]
      }
    },
    MuiStepper: {
      root: {
        backgroundColor: "transparent",
        "@media print": {
          display: "none"
        }
      }
    },
    MuiLinearProgress: {
      root: {
        height: 10,
        marginTop: 8,
        marginBottom: 32
      }
    },
    MuiCircularProgress: {
      root: {
        position: 'absolute'
      },
      colorSecondary: {
        color: blueGrey[200]
      }
    },
    MuiTypography: {
      colorTextSecondary: {
        color: blueGrey[400]
      }
    },
    MuiTabs: {
      indicator: {
        backgroundColor: blueGrey[800]
      }
    },
    MuiTab: {
      root: {
        "@media (min-width: 960px)": {
          minWidth: 120
        }
      },
      textColorSecondary: {
        color: blueGrey[400],
        "&$selected": {
          color: blueGrey[900]
        }
      }
    },
    MuiCardContent: {
      root: {
        paddingTop: 0
      }
    },
    MuiBottomNavigation: {
      root: {
        zIndex: 1190,
        backgroundColor: blueGrey[50],
        background:
          "linear-gradient(315deg," + blueGrey[600] + "," + blueGrey[800] + ")"
      }
    },
    MuiBottomNavigationAction: {
      root: {
        color: blueGrey[100],
        "&$selected": {
          color: "#fff"
        }
      }
    },
    MuiAvatar: {
      colorDefault: {
        backgroundColor: blueGrey[400]
      }
    }
  }
});