import { Stack, Typography } from "@mui/material"
import menuStyle from "./menubar.module.scss"
//icon
import SearchIcon from '@mui/icons-material/Search';
import { Fade } from "react-reveal"

const MenuBar = () => {
    
    return (
        <Stack className={menuStyle.menuCon}>
            <Stack sx={{ position: 'relative', display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }}>

                <Stack
                    direction="row"
                    className={menuStyle.logoCon}>
                    <Fade top>
                        <Typography className={menuStyle.logo}
                            variant="h1"
                            sx={{
                                color: '#2dc4ea',
                                fontSize: '25px',
                                fontWeight: '400',
                                textTransform: 'uppercase',
                                letterSpacing: '1.5px'
                            }}
                        >Visible</Typography>
                        <Typography className={menuStyle.logo}
                            variant="h1"
                            sx={{
                                color: '#02be02',
                                fontSize: '25px',
                                fontWeight: '400',
                                textTransform: 'uppercase',
                                letterSpacing: '1.5px'
                            }}
                        >One</Typography>
                    </Fade>
                </Stack>
                <Fade right>
                    <Stack direction='row' className={menuStyle.itemCon}>
                        <Stack direction="row" className={menuStyle.menuitem}>
                            <Typography sx={{ fontSize: '12px' }} className={menuStyle.text}>Home</Typography>
                        </Stack>
                        <Stack direction="row" className={menuStyle.menuitem}>
                            {/* <Select
                            labelId="demo-simple-select-helper-label"
                            id="demo-simple-select-helper"
                        >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select> */}
                            <select className={menuStyle.dropdown}>
                                <option selected>Services</option>
                                <option>Service 1</option>
                                <option>Service 2</option>
                            </select>
                        </Stack>
                        <Stack direction="row" className={menuStyle.menuitem}>
                            <select className={menuStyle.dropdown}>
                                <option selected>Company</option>
                                <option>Company 1</option>
                                <option>Company 2</option>
                            </select>
                        </Stack>
                        <Stack direction="row" className={menuStyle.menuitem}>
                            <Typography sx={{ fontSize: '12px' }} className="text">Blog</Typography>
                        </Stack>
                        <Stack direction="row" className={menuStyle.menuitem}>
                            <select className={menuStyle.dropdown}>
                                <option selected>Contace Us</option>
                                <option>Phome</option>
                                <option>Email</option>
                            </select>
                        </Stack>
                        <Stack direction="row" className={`${menuStyle.menuitem} ${menuStyle.searchIcon}`}>
                            <SearchIcon className={menuStyle.searchIcon} sx={{ fontSize: '20px' }} />
                        </Stack>
                    </Stack >
                </Fade>
            </Stack>

        </Stack >
    )
}
export default MenuBar