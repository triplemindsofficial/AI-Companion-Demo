import * as React from 'react';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import ImageGallery from "react-image-gallery";
import FeaturedImg1 from "../../Common/Assets/imgs/featuredImg1.png";
import InstaIcon from '../../Common/Assets/imgs/instaIcon.png';
import FIcon from '../../Common/Assets/imgs/fIcon.png';
import OFIcon from '../../Common/Assets/imgs/ofIcon.png';
import BookIcon from '../../Common/Assets/imgs/bookIcon.png';
import SwimmingIcon from '../../Common/Assets/imgs/swimmingIcon.png';
import DesignIcon from '../../Common/Assets/imgs/designingIcon.png';
import PhotographyIcon from '../../Common/Assets/imgs/photographyIcon.png';
import MusicIcon from '../../Common/Assets/imgs/musicIcon.png';
import "react-image-gallery/styles/css/image-gallery.css";

function Gallery () {
    const images = [
        {
            original: FeaturedImg1,
            thumbnail: FeaturedImg1,
            originalHeight: 505,
            originalWidth: 505,
            thumbnailHeight: 90,
            thumbnailWidth: 90 

        },
        {
            original: FeaturedImg1,
            thumbnail: FeaturedImg1,
            originalHeight: 505,
            originalWidth: 505,
            thumbnailHeight: 90,
            thumbnailWidth: 90
        },
        {
            original: FeaturedImg1,
            thumbnail: FeaturedImg1,
            originalHeight: 505,
            originalWidth: 505,
            thumbnailHeight: 90,
            thumbnailWidth: 90
        },
        {
            original: FeaturedImg1,
            thumbnail: FeaturedImg1,
            originalHeight: 505,
            originalWidth: 505,
            thumbnailHeight: 90,
            thumbnailWidth: 90 

        },
        {
            original: FeaturedImg1,
            thumbnail: FeaturedImg1,
            originalHeight: 505,
            originalWidth: 505,
            thumbnailHeight: 90,
            thumbnailWidth: 90
        },
        {
            original: FeaturedImg1,
            thumbnail: FeaturedImg1,
            originalHeight: 505,
            originalWidth: 505,
            thumbnailHeight: 90,
            thumbnailWidth: 90
        },
    ];
    return(
        <Typography component={"div"} className='outer'>
            <Typography className='gallery' component={"div"}>
                <ImageGallery items={images} />
                <Typography component={"div"} className='info'>
                    <h2>ZIlan Doe - <span>Age 27</span></h2>
                    <div className='socialMediaIcons'>
                        <Link href="#">
                            <img src={OFIcon} className='socilaIcon'></img>
                        </Link>
                        <Link href="#">
                            <img src={FIcon} className='socilaIcon'></img>
                        </Link>
                        <Link href="#">
                            <img src={InstaIcon} className='socilaIcon'></img>
                        </Link>
                    </div>
                </Typography>
                <h6>About Me</h6>
                <Typography component={"div"} className='hobies'>
                    <div className='item'><img src={BookIcon} /> Book Reading</div>
                    <div className='item'><img src={SwimmingIcon} /> Swimming</div>
                    <div className='item'><img src={DesignIcon} /> Design</div>
                    <div className='item'><img src={PhotographyIcon} /> Photography</div>
                    <div className='item'><img src={MusicIcon} /> Music</div>
                </Typography>
            </Typography>
        </Typography>
               
    )
}

export default Gallery;