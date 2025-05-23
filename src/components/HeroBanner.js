import React from 'react';
import {Box, Stack, Typography, Button} from '@mui/material';
import HeroBannerImage from '../assets/images/banner.png';

const HeroBanner = () => {
  return (
    <Box sx={{
      mt:{lg:'120px', xs: '70px'}, 
      ml:{sm:'250px'}
      }} position="relaive" p="20px">
      <Typography color="#FF2625" fontWeight="600" fontSize="26px">
        Fitness Club
      </Typography>

      <Typography fontWeight={700} sx={{fontSize: {lg: '44px' ,xs: '40px'}}} mb='20px' mt='30px'>
        Sweat, Smile <br/>and Repeat
      </Typography>

      <Typography fontSize='24px' lineHeight="35px" mb={3}>
        Check out the most effective exercises
      </Typography>

      <Button sx={{backgroundColor:'#FF2625', padding:'10px'}} variant='contained' color='error' href='#exercises'>Explore Exercises</Button>

      <Typography fontWeight={600} color='#FF2625' sx={{opacity:0.1,display: {lg:'block', xs:'none'}}} fontSize='200px'>
        Exercise
      </Typography>

      <img src={HeroBannerImage} alt='banner' className='hero-banner-img'/>
    </Box>
  )
}

export default HeroBanner