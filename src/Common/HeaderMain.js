import {React, useState, useEffect} from 'react';
import { Grid, Container, Button } from "@mui/material";
import { Link, useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import HeaderLogo from "./Assets/imgs/logo.png";
import FemaleIcon from '@mui/icons-material/Female';
import CelebrationIcon from '@mui/icons-material/Celebration';
import MaleIcon from '@mui/icons-material/Male';
import LockOutlineIcon from '@mui/icons-material/LockOutline';
import Modal from '@mui/material/Modal';
import SignInForm from './Forms/SignInForm';
import {useAppSelector, useAppDispatch} from '../Hooks/index';
import {logout} from '../Reducers/Auth';

function HeaderMain() {
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const isAuth = useAppSelector((state) => state.auth.isAuthenticated);
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    useEffect(() => {
        if (isAuth) {
        handleClose();
        }
    },[isAuth]);
    const handleLogout=() => {
        dispatch(logout());
        navigate('/');
    }

  return (
    <header className="header-main">
        <Container className="container" maxWidth="flase">
            <Grid container spacing={2}>
                <Grid size={{xs:12, md:8}}>
                    <Grid container spacing={0}>
                        <Grid size={{xs:3, md:4}} className="logoSect">
                            <Link href="/" target="_blank" rel="noopener" className='logo-link'>
                                <img src={HeaderLogo} alt="MUI Logo" className='mainLogo' />
                            </Link>
                        </Grid>
                        <Grid size={{xs:9, md:8}} textAlign={"left"} className="header-links">
                            <Link to="#"><FemaleIcon/> Girls</Link>
                            <Link to="#"><CelebrationIcon/> Anime</Link>
                            <Link to="#"><MaleIcon/> Guys</Link>
                            <Link to="/chat"><MaleIcon/> Chat</Link>
                            
                        </Grid>
                    </Grid>
                </Grid>
                <Grid size={{xs:12, md:4}} className="header-buttons">
                    <Button variant="contained" className="btn signUp" href="#">
                        Create Free Account
                    </Button>
                    {isAuth ?
                        <Button variant="contained"  className="btn login" onClick={handleLogout}>
                            <LockOutlineIcon/> Logout
                        </Button>
                    : 
                        <Button variant="contained"  className="btn login" onClick={handleOpen}>
                            <LockOutlineIcon/> Login
                        </Button>
                    }
                        
                </Grid>
            </Grid>
      </Container>
      <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            className='signInModal'
        >
            <Box sx={style}>
                <SignInForm/>
            </Box>
        </Modal>
    </header>
  );
}
export default HeaderMain;