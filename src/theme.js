import {createTheme} from '@mui/material/styles'
const theme=createTheme({
    palette:{
        mode:'dark',
        primary:{
            main:'#ffd700',
            contrastText:'#000000'
        },
        secondary:{
            main:'#f0ffff',
            contrastText:'#000000'
        }
    },
    components:{
        MuiTabs:{
            styleOverrides:{
                root:{
                    color:'yellow',
                    borderBottom:'1px solid rgba(255,255,255,0.25)'
                },
                indicator:{
                    backgroundColor:'yellow'
                }
            }
        },
        MuiTab:{
            styleOverrides:{
                root:{
                    '&.Mui-selected':{
                        color:'yellow'
                    }
                }
            }
        }
    }
})
export default theme;