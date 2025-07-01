import * as React from 'react';
import { Grid, Link, Container, Button } from "@mui/material";
import Box from '@mui/material/Box';
import HeaderLogo from "./Assets/imgs/logo.png";
import ProfilePic from "./Assets/imgs/userProfile.png";
import GiftIcon from '../Common/Assets/imgs/giftIcon.png'
import LockOutlineIcon from '@mui/icons-material/LockOutline';
import '../Common/Assets/css/chat.css'; // Assuming you have a CSS file for styles

function HeaderChat() {
  return (
    <header className="header-main">
        <Container className="container" maxWidth="flase">
            <Grid container spacing={2}>
                <Grid size={{xs:12, md:3}}>
                    <Grid container spacing={0}>
                        <Grid size={{xs:3, md:4}} className="logoSect">
                            <Link href="/" target="_blank" rel="noopener" className='logo-link'>
                                <img src={HeaderLogo} alt="MUI Logo" className='mainLogo' />
                            </Link>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid size={{xs:12, md:2}} className="userProfile">
                    <Box sx={{ width: '64px', height: '64px', borderRadius:'100px'}} className="profilePic">
                        <img src={ProfilePic} alt="usePic" className='onlineUser' />
                    </Box>
                    <div className='info'>Zilan<small>Online</small></div>
                </Grid>
                <Grid size={{xs:12, md:7}} className="header-buttons">
                    <Button variant="contained" className="btn gift" href="#">
                        <img src={GiftIcon} /> Send a Gift
                    </Button>
                    <Button variant="contained" className="btn signUp" href="#">
                        Create Free Account
                    </Button>
                    <Button variant="contained"  className="btn login" href="#">
                        <LockOutlineIcon/> Login
                    </Button>
                        
                </Grid>
            </Grid>
      </Container>
    </header>
  );
}
export default HeaderChat;