import { Stack, Typography, Box } from "@mui/material"
import mainPageStyle from "./mainpage.module.scss"
import { Fade } from "react-reveal"
import responsive from "../../images/responsive.svg"
import wordPress from "../../images/wordpress-logo.svg"
import ShoppingCart from "../../images/shopping-cart.svg"
import laptop from "../../images/Laptop.png"

const MaingPage = () => {
    return (
        <Stack direction='row' className={mainPageStyle.container}>
            <Stack className={mainPageStyle.itemCon}>
                <Fade top>
                    <Stack className={mainPageStyle.titleCon}>
                        <Typography
                            variant="h1"
                            sx={{
                                fontSize: '3rem',
                                fontWeight: '100',
                                marginTop: '50px'
                            }}
                            className={mainPageStyle.title}>
                            Trippro-an Ecommerce Solution
                        </Typography>
                    </Stack>
                </Fade>
                <Fade left>
                    <Stack sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
                        <Typography
                            variant="caption"
                            sx={{
                                fontSize: '12px',
                                fontWeight: '200',
                                marginTop: '10px',
                                color: '#ffffff',
                                width: '70%',
                            }}>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                            Inventore ratione totam maiores, aliquid omnis optio, vel odio
                            magnam sunt odit, cum quae tempora suscipit. Unde consequatur
                            blanditiis et quibusdam quod.
                        </Typography>
                    </Stack>
                </Fade>
                <Fade right>
                    <Stack direction='row'
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginTop: '15px'
                        }}>
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                color: '#fff',

                            }}
                        >
                            <Typography sx={{ fontSize: '20px', marginRight: '10px' }}>
                                Built for:
                            </Typography>
                            <img
                                className={mainPageStyle.serviceImg}
                                src={responsive}
                                alt="responsive"
                            ></img>
                        </Box>
                        <Box className={mainPageStyle.divisor}></Box>
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                color: '#fff',

                            }}
                        >
                            <Typography sx={{ fontSize: '15px', marginRight: '10px' }}>
                                Technologies:
                                <Typography sx={{ fontSize: '20px', }}>Wordpress</Typography>
                            </Typography>
                            <img
                                className={mainPageStyle.serviceImg}
                                src={wordPress}
                                alt="responsive"
                            ></img>
                        </Box>
                        <Box className={mainPageStyle.divisor}></Box>
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                color: '#fff',

                            }}
                        >
                            <Typography sx={{ fontSize: '15px', marginRight: '10px' }}>
                                Industry:
                                <Typography sx={{ fontSize: '20px', }}>Wordpress</Typography>
                            </Typography>
                            <img
                                className={mainPageStyle.serviceImg}
                                src={ShoppingCart}
                                alt="responsive"
                            ></img>
                        </Box>
                    </Stack>
                </Fade>
                <Box>
                    <Fade bottom>
                        <img
                            className={mainPageStyle.laptop}
                            alt=''
                            src={laptop}
                        />
                    </Fade>
                </Box>
            </Stack>
        </Stack>
    )
}
export default MaingPage