
import { Stack, Typography } from "@mui/material";
import contactStyle from "./contactbar.module.scss";
//icons
import { Call } from "@mui/icons-material"
import MessageIcon from '@mui/icons-material/Message';
import EmailIcon from '@mui/icons-material/Email';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import { Fade } from "react-reveal"

const ContactBar = () => {
    return (
        <Stack className={contactStyle.contactCon}>
            <Fade top>
                <Stack direction='row' className={contactStyle.menuCon}>
                    <Stack direction="row" className={contactStyle.menuItems}>
                        <Call className={contactStyle.iconGroup1} />
                        <Typography className={contactStyle.text}>62480838</Typography>
                    </Stack>
                    <Stack direction="row" className={contactStyle.menuItems}>
                        <MessageIcon className={contactStyle.iconGroup1} />
                        <Typography className={contactStyle.text}>8484 9948</Typography>
                    </Stack>
                    <Stack direction="row" className={contactStyle.menuItems}>
                        <EmailIcon className={contactStyle.iconGroup1} />
                        <Typography className={contactStyle.text}>info@visibleone.com</Typography>
                    </Stack>
                    <Stack direction="row" className={contactStyle.menuItems2}>
                        <TextSnippetIcon className={contactStyle.iconGroup2} />
                        <Typography sx={{
                            color: 'white',
                            height: '30pxm'
                        }} className={`${contactStyle.text} ${contactStyle.text_uppercase}`}>Quote</Typography>
                    </Stack>
                    <Stack direction="row" className={contactStyle.menuItems}>
                        <select className={contactStyle.selectbox}>
                            <option>sg en</option>
                            <option>mm</option>
                        </select>
                    </Stack>
                </Stack>
            </Fade>
        </Stack>
    )
}
export default ContactBar