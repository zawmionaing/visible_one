import { useState } from "react"
import { Box, Stack, Switch, Typography } from "@mui/material"
import webStyle from "./website.module.scss"
import { Slide } from "react-reveal"

//icon
import EastIcon from '@mui/icons-material/East';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

//images
import destop from "../../images/destop.png";
import trippro from "../../images/trippro.png"
import mobile from "../../images/mobile.png"
import trippro0 from "../../images/trippro_iPhone0.png"
import trippro1 from "../../images/trippro_iPhone1.png"
import trippro2 from "../../images/trippro_iPhone2.png"
const Website = () => {

    const [isDestop, setIsDestop] = useState(true);
    const handleChange = (event) => {
        setIsDestop(event.target.checked);
    };
    const switchRight = () => {
        setIsDestop(true)
    }
    const switchLeft = () => {
        setIsDestop(false)
    }
    console.log(isDestop)
    return (
        <Stack direction='row' className={webStyle.WebContainer}>
            <Slide right>
                <Stack direction='column' className={webStyle.container}>
                    <Box className={webStyle.contact}>
                        <Typography sx={{ fontSize: '22px', fontWeight: '500', color: '#fff', letterSpacing: '0.5px', marginBottom: '20px' }}>
                            Their Old Website & Problems
                        </Typography>
                        <Stack spacing={3}>
                            <Stack direction='row' sx={{ justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                                <EastIcon sx={{ color: '#fff', marginRight: '5px' }} />
                                <Typography sx={{ color: '#fff', fontSize: '12px', textAlign: 'left' }} >
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore neque minus consequatur labore quia animi dolor amet.
                                </Typography>

                            </Stack>
                            <Stack direction='row' sx={{ justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                                <EastIcon sx={{ color: '#fff', marginRight: '5px' }} />
                                <Typography sx={{ color: '#fff', fontSize: '12px', textAlign: 'left' }} >
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore neque minus consequatur labore quia animi dolor amet.
                                </Typography>

                            </Stack>
                            <Stack direction='row' sx={{ justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                                <EastIcon sx={{ color: '#fff', marginRight: '5px' }} />
                                <Typography sx={{ color: '#fff', fontSize: '12px', textAlign: 'left' }} >
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore neque minus consequatur labore quia animi dolor amet.
                                </Typography>

                            </Stack>
                        </Stack>
                        <Box
                            sx={{
                                width: '200px',
                                height: 'auto',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                alignItems: 'flex-start',
                                margin: '50px auto 10px 0px',

                            }}>

                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    justifyContent: 'flex-start',
                                    alignItems: 'center',
                                    color: '#fff',
                                    marginBottom: '20px',
                                }}>
                                <ArrowBackIosIcon
                                    onClick={switchLeft}
                                    className={webStyle.slideIcon}
                                />
                                <ArrowForwardIosIcon
                                    onClick={switchRight}
                                    className={webStyle.slideIcon}
                                />
                            </Box>
                            <Box className={webStyle.switchBtn}>
                                <Typography onClick={switchLeft} className={webStyle.switchArrow}>Mobile</Typography>
                                <Switch
                                    checked={isDestop}
                                    onChange={handleChange}
                                    inputProps={{ 'aria-label': 'controlled' }}
                                ></Switch>
                                <Typography onClick={switchRight} className={webStyle.switchArrow}>Destop</Typography>
                            </Box>
                        </Box>
                    </Box>
                </Stack>
            </Slide>

            <Stack className={webStyle.switchCon}>
                <Slide left when={isDestop}>
                    <Slide left>
                        <Stack
                            direction='row'
                            // sx={{ marginLeft: '-1000px' }}
                            className={webStyle.destopCon}
                        >
                            <img
                                alt=""
                                src={trippro}
                                className={webStyle.trippro}
                            />
                            <img
                                alt=""
                                src={destop}
                                className={webStyle.destop}
                            />
                        </Stack>
                    </Slide>
                </Slide>
                <Slide left when={!isDestop}>
                    <Slide left>
                        <Stack
                            spacing={1}
                            direction='row'
                            // sx={{ marginLeft: '-1000px' }}
                            className={webStyle.mobileCon}
                        >
                            <img
                                alt=""
                                src={trippro2}
                                className={webStyle.trippro0}
                            />
                            <img
                                alt=""
                                src={trippro1}
                                className={webStyle.trippro1}
                            />
                            <img
                                alt=""
                                src={trippro0}
                                className={webStyle.trippro2}
                            />
                            <img
                                alt=""
                                src={mobile}
                                className={webStyle.mobile}
                            />
                        </Stack>
                    </Slide>
                </Slide>

            </Stack>

        </Stack>
    )
}
export default Website 