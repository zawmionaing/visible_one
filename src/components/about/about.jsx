
import { Box, Typography, Button, Grid } from "@mui/material"
import aboutStyle from "./about.module.scss"
import tablet from "../../images/Tablet.png"
import { Fade, Slide } from "react-reveal"

const About = () => {


    return (
        <Grid container spacing={2} direction='row' className={aboutStyle.container}>
            <Grid item lg={6} md={12} className={aboutStyle.aboutText}>
                <Slide left>
                    <Box className={aboutStyle.title} sx={{ display: 'flex' }}>
                        <Typography sx={{ fontSize: '20px', fontWeight: '700', textTransform: 'uppercase', marginRight: '10px' }}>About</Typography>
                        <Typography sx={{ fontSize: '20px', fontWeight: '700', textTransform: 'uppercase', color: '#2dc4ea' }}>Trippro</Typography>
                    </Box>
                </Slide>
                <Fade left>
                    <Box sx={{ margin: '15px 0' }} className={aboutStyle.para}>
                        <Typography sx={{ textAlign: 'justify', fontSize: '12px' }}>
                            Lorem ipsum dolor, sit amet consectetur
                            adipisicing elit. Accusantium libero voluptatibus totam,
                            blanditiis sapiente qui magni quo nesciunt architecto et?
                            Ut perferendis eligendi magni nostrum voluptas, voluptatum
                            iste in esse. Lorem ipsum dolor, sit amet consectetur
                            adipisicing elit. Accusantium libero voluptatibus totam,
                            blanditiis sapiente qui magni quo nesciunt architecto et?

                        </Typography>
                    </Box>
                </Fade>
                <Slide left>
                    <Box>
                        <Button
                            className={aboutStyle.tourBtn}
                            variant="contained">Tour to website</Button>
                    </Box>
                </Slide>
            </Grid>
            <Grid item lg={6} className={aboutStyle.aboutImgCon}>
                <Box className={aboutStyle.circleCon}>
                    <Box className={aboutStyle.circleItem} sx={{ width: '440px', height: '440px' }}></Box>
                    <Box className={aboutStyle.circleItem} sx={{ width: '400px', height: '400px' }}></Box>
                    <Box className={aboutStyle.circleItem} sx={{ width: '350px', height: '350px' }}></Box>
                    <Box className={aboutStyle.disableBox1}></Box>
                    <Box className={aboutStyle.disableBox2}></Box>
                    <Box className={aboutStyle.disableBox3}></Box>
                    <Box className={aboutStyle.disableBox4}></Box>

                    <Slide right>
                        <img
                            className={aboutStyle.aboutImg}
                            src={tablet}
                            alt=""
                        />
                    </Slide>
                </Box>
            </Grid>
        </Grid>
    )
}
export default About