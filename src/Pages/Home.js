import React from "react";
import { Grid, Typography, Button, Link } from "@mui/material";
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import HeaderMain from "../Common/HeaderMain";
import HomeLeftNav from "../Common/HomeLeftNav";
import Footer from "../Common/Footer";
import HomeBanner from "../Common/Assets/imgs/bannerHome.png";
import FeaturedImg1 from "../Common/Assets/imgs/featuredImg1.png";
import FeaturedImg2 from "../Common/Assets/imgs/featuredImg2.png";
import FeaturedImg3 from "../Common/Assets/imgs/featuredImg3.png";
import ChatIcon from "../Common/Assets/imgs/chatIcon.svg";
import ImageIcon from "../Common/Assets/imgs/ImageIcon.svg";
import PornGeneratorImg from "../Common/Assets/imgs/pornGenrator.png";
import AipornMaker from "../Common/Assets/imgs/aipornMaker.png";
import Model1 from "../Common/Assets/imgs/model1.png";
import Model2 from "../Common/Assets/imgs/model2.png";
import Model3 from "../Common/Assets/imgs/model3.png";
import BlogImg_1 from "../Common/Assets/imgs/blogp1.png";
import BlogImg_2 from "../Common/Assets/imgs/blogp2.png";

function Home() {
  return (
    <div className="home">
        <HeaderMain />
        <Typography variant="div" component="div" className="subscription">
            <span className="txt">First Subscription</span>
            <span className="off">up to 60% off</span>
            <span className="timer">
                <span className="count">55<span>Min</span></span> : <span className="count">45<span>Sec</span></span>
            </span>
        </Typography>
        <Typography variant="div" component="div" className="home-content">
            <Grid container spacing={0}>
                <Grid size={{xs:12, md:2.5}} className="home-left-container">
                    <HomeLeftNav />
                </Grid>
                <Grid size={{xs:12, md:9.5}} className="home-right">
                    <img src={HomeBanner} alt="homebanner" className="home-banner" />
                    <h2 className="subHeading">Fulfill Your Fantasy with Our <span>AI Influencer Characters</span></h2>
                    <Grid container spacing={2} className="featuedPosts">
                        <Grid size={{xs:12, md:6, lg:3}} className="featuedBlock" style={{backgroundImage: `url(${FeaturedImg1})`}}>
                            <div className="featuredContent">
                                <h3 className="featuredTitle">Harper</h3>
                                <div className="featuredActions">
                                    <Button variant="contained" className="btn featuredBtn chatBtn" href="#">
                                        <img src={ChatIcon} className="featuredIcon" alt="icon" /> Chat
                                    </Button>
                                    <Button variant="contained" className="btn featuredBtn createBtn" href="#">
                                        <img src={ImageIcon} className="featuredIcon" alt="icon" /> Create
                                    </Button>
                                </div>
                            </div>
                        </Grid>

                        <Grid size={{xs:12, md:6, lg:3}} className="featuedBlock" style={{backgroundImage: `url(${FeaturedImg1})`}}>
                            <div className="featuredContent">
                                <h3 className="featuredTitle">Harper</h3>
                                <div className="featuredActions">
                                    <Button variant="contained" className="btn featuredBtn chatBtn" href="#">
                                        <img src={ChatIcon} className="featuredIcon" alt="icon" /> Chat
                                    </Button>
                                    <Button variant="contained" className="btn featuredBtn createBtn" href="#">
                                        <img src={ImageIcon} className="featuredIcon" alt="icon" /> Create
                                    </Button>
                                </div>
                            </div>
                        </Grid>

                        <Grid size={{xs:12, md:6, lg:3}} className="featuedBlock" style={{backgroundImage: `url(${FeaturedImg2})`}}>
                            <div className="featuredContent">
                                <h3 className="featuredTitle">Harper</h3>
                                <div className="featuredActions">
                                    <Button variant="contained" className="btn featuredBtn chatBtn" href="#">
                                        <img src={ChatIcon} className="featuredIcon" alt="icon" /> Chat
                                    </Button>
                                    <Button variant="contained" className="btn featuredBtn createBtn" href="#">
                                        <img src={ImageIcon} className="featuredIcon" alt="icon" /> Create
                                    </Button>
                                </div>
                            </div>
                        </Grid>

                        <Grid size={{xs:12, md:6, lg:3}} className="featuedBlock" style={{backgroundImage: `url(${FeaturedImg1})`}}>
                            <div className="featuredContent">
                                <h3 className="featuredTitle">Harper</h3>
                                <div className="featuredActions">
                                    <Button variant="contained" className="btn featuredBtn chatBtn" href="#">
                                        <img src={ChatIcon} className="featuredIcon" alt="icon" /> Chat
                                    </Button>
                                    <Button variant="contained" className="btn featuredBtn createBtn" href="#">
                                        <img src={ImageIcon} className="featuredIcon" alt="icon" /> Create
                                    </Button>
                                </div>
                            </div>
                        </Grid>
                        <Grid size={{xs:12, md:6, lg:3}} className="featuedBlock" style={{backgroundImage: `url(${FeaturedImg1})`}}>
                            <div className="featuredContent">
                                <h3 className="featuredTitle">Harper</h3>
                                <div className="featuredActions">
                                    <Button variant="contained" className="btn featuredBtn chatBtn" href="#">
                                        <img src={ChatIcon} className="featuredIcon" alt="icon" /> Chat
                                    </Button>
                                    <Button variant="contained" className="btn featuredBtn createBtn" href="#">
                                        <img src={ImageIcon} className="featuredIcon" alt="icon" /> Create
                                    </Button>
                                </div>
                            </div>
                        </Grid>

                        <Grid size={{xs:12, md:6, lg:3}} className="featuedBlock" style={{backgroundImage: `url(${FeaturedImg3})`}}>
                            <div className="featuredContent">
                                <h3 className="featuredTitle">Harper</h3>
                                <div className="featuredActions">
                                    <Button variant="contained" className="btn featuredBtn chatBtn" href="#">
                                        <img src={ChatIcon} className="featuredIcon" alt="icon" /> Chat
                                    </Button>
                                    <Button variant="contained" className="btn featuredBtn createBtn" href="#">
                                        <img src={ImageIcon} className="featuredIcon" alt="icon" /> Create
                                    </Button>
                                </div>
                            </div>
                        </Grid>

                        <Grid size={{xs:12, md:6, lg:3}} className="featuedBlock" style={{backgroundImage: `url(${FeaturedImg2})`}}>
                            <div className="featuredContent">
                                <h3 className="featuredTitle">Harper</h3>
                                <div className="featuredActions">
                                    <Button variant="contained" className="btn featuredBtn chatBtn" href="#">
                                        <img src={ChatIcon} className="featuredIcon" alt="icon" /> Chat
                                    </Button>
                                    <Button variant="contained" className="btn featuredBtn createBtn" href="#">
                                        <img src={ImageIcon} className="featuredIcon" alt="icon" /> Create
                                    </Button>
                                </div>
                            </div>
                        </Grid>

                        <Grid size={{xs:12, md:6, lg:3}} className="featuedBlock" style={{backgroundImage: `url(${FeaturedImg1})`}}>
                            <div className="featuredContent">
                                <h3 className="featuredTitle">Harper</h3>
                                <div className="featuredActions">
                                    <Button variant="contained" className="btn featuredBtn chatBtn" href="#">
                                        <img src={ChatIcon} className="featuredIcon" alt="icon" /> Chat
                                    </Button>
                                    <Button variant="contained" className="btn featuredBtn createBtn" href="#">
                                        <img src={ImageIcon} className="featuredIcon" alt="icon" /> Create
                                    </Button>
                                </div>
                            </div>
                        </Grid>
                    </Grid>

                    <Grid container spacing={2} className="infoSect lftImg">
                        <Grid size={{xs:12, md:4}} className="featuedBlock">
                            <Link href="#"><div className="featuredImage" style={{backgroundImage: `url(${PornGeneratorImg})`}}></div></Link>
                        </Grid>
                        <Grid size={{xs:12, md:6}} className="desc">
                            <h2><Link href="#">Watch Erotic Visuals with the <span>Best AI Porn Generator</span></Link></h2>
                            <p>Lorem Ipsum has been the industry's standard dummy text ever since the when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived  not only five centuries, but also the leap into electronic typesetting, remaining essentially </p>
                            <Button variant="contained" className="btn tryBtn" href="#">
                                Try for Free
                            </Button>
                        </Grid>
                        <img src={Model1} alt="infoImage" className="hangImg" />
                    </Grid>

                    <Grid container spacing={2} className="infoSect rgtImg">
                        <img src={Model2} alt="infoImage" className="hangImg" />
                        <Grid size={{xs:12, md:8}} className="desc">
                            <h2><Link href="#">From Messy Blowjobs to Cumshot Generate <span>Free AI Porn XXX Anytime</span></Link></h2>
                            <p>Lorem Ipsum has been the industry's standard dummy text ever since the when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived  not only five centuries, but also the leap into electronic typesetting, remaining essentially </p>
                            <Button variant="contained" className="btn tryBtn" href="#">
                                Try for Free
                            </Button>
                        </Grid>
                        <Grid size={{xs:12, md:4}} className="featuedBlock">
                            <Link href="#"><div className="featuredImage" style={{backgroundImage: `url(${PornGeneratorImg})`}}></div></Link>
                        </Grid>
                    </Grid>

                    <Grid container spacing={2} className="infoSect lftImg">
                        <Grid size={{xs:12, md:4}} className="featuedBlock">
                            <Link href="#"><div className="featuredImage" style={{backgroundImage: `url(${AipornMaker})`}}></div></Link>
                        </Grid>
                        <Grid size={{xs:12, md:6}} className="desc">
                            <h2><Link href="#">Turn Your Nasty Imagination to Reality with <span>Best AI Porn Generator</span></Link></h2>
                            <p>Lorem Ipsum has been the industry's standard dummy text ever since the when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived  not only five centuries, but also the leap into electronic typesetting, remaining essentially </p>
                            <Button variant="contained" className="btn tryBtn" href="#">
                                Try for Free
                            </Button>
                        </Grid>
                        <img src={Model3} alt="infoImage" className="hangImg" />
                    </Grid>

                    <Grid container spacing={3} className="homeBlogs">
                        <Grid size={{xs:12, md:6}} className="blogBlock">
                            <Grid container spacing={{md:0, lg:4}} className="outerBlog">
                                <Link href="/"><Grid size={{md:12, lg:5}} className="featuredImg" style={{backgroundImage: `url(${BlogImg_1})`}}></Grid></Link>
                                <Grid size={{md:12, lg:7}} className="desc">
                                    <h2><Link href="#">Lorem Ipsum has been the industry's standard dumm</Link></h2>
                                    <h4>Lorem Ipsum has been the industry's standard dummy text ever since </h4>
                                    <p>Lorem Ipsum has been the industry's standard dummy text ever since the when an unknown printer took a galley of type and scrambled it to makea type specimen book. It has survived  not only five centuries, but also the leap into electronic typesetting</p>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid size={{xs:12, md:6}} className="blogBlock">
                            <Grid container spacing={{md:0, lg:4}} className="outerBlog">
                                <Link href="/"><Grid size={{md:12, lg:5}} className="featuredImg" style={{backgroundImage: `url(${BlogImg_1})`}}></Grid></Link>
                                <Grid size={{md:12, lg:7}} className="desc">
                                    <h2><Link href="#">Lorem Ipsum has been the industry's standard dumm</Link></h2>
                                    <h4>Lorem Ipsum has been the industry's standard dummy text ever since </h4>
                                    <p>Lorem Ipsum has been the industry's standard dummy text ever since the when an unknown printer took a galley of type and scrambled it to makea type specimen book. It has survived  not only five centuries, but also the leap into electronic typesetting</p>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid size={{xs:12, md:6}} className="blogBlock">
                            <Grid container spacing={{md:0, lg:4}} className="outerBlog">
                                <Link href="/"><Grid size={{md:12, lg:5}} className="featuredImg" style={{backgroundImage: `url(${BlogImg_2})`}}></Grid></Link>
                                <Grid size={{md:12, lg:7}} className="desc">
                                    <h2><Link href="#">Lorem Ipsum has been the industry's standard dumm</Link></h2>
                                    <h4>Lorem Ipsum has been the industry's standard dummy text ever since </h4>
                                    <p>Lorem Ipsum has been the industry's standard dummy text ever since the when an unknown printer took a galley of type and scrambled it to makea type specimen book. It has survived  not only five centuries, but also the leap into electronic typesetting</p>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid size={{xs:12, md:6}} className="blogBlock">
                            <Grid container spacing={{md:0, lg:4}} className="outerBlog">
                                <Link href="/"><Grid size={{md:12, lg:5}} className="featuredImg" style={{backgroundImage: `url(${BlogImg_1})`}}></Grid></Link>
                                <Grid size={{md:12, lg:7}} className="desc">
                                    <h2><Link href="#">Lorem Ipsum has been the industry's standard dumm</Link></h2>
                                    <h4>Lorem Ipsum has been the industry's standard dummy text ever since </h4>
                                    <p>Lorem Ipsum has been the industry's standard dummy text ever since the when an unknown printer took a galley of type and scrambled it to makea type specimen book. It has survived  not only five centuries, but also the leap into electronic typesetting</p>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid size={{xs:12, md:6}} className="blogBlock">
                            <Grid container spacing={{md:0, lg:4}} className="outerBlog">
                                <Link href="/"><Grid size={{md:12, lg:5}} className="featuredImg" style={{backgroundImage: `url(${BlogImg_1})`}}></Grid></Link>
                                <Grid size={{md:12, lg:7}} className="desc">
                                    <h2><Link href="#">Lorem Ipsum has been the industry's standard dumm</Link></h2>
                                    <h4>Lorem Ipsum has been the industry's standard dummy text ever since </h4>
                                    <p>Lorem Ipsum has been the industry's standard dummy text ever since the when an unknown printer took a galley of type and scrambled it to makea type specimen book. It has survived  not only five centuries, but also the leap into electronic typesetting</p>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid size={{xs:12, md:6}} className="blogBlock">
                            <Grid container spacing={{md:0, lg:4}} className="outerBlog">
                                <Link href="/"><Grid size={{md:12, lg:5}} className="featuredImg" style={{backgroundImage: `url(${BlogImg_2})`}}></Grid></Link>
                                <Grid size={{md:12, lg:7}} className="desc">
                                    <h2><Link href="#">Lorem Ipsum has been the industry's standard dumm</Link></h2>
                                    <h4>Lorem Ipsum has been the industry's standard dummy text ever since </h4>
                                    <p>Lorem Ipsum has been the industry's standard dummy text ever since the when an unknown printer took a galley of type and scrambled it to makea type specimen book. It has survived  not only five centuries, but also the leap into electronic typesetting</p>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid container spacing={5} className="faqSection">
                         <Grid size={{xs:12}}>
                            <h2 className="subHeading"><span>Frequently Asked Questions</span></h2>
                         </Grid>
                        <Grid size={{xs:12, md:6}} className="faqBlock">
                            <Accordion>
                                <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                                >
                                <Typography className="heading">What are the best AI porn apps?</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                <Typography>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                    sit amet blandit leo lobortis eget.
                                </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </Grid>
                        <Grid size={{xs:12, md:6}} className="faqBlock">
                            <Accordion>
                                <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                                >
                                <Typography className="heading">What are the best AI porn apps?</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                <Typography>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                    sit amet blandit leo lobortis eget.
                                </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </Grid>
                        <Grid size={{xs:12, md:6}} className="faqBlock">
                            <Accordion>
                                <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                                >
                                <Typography className="heading">What are the best AI porn apps?</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                <Typography>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                    sit amet blandit leo lobortis eget.
                                </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </Grid>
                        <Grid size={{xs:12, md:6}} className="faqBlock">
                            <Accordion>
                                <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                                >
                                <Typography className="heading">What are the best AI porn apps?</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                <Typography>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                    sit amet blandit leo lobortis eget.
                                </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </Grid>
                        <Grid size={{xs:12, md:6}} className="faqBlock">
                            <Accordion>
                                <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                                >
                                <Typography className="heading">What are the best AI porn apps?</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                <Typography>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                    sit amet blandit leo lobortis eget.
                                </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </Grid>
                        <Grid size={{xs:12, md:6}} className="faqBlock">
                            <Accordion>
                                <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                                >
                                <Typography className="heading">What are the best AI porn apps?</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                <Typography>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                    sit amet blandit leo lobortis eget.
                                </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </Grid>
                        <Grid size={{xs:12, md:6}} className="faqBlock">
                            <Accordion>
                                <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                                >
                                <Typography className="heading">What are the best AI porn apps?</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                <Typography>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                    sit amet blandit leo lobortis eget.
                                </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </Grid>
                        <Grid size={{xs:12, md:6}} className="faqBlock">
                            <Accordion>
                                <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                                >
                                <Typography className="heading">What are the best AI porn apps?</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                <Typography>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                    sit amet blandit leo lobortis eget.
                                </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </Grid>
                        <Grid size={{xs:12, md:6}} className="faqBlock">
                            <Accordion>
                                <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                                >
                                <Typography className="heading">What are the best AI porn apps?</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                <Typography>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                    sit amet blandit leo lobortis eget.
                                </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </Grid>
                        <Grid size={{xs:12, md:6}} className="faqBlock">
                            <Accordion>
                                <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                                >
                                <Typography className="heading">What are the best AI porn apps?</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                <Typography>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                    sit amet blandit leo lobortis eget.
                                </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </Grid>
                        <Grid size={{xs:12, md:6}} className="faqBlock">
                            <Accordion>
                                <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                                >
                                <Typography className="heading">What are the best AI porn apps?</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                <Typography>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                    sit amet blandit leo lobortis eget.
                                </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </Grid>
                        <Grid size={{xs:12, md:6}} className="faqBlock">
                            <Accordion>
                                <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                                >
                                <Typography className="heading">What are the best AI porn apps?</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                <Typography>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                    sit amet blandit leo lobortis eget.
                                </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Typography>
        <Footer />
    </div>
  );
}
export default Home;