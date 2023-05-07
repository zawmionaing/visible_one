import { Stack, Typography, Box, TextField, Button } from "@mui/material"

import FooterStyle from "./footer.module.scss"
import { Fade, Slide } from "react-reveal"
//icon
import EmailIcon from '@mui/icons-material/Email';
import { Facebook, Twitter, Instagram, YouTube, ForumRounded } from "@mui/icons-material";
//images
import shopify from "../../images/shopify.png"
import paypal from "../../images/paypal.png"
import adword from "../../images/adwords.png"
import googleAnalysis from "../../images/googleAnalysis.png"
import map from "../../images/map.png"

const Footer = () => {
    return (
        <Stack direction='row' className={FooterStyle.container}>
            <Stack spacing={4} className={FooterStyle.background}>
                <Fade bottom>
                    <Stack direction='row' spacing={15} sx={{ marginTop: '20px', width: 'auto' }}>
                        <Stack>
                            <Typography sx={{ color: 'HighlightText', fontSize: '15px', fontWeight: '400' }}>Quick links</Typography>
                            <ul className={FooterStyle.quickLinks}>
                                <li>Services</li>
                                <li>About Us</li>
                                <li>Blog</li>
                                <li>Quotation</li>
                                <li>Partnership</li>
                                <li>Contact Us</li>
                            </ul>
                        </Stack>
                        <Stack>
                            <Typography sx={{ color: 'HighlightText', fontSize: '15px', fontWeight: '400' }}>Our Services</Typography>
                            <ul className={FooterStyle.quickLinks}>
                                <li>Web Develoment</li>
                                <li>Web Design</li>
                                <li>Responsive Website Design</li>
                                <li>CMS Website Design</li>
                                <li>Custom Website Design</li>
                                <li>UI & UX Website Design</li>
                                <li>360 Virtual Tour</li>
                            </ul>
                        </Stack>
                        <Stack sx={{ marginTop: '20px' }}>
                            <ul className={FooterStyle.quickLinks}>
                                <li>Ecommerce Development</li>
                                <li>WooCommerce Development</li>
                                <li>osCommerce Development</li>
                                <li>Magento Development</li>
                                <li>BigCommerce development</li>
                                <li>SSL Certificate</li>
                                <li>Promotion Video</li>
                            </ul>
                        </Stack>
                        <Stack>
                            <Typography sx={{ color: 'HighlightText', fontSize: '15px', fontWeight: '400' }}>Bisible one Singapore</Typography>
                            <ul className={FooterStyle.quickLinks1}>
                                <li className={FooterStyle.footerMail}>
                                    <EmailIcon sx={{ marginRight: '5px', }} />
                                    +65 6248 0838
                                </li>
                                <li>info@visibleone.com</li>
                                <li>
                                    24 Sin Ming Lane Midview City #07-93
                                    Singapore 573970
                                </li>
                                <li>Office Hour: Mon-Fri (9am-6pm)</li>
                            </ul>
                            <Stack
                                direction="row"
                                sx={{
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    marginTop: '5px',
                                    fontSize: '12px'
                                }}>
                                <Button
                                    variant="contained"
                                    size="small"
                                    sx={{
                                        marginRight: '5px',
                                        fontSize: '12px',
                                    }}
                                >Contact Us</Button>
                                <a href="" className={FooterStyle.contactLink}>Contact MK Office</a>
                            </Stack>
                        </Stack>
                    </Stack>
                </Fade>
                <Fade bottom>
                    <Stack direction='row' className={FooterStyle.partner}>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'space-around',
                                alignItems: 'center',
                            }}
                        >
                            <img
                                className={FooterStyle.partnerImg}
                                alt=""
                                src={shopify}
                            />
                            <img
                                className={FooterStyle.partnerImg}
                                alt=""
                                src={paypal}
                            />
                            <img
                                className={FooterStyle.partnerImg}
                                alt=""
                                src={adword}
                            />
                            <img
                                className={FooterStyle.partnerImg}
                                alt=""
                                src={googleAnalysis} />
                            <img
                                className={FooterStyle.partnerImgmap}
                                alt=""
                                src={map} />
                        </Box>
                        <Box className={FooterStyle.inputBox}>
                            <Box>
                                <Typography
                                    sx={{
                                        fontSize: '12px',
                                        marginBottom: '5px'
                                    }}
                                >Subscribe to our news, tips, and guidlines</Typography>
                                <TextField
                                    sx={{
                                        color: '#fff',
                                        height: '30px',
                                        marginRight: '5px',
                                        "& input": {
                                            color: '#fff',
                                            borderColor: '#fff',
                                        }
                                    }}
                                    id="subscribe"
                                    variant="outlined"
                                    size="small"
                                    color="info"
                                    placeholder="123@text.com"
                                />
                            </Box>
                            <Button
                                variant="contained"
                                size="small"
                            >Submit</Button>
                        </Box>
                    </Stack>
                </Fade>
                <Stack direction='row' spacing={2} className={FooterStyle.social}>
                    <Slide left>
                        <Facebook sx={{ fontSize: '30px' }} />
                        <Twitter sx={{ fontSize: '30px' }} />
                    </Slide>
                    <Slide right>
                        <Instagram sx={{ fontSize: '30px' }} />
                        <YouTube sx={{ fontSize: '30px' }} />
                    </Slide>
                </Stack>
                <Fade bottom>
                    <Stack
                        direction='row'
                        sx={{
                            fontSize: '12px',
                            color: '#fff',
                            fontWeight: '200',
                        }}>
                        <Typography className={FooterStyle.shopp}>Shopping T&C </Typography>
                        <Typography className={FooterStyle.term}> Terms & Conditions</Typography>
                        <Typography className={FooterStyle.shopp}> Privacy Policy @2018 - Visible One</Typography>

                    </Stack>
                </Fade>
                <Fade bottom>
                    <Box className={FooterStyle.message}>
                        <ForumRounded />
                    </Box>
                </Fade>
            </Stack>
        </Stack >
    )
}
export default Footer