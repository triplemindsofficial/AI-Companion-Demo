import {useState, useEffect, useRef} from 'react';
import HeaderChat from '../../Common/HeaderChat';
import { Grid, Container, Button } from "@mui/material";
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import SearchIcon from '@mui/icons-material/Search';
import ProfilePic from "../../Common/Assets/imgs/userProfile.png";
import Typography from '@mui/material/Typography';
import ChatBg from '../../Common/Assets/imgs/chatBg.png';
import UserMsgDeliverIcon from '../../Common/Assets/imgs/usermsg-delivedIcon.png';
import SelfMsgDeliverIcon from '../../Common/Assets/imgs/selfMsgDeliverIcon.png';
import SmileyIcon from '../../Common/Assets/imgs/smiley.png';
import ArrowUpIcon from '../../Common/Assets/imgs/arrowUpIcon.png';
import MicroPhoneIcon from '../../Common/Assets/imgs/microphoneIcon.png';
import VideoIcon from '../../Common/Assets/imgs/videoIcon.png';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Gallery from './Gallery';
import ChatLeftNav from '../../Common/ChatLeftNav';
import {useAppSelector, useAppDispatch} from '../../Hooks';
import axios from "axios";
import { request, success, failure } from '../../Reducers/ChatBot';



function Chat() {
  const dispatch = useAppDispatch();
  const islogin = useAppSelector((state) => state.auth.isAuthenticated);
  const token = useAppSelector((state) => state.auth.token);
  const isLoading = useAppSelector((state) => state.chatBot.loading);

  const [value, setValue] = useState('1');
  const inputRef =  useRef(null);
  const URL = process.env.REACT_APP_API_URL;

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [suggestion, setSuggestion] = useState(false);
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([]);

  const handleChat = (e) => {
    e.preventDefault();
    setChatHistory([...chatHistory, {user:0, message: message}]);
    const chatHistoryLocal = JSON.parse(localStorage.getItem('chatHistory')) || [];
    localStorage.setItem('chatHistory', JSON.stringify([...chatHistoryLocal, {user:0, message: message}]));
    chatBotreply();
    setMessage('');
  }
  const chatBotreply = () => {
    dispatch(request());
    const msgBody = {
      title: "Chat request",
      session_id: "session123",
      user_query: message,
      character_id: 1,
      role: "system",
      content_type: "text"
    };
    setTimeout( async() => {
      console.log("token", `Bearer ${token}`);
     try {
        const response = await axios.post(`${URL}/chats`, msgBody, {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
          withCredentials: false 
        });

        console.log('Response:', response.data.chat_response);
        const botmessage = response.data.chat_response;
        const botReply = {user:1, message: botmessage};
        setChatHistory((prev) => [...prev, botReply]);
        const chatHistoryLocal = JSON.parse(localStorage.getItem('chatHistory')) || [];
        localStorage.setItem('chatHistory', JSON.stringify([...chatHistoryLocal, botReply]));
        const data = JSON.stringify([...chatHistoryLocal, botReply])
        dispatch(success({data}));
      } catch (error) {
        console.error('Error:', error);
      }

    
      console.log("chatHistory", chatHistory);
      
    }, 1000);
  }

  const getCurrentTime12Hour = () => {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'

    const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
    return `${hours}:${formattedMinutes} ${ampm}`;
  };

  // Usage in a React component
  function CurrentTime() {
    return getCurrentTime12Hour();

  }

  useEffect(() => {
    // Scroll to the element when component mounts
    if (inputRef.current) {
        inputRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }, []);


  useEffect(() => {
    inputRef.current &&inputRef.current.focus();
  },[chatHistory]);

  console.log("chatHistory", chatHistory);

  return (
    <div className="chat-page">
        <HeaderChat />
        <ChatLeftNav/>
        <div className="chat-content">
          <Container className="containerchat" maxWidth="flase" spacing={0}>
            <Grid container spacing={0}>
              <Grid size={{xs:12, md:3}} className="left-side">
                <FormControl sx={{ m: 1, width: '250px' }} variant="outlined" className='search-box'>
                  <InputLabel htmlFor="outlined-adornment-password">Search or start new chat</InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-password"
                    type={""}
                    endAdornment={
                      <InputAdornment position="end" value={""}>
                        <IconButton
                          aria-label=""
                          onClick={(e) => {console.log(e)}}
                          onMouseDown=""
                          onMouseUp=""
                          edge="end"
                        >
                          <SearchIcon />
                        </IconButton>
                      </InputAdornment>
                    }
                    label=""
                  />
                </FormControl>
                <Typography component="div">
                  <p className='status'>Status</p>
                  <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }} className="activeUsers">
                    <Typography sx={{ minWidth:60 }} component={"div"}>
                      <Box sx={{ width: '48px', height: '48px', borderRadius:'100px'}} className="usersList">
                          <img src={ProfilePic} alt="usePic" className='onlineUser' />
                          Joya
                      </Box>
                    </Typography>
                    <Typography sx={{ minWidth:60 }} component={"div"}>
                      <Box sx={{ width: '48px', height: '48px', borderRadius:'100px'}} className="usersList">
                          <img src={ProfilePic} alt="usePic" className='onlineUser' />
                          Alia
                      </Box>
                    </Typography>
                    <Typography sx={{ minWidth:60 }} component={"div"}>
                      <Box sx={{ width: '48px', height: '48px', borderRadius:'100px'}} className="usersList">
                          <img src={ProfilePic} alt="usePic" className='onlineUser' />
                          Joya
                      </Box>
                    </Typography>
                    <Typography sx={{ minWidth:60 }} component={"div"}>
                      <Box sx={{ width: '48px', height: '48px', borderRadius:'100px'}} className="usersList">
                          <img src={ProfilePic} alt="usePic" className='onlineUser' />
                          Alia
                      </Box>
                    </Typography>
                    <Typography sx={{ minWidth:60 }} component={"div"}>
                      <Box sx={{ width: '48px', height: '48px', borderRadius:'100px'}} className="usersList">
                          <img src={ProfilePic} alt="usePic" className='onlineUser' />
                          Joya
                      </Box>
                    </Typography>
                    <Typography sx={{ minWidth:60 }} component={"div"}>
                      <Box sx={{ width: '48px', height: '48px', borderRadius:'100px'}} className="usersList">
                          <img src={ProfilePic} alt="usePic" className='onlineUser' />
                          Joya
                      </Box>
                    </Typography>
                  
                  </Box>
                </Typography>

                <Box sx={{ width: '100%', typography: 'body1' }} className="usersTab">
                  <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                      <TabList onChange={handleChange} aria-label="lab API tabs example">
                        <Tab label="ALL CHATS" value="1" />
                        <Tab label="PREVIOUS CHATS" value="2" />
                      </TabList>
                    </Box>
                    <TabPanel value="1" className='tabBody'>
                      <Grid size={{xs:12}} className="userProfile">
                          <Box sx={{ width: '90px', height: '62px', borderRadius:'100px'}} className="profilePic">
                              <img src={ProfilePic} alt="usePic" className='onlineUser' />
                              <span className="status"></span>
                          </Box>
                          <div className='info'>Zilan<small>Hey, It has been a long time to see you...</small></div>
                          <div className='timeStamp'>01:10 AM</div>
                      </Grid>
                      <Grid size={{xs:12}} className="userProfile">
                          <Box sx={{ width: '90px', height: '62px', borderRadius:'100px'}} className="profilePic">
                              <img src={ProfilePic} alt="usePic" className='onlineUser' />
                          </Box>
                          <div className='info'>Zilan<small>Thank you very much, I am wai ...</small></div>
                          <div className='timeStamp'>01:10 AM</div>
                      </Grid>
                      <Grid size={{xs:12}} className="userProfile">
                          <Box sx={{ width: '90px', height: '62px', borderRadius:'100px'}} className="profilePic">
                              <img src={ProfilePic} alt="usePic" className='onlineUser' />
                          </Box>
                          <div className='info'>Zilan<small>Thank you very much, I am wai ...</small></div>
                          <div className='timeStamp'>01:10 AM</div>
                      </Grid>
                      <Grid size={{xs:12}} className="userProfile">
                          <Box sx={{ width: '90px', height: '62px', borderRadius:'100px'}} className="profilePic">
                              <img src={ProfilePic} alt="usePic" className='onlineUser' />
                              <span className="status"></span>
                          </Box>
                          <div className='info'>Zilan<small>Thank you very much, I am wai ...</small></div>
                          <div className='timeStamp'>01:10 AM</div>
                      </Grid>
                      <Grid size={{xs:12}} className="userProfile">
                          <Box sx={{ width: '90px', height: '62px', borderRadius:'100px'}} className="profilePic">
                              <img src={ProfilePic} alt="usePic" className='onlineUser' />
                          </Box>
                          <div className='info'>Zilan<small>Thank you very much, I am wai ...</small></div>
                          <div className='timeStamp'>01:10 AM</div>
                      </Grid>
                      <Grid size={{xs:12}} className="userProfile">
                          <Box sx={{ width: '90px', height: '62px', borderRadius:'100px'}} className="profilePic">
                              <img src={ProfilePic} alt="usePic" className='onlineUser' />
                          </Box>
                          <div className='info'>Zilan<small>Thank you very much, I am wai ...</small></div>
                          <div className='timeStamp'>01:10 AM</div>
                      </Grid>
                    </TabPanel>
                    <TabPanel value="2" className='tabBody'>

                      <Grid size={{xs:12}} className="userProfile">
                          <Box sx={{ width: '90px', height: '62px', borderRadius:'100px'}} className="profilePic">
                              <img src={ProfilePic} alt="usePic" className='onlineUser' />
                          </Box>
                          <div className='info'>Zilan<small>Hey, It has been a long time to see you...</small></div>
                          <div className='timeStamp'>01:10 AM</div>
                      </Grid>
                      <Grid size={{xs:12}} className="userProfile">
                          <Box sx={{ width: '90px', height: '62px', borderRadius:'100px'}} className="profilePic">
                              <img src={ProfilePic} alt="usePic" className='onlineUser' />
                              <span className="status"></span>
                          </Box>
                          <div className='info'>Zilan<small>Thank you very much, I am wai ...</small></div>
                          <div className='timeStamp'>01:10 AM</div>
                      </Grid>
                    </TabPanel>
                  </TabContext>
                </Box>
              </Grid>
              <Grid size={{xs:12, md:6}} className="middle" style={{backgroundImage: `URL(${ChatBg})`}}>
                 {islogin ?
                 <>
                <Typography component={"div"} className='chatWindow'>
                  {chatHistory.length > 0 && chatHistory.map((chat, index) => (
                    <div key={index} className={chat.user === 0 ? 'userMsg msg' : 'self msg'} ref={index === chatHistory.length - 1 ? inputRef : null}>
                      {chat.message} 
                      <img src={chat.user === 0 ? UserMsgDeliverIcon : SelfMsgDeliverIcon} className='deliverIcon' alt='icon'/>
                      <small className='time'>{CurrentTime()}</small>
                    </div>
                  ))} 
                  {isLoading && <em>Writing...</em>}

                    
                </Typography>
                <Typography component={"div"} className="chatWriteBox">
                    <Grid container spacing={0} className="wrapper">
                      <Grid size={{xs:10}} className="inputBox">
                        <div className='inputWapper'>
                          <span className='smalies'>
                            <img src={SmileyIcon}/>
                          </span>
                          <input type="text" className='input' placeholder='Type a message'  value={message} onChange={(e)=>{setMessage(e.target.value)}}
                            onKeyDown={(e) => {if (e.key === 'Enter') handleChat(e)}}/>
                          <span className='askBtn' onClick={()=>{setSuggestion(!suggestion)}}>
                            <img src={ArrowUpIcon}/> Ask
                          </span>
                        </div>
                        { suggestion &&
                          <div className='suggestion'>
                            <ul>
                              <li>Show Me...</li>
                              <li>Send Me...</li>
                              <li>Can I See...</li>
                            </ul>
                          </div>
                        }
                      </Grid>
                      <Grid size={{xs:2}} className="actions">
                        <Link className='microPhone'>
                          <div className='icon recording'>
                            <img src={MicroPhoneIcon} alt='icon'/>
                          </div>
                        </Link>
                        <Link className='video'>
                          <div className='icon video'>
                            <img src={VideoIcon} alt='icon'/>
                          </div>
                        </Link>
                      </Grid>
                    </Grid>
                </Typography>
                </>
                :
                  <div className='loginPrompt'>
                    <p>Please login to open the chat window.</p>
                  </div>
                  }
                
              </Grid>
              <Grid size={{xs:12, md:3}} className="right-side">
                <Gallery/>
              </Grid>
            </Grid>
          </Container>
        </div>
        {/* <Footer /> */}
    </div>
  )
}
export default Chat;