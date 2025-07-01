import {react, Link, useState} from "react";
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Divider, Button,  } from "@mui/material";
import ProfileIcon from './Assets/imgs/profile.svg';
import DiscoverIcon from './Assets/imgs/discover.svg';
import PremiumIcon from './Assets/imgs/premium.svg';
import LeaderIcon from './Assets/imgs/leader.svg';
import AffiliateIcon from './Assets/imgs/affiliate.svg';
import OpenIcon from './Assets/imgs/humbergIcon.png';


function ChatLeftNav() {
    const [isopen, setIsopen] = useState(false);
    const active = isopen ? "active" : "";
    return (
        <Box className={`home-left-nav chatNav ${active}`} >
            {/* <div className="nav-btn-lft">
                <Button className="btn signUp" href="#">Create AI Influencer</Button>
            </div> */}
            <nav aria-label="main mailbox folders">
                <List className="menu-list">
                    <ListItem>
                        <ListItemButton component={Link} onClick={()=>{setIsopen(!isopen)}}  className="menuIcon">
                            <ListItemIcon>
                                <img src={OpenIcon} alt="Discover Icon" className="icon" />
                            </ListItemIcon>
                            {/* <ListItemText primary={("")} /> */}
                        </ListItemButton>
                    </ListItem>
                    <ListItem>
                        <ListItemButton component={Link} to="#">
                            <ListItemIcon>
                                <img src={DiscoverIcon} alt="Discover Icon" className="icon" />
                            </ListItemIcon>
                            <ListItemText primary={("Discover")} />
                        </ListItemButton>
                    </ListItem>
                    <Divider />
                    <ListItem>
                        <ListItemButton component={Link} to="#">
                            <ListItemIcon>
                               <img src={LeaderIcon} alt="Discover Icon" className="icon" />
                            </ListItemIcon>
                            <ListItemText primary={("Leader Board")} />
                        </ListItemButton>
                    </ListItem>
                     <Divider />
                    <ListItem>
                        <ListItemButton component={Link} to="#">
                            <ListItemIcon>
                               <img src={ProfileIcon} alt="Discover Icon" className="icon" />
                            </ListItemIcon>
                            <ListItemText primary={("Profile")} />
                        </ListItemButton>
                    </ListItem>
                     <Divider />
                    <ListItem>
                        <ListItemButton component={Link} to="#">
                            <ListItemIcon>
                               <img src={PremiumIcon} alt="Discover Icon" className="icon" />
                            </ListItemIcon>
                            <ListItemText primary={("Premium")} />
                        </ListItemButton>
                    </ListItem>
                     <Divider />
                    <ListItem>
                        <ListItemButton component={Link} to="#">
                            <ListItemIcon>
                               <img src={AffiliateIcon} alt="Discover Icon" className="icon" />
                            </ListItemIcon>
                            <ListItemText primary={("Affiliate")} />
                        </ListItemButton>
                    </ListItem>
                </List>
            </nav>
        </Box>
    );
}
export default ChatLeftNav;