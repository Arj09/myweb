import React, { useEffect } from 'react'

import axios from 'axios'
import { Box, Stack, Typography, styled } from '@mui/material'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import VisibilityIcon from '@mui/icons-material/Visibility';
import HomeIcon from '@mui/icons-material/Home';
import ShareIcon from '@mui/icons-material/Share';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';

import ReplayIcon from '@mui/icons-material/Replay';
import { useNavigate } from 'react-router-dom';


const ContainerBox = styled('div')(({theme})=>({
  width:"80%",
  display:"grid",
  margin:"20px auto",
  border:"0.2px solid pink",
  gridTemplateRows:"1fr",
  gridTemplateColumns:"1fr 1fr 1fr 1fr",
  alignItems:"center",
  textAlign:"center",
  gap:"20px",
  padding:"20px",
  backgroundColor:"white",
  justifyContent:"space-between",
  [theme.breakpoints.down('md')]:{
    
    gridTemplateColumns:"1fr 1fr "

},
[theme.breakpoints.down('sm')]:{
    
  gridTemplateColumns:"1fr"

}
  
  
}))




const ContainerBox1 = styled('div')(({theme})=>({
  width:"80%",
  display:"grid",
  margin:"20px auto",
  border:"0.2px solid pink",
  gridTemplateRows:"1fr",
  gridTemplateColumns:"1fr 1fr 1fr",
  alignItems:"center",
  textAlign:"center",
  gap:"30px",
  padding:"20px",
  backgroundColor:"white",
  justifyContent:"space-between",
  [theme.breakpoints.down('md')]:{
    backgroundColor:"pink",
    gridTemplateColumns:"1fr 1fr"

},
[theme.breakpoints.down('sm')]:{
 
  gridTemplateColumns:"1fr 1fr"

}
  
  
}))
export const Dashboard =()=> {

  const navigate = useNavigate()

  useEffect(()=>{
    axios.get('https://opentdb.com/api.php?amount=10&category=18&type=multiple').then((res)=>{
      console.log(res.data)
    }).catch((err)=>{
      console.log(err)
    })

  },[])

  const handleGoTO_Home = ()=>{
    navigate('/')
  }
    
  return (
    <>
    <Box sx={{width:"80vw", margin:"20px auto", border:"0.2px solid pink",backgroundColor:"pink"}}>
      
      <Box sx={{backgroundColor:"yellow", width:"100%", height:"300px",display:"flex", flexDirection:"row", justifyContent:"center", alignItems:"center"}}>
        
        <Stack direction={'column'} sx={{backgroundColor:"white", border:"0.2px solid white", width:"150px", height:"150px",  textAlign:"center", justifyContent:"center", alignItems:"center", borderRadius:"50%"}}>
          <Typography>Your Score</Typography>
          <Typography variant='h5'> 500 pt</Typography>

        </Stack>
      </Box>


      <ContainerBox>
        <Stack direction={'row'} sx={{textAlign:"center", alignItems:"center", justifyContent:"center"}} spacing={1}>
          <Stack direction={'row'}>
            <FiberManualRecordIcon sx={{color:"orange"}}/>
            <Typography>5</Typography>
          </Stack>
          <Typography>Completing</Typography>

        </Stack>

        <Stack direction={'row'} sx={{textAlign:"center", alignItems:"center", justifyContent:"center"}} spacing={1}>
          <Stack direction={'row'}>
            <FiberManualRecordIcon sx={{color:"orange"}}/>
            <Typography>5</Typography>
          </Stack>
          <Typography>Total Question</Typography>

        </Stack>

        <Stack direction={'row'} sx={{textAlign:"center", alignItems:"center", justifyContent:"center"}} spacing={1}>
          <Stack direction={'row'}>
            <FiberManualRecordIcon sx={{color:"green"}}/>
            <Typography>5</Typography>
          </Stack>
          <Typography>Corrct</Typography>

        </Stack>


        <Stack direction={'row'} sx={{textAlign:"center", alignItems:"center", justifyContent:"center"}} spacing={1}>
          <Stack direction={'row'}>
            <FiberManualRecordIcon sx={{color:"red"}}/>
            <Typography>5</Typography>
          </Stack>
          <Typography>Incorrct</Typography>

        </Stack>
      </ContainerBox>

      
      <ContainerBox1>
        <Stack direction={'column'}sx={{textAlign:"center", alignItems:"center", justifyContent:"center"}} spacing={1}>
          <ReplayIcon sx={{padding:"10px", borderRadius:"50%", backgroundColor:"orange", color:"white"}}/>
          <Typography>Play again</Typography>

        </Stack>
        <Stack direction={'column'}sx={{textAlign:"center", alignItems:"center", justifyContent:"center"}} spacing={1}>
          <VisibilityIcon sx={{padding:"10px", borderRadius:"50%", backgroundColor:"orange", color:"white"}}/>
          <Typography>Review answer</Typography>

        </Stack>

        <Stack direction={'column'}sx={{textAlign:"center", alignItems:"center", justifyContent:"center"}}  spacing={1}>
          <ShareIcon sx={{padding:"10px", borderRadius:"50%", backgroundColor:"orange", color:"white"}}/>
          <Typography>Share Score</Typography>

        </Stack>

        <Stack direction={'column'}sx={{textAlign:"center", alignItems:"center", justifyContent:"center"}} spacing={1}>
          <PictureAsPdfIcon sx={{padding:"10px", borderRadius:"50%", backgroundColor:"orange", color:"white"}}/>
          <Typography>Genarate PDF</Typography>

        </Stack>

        <Stack direction={'column'}sx={{textAlign:"center", alignItems:"center", justifyContent:"center"}} spacing={1}>
          <HomeIcon sx={{padding:"10px", borderRadius:"50%", backgroundColor:"orange", color:"white"}}/>
          <Typography sx={{cursor:'pointer'}} onClick={handleGoTO_Home}>Home</Typography>

        </Stack>

        <Stack direction={'column'}sx={{textAlign:"center", alignItems:"center", justifyContent:"center"}} spacing={1}>
          <SettingsSuggestIcon sx={{padding:"10px", borderRadius:"50%", backgroundColor:"orange", color:"white"}}/>
          <Typography>Leaderboard</Typography>

        </Stack>

        
        
      </ContainerBox1>






    </Box>

    </>
  );
}


