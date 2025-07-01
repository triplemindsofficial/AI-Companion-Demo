import * as React from 'react';
import { Grid, Link, Container, Button } from "@mui/material";
import HeaderLogo from "./Assets/imgs/logo.png";
import FmdGoodIcon from './Assets/imgs/fmapIcon.svg';
import PhoneInTalkIcon from './Assets/imgs/fPhnIcon.svg';
import EmailIcon from './Assets/imgs/fenvelopIcon.svg';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';

function Footer() {
    return (
        <footer className="footer-main">
            <Container className="container" maxWidth="false">
                <Grid container spacing={2}>
                    <Grid size={{xs:12, md:4, lg:5}}>
                        <Grid container spacing={0}>
                            <Grid size={{xs:12, md:4, lg:5}} className="logoSect">
                                <Link href="/" target="_blank" rel="noopener" className='logo-link'>
                                    <img src={HeaderLogo} alt="MUI Logo" className='mainLogo' />
                                </Link>
                                <p>Copyright © 2024 IG Wild</p>
                                <p>Social Media</p>
                            </Grid>
                            <Grid size={{xs:12, md:4, lg:5}} textAlign={"left"} className="footer-links" verticalAlign="middle">
                                <h3>About</h3>
                                <ul className='footerLink'>
                                    <li><Link href="#">About Company</Link></li>
                                    <li><Link href="#">Our Solutions</Link></li>
                                    <li><Link href="#">Our Best Services</Link></li>
                                    <li><Link href="#">Professional Team</Link></li>
                                </ul>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid size={{xs:12, md:4, lg:3}} className="adrs">
                       <h3>Address</h3>
                        <ul className='footerLink'>
                            <li><img src={FmdGoodIcon} className="icon" alt="Phone Icon" /><Link href="#"> 551 Swanston Street, Melbourne<br/>Victoria 3053 Australia</Link></li>
                            <li><img src={PhoneInTalkIcon} className="icon" alt="Phone Icon" /><Link href="tel:+61 3 8376 6284">+61 3 8376 6284</Link></li>
                            <li><img src={EmailIcon} className="icon" alt="Phone Icon" /><Link href="mailto:info@designingmedia.com">info@designingmedia.com</Link></li>
                        </ul>
                    </Grid>
                    <Grid size={{xs:12, md:4, lg:4}} className="nwsLtr">
                       <h3>Newsletter Signup</h3>
                       <Box component="form" sx={{ '& > :not(style)': { m: 1, width: '25ch' } }} noValidate autoComplete="off" className='nwsLtrForm'>
                            <Box component="div" className='nwsLtrInputWrapper'>
                                <TextField label='Enter Your Email Address' variant="outlined" />
                                <Button variant="contained" className="btn signUp" href="#">Send</Button>
                            </Box>
                            <p><Checkbox />I agree to the<Link href="#"> Privacy Policy.</Link></p>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </footer>
    );
}

export default Footer;