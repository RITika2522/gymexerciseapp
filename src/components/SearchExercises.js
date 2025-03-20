import React,{useEffect, useState} from 'react';
import {Box, Button, Stack, TextField, Typography} from '@mui/material';


const SearchExercises = () => {
  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography fontWeight={700} sx={{fontSize: {lg: '44px', xs:'30px'}}} mb="30px" textAlign="center">
        Awesome exercises you <br />should know
      </Typography>
      <Box position='relative' mb="72px">
        <TextField
          height='76px'
        />
      </Box>
    </Stack>
  )
}

export default SearchExercises