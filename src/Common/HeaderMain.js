import * as React from 'react';
import { Grid, Link, Container, Button } from "@mui/material";
import HeaderLogo from "./Assets/imgs/logo.png";
import FemaleIcon from '@mui/icons-material/Female';
import CelebrationIcon from '@mui/icons-material/Celebration';
import MaleIcon from '@mui/icons-material/Male';
import LockOutlineIcon from '@mui/icons-material/LockOutline';

function HeaderMain() {
  return (
    <header className="header-main">
        <Container className="container" maxWidth="flase">
            <Grid container spacing={2}>
                <Grid size={{xs:12, md:8}}>
                    <Grid container spacing={0}>
                        <Grid size={{xs:3, md:4}}>
                            <Link href="/" target="_blank" rel="noopener" className='logo-link'>
                                <img src={HeaderLogo} alt="MUI Logo" className='mainLogo' />
                            </Link>
                        </Grid>
                        <Grid size={{xs:9, md:8}} textAlign={"left"} className="header-links" verticalAlign="middle">
                            <Link href="#"><FemaleIcon/> Girls</Link>
                            <Link href="#"><CelebrationIcon/> Anime</Link>
                            <Link href="#"><MaleIcon/> Guys</Link>
                            
                        </Grid>
                    </Grid>
                </Grid>
                <Grid size={{xs:12, md:4}} className="header-buttons">
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
export default HeaderMain;