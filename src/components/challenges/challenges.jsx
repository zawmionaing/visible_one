import { useState, useEffect } from "react"
import axios from "axios"
import { Fade, Slide } from "react-reveal"

//MUI 
import { Grid, Stack, Typography, Box, Button } from "@mui/material"
//style
import challengeStyle from "./challenges.module.scss"
//image
import cube from "../../images/cube.png"

const Challenges = () => {
    const url = "https://jsonplaceholder.typicode.com/posts ";
    const [chaData, setChaData] = useState();
    const fetchInfo = () => {
        return axios.get(url)
            .then((response) => setChaData(response.data));
    }

    useEffect(() => {
        fetchInfo();
    }, [])

    const ChallengeItem = ({ no, title, body }) => {
        return (
            <Grid key={no} container className={challengeStyle.challengeBox}>
                <Grid lg={1} item>
                    <Typography sx={{ fontSize: '20px', fontWeight: '700', color: '#96eaff', marginRight: '5px' }}>
                        {no.toString().length === 1 ? "0" + no : no.toString()}
                    </Typography>
                </Grid>
                <Grid lg={11} item>
                    <Box>
                        <Typography sx={{ fontSize: '12px', fontWeight: '700', textAlign: 'left', marginBottom: '5px' }}>{title}</Typography>
                        <Typography sx={{ fontSize: '12px', textAlign: 'left', }}>
                            {body}
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        )
    }
    return (
        <Stack className={challengeStyle.container}>
            <Fade right>
                <Box sx={{ display: 'flex', marginRight: '0px', marginBottom: '20px', marginLeft: '50%' }}>
                    <Typography sx={{ fontSize: '20px', fontWeight: '700', textTransform: 'uppercase', marginRight: '10px' }}>Our</Typography>
                    <Typography sx={{ fontSize: '20px', fontWeight: '700', textTransform: 'uppercase', color: '#2dc4ea' }}>Challenges</Typography>
                </Box>
            </Fade>
            <Grid container spacing={3}
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                <Grid lg={6} md={12} item>
                    <Fade left>
                        <img
                            className={challengeStyle.cubeImg}
                            src={cube}
                            alt=""
                        />
                    </Fade>
                </Grid>
                <Grid lg={6} md={12} item>
                    <Slide right>
                        <Box className={challengeStyle.challengeItemCon}>
                            {chaData?.map(item => (
                                <Fade bottom key={item.it}>
                                    <ChallengeItem
                                        key={item.it}
                                        no={item.id}
                                        title={item.title}
                                        body={item.body}
                                    />
                                </Fade>
                            ))}
                        </Box>
                    </Slide>
                </Grid>
            </Grid>
            <Fade right>
                <Box sx={{ margin: '20px 0', textAlign: 'left', marginLeft: '50%' }}>
                    <Button
                        className={challengeStyle.viewMore}
                        variant="contained">View More</Button>
                </Box>
            </Fade>
        </Stack >
    )
}
export default Challenges