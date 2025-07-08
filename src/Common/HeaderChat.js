import {React, use, useState, useEffect} from 'react';
import { Grid, Container, Button, Typography } from "@mui/material";
import { Link, useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import HeaderLogo from "./Assets/imgs/logo.png";
import ProfilePic from "./Assets/imgs/userProfile.png";
import GiftIcon from '../Common/Assets/imgs/giftIcon.png'
import LockOutlineIcon from '@mui/icons-material/LockOutline';
import Modal from '@mui/material/Modal';
import '../Common/Assets/css/chat.css';
import {useAppSelector, useAppDispatch} from '../Hooks/index';
import SignInForm from './Forms/SignInForm';
import {logout} from '../Reducers/Auth';

function HeaderChat() {
    const isAuth = useAppSelector((state) => state.auth.isAuthenticated);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
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
    
        const [open, setOpen] = useState(false);
        const handleOpen = () => setOpen(true);
        const handleClose = () => setOpen(false);

        useEffect(() => {
          if (isAuth) {
            handleClose();
          }
        },[isAuth]);

    const handleLogout=() => {
        localStorage.setItem('chatHistory',[]);
        dispatch(logout())
        navigate('/'); // Assuming you have useNavigate imported from 'react-router-dom'
    }

  return (
    <header className="header-main">
        <Container className="container" maxWidth="flase">
            <Grid container spacing={2}>
                <Grid size={{xs:12, md:3}}>
                    <Grid container spacing={0}>
                        <Grid size={{xs:3, md:4}} className="logoSect">
                            <Link to="/" rel="noopener" className='logo-link'>
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
export default HeaderChat;