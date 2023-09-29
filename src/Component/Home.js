import React, { useEffect } from 'react'

import axios from 'axios'
import { AppBar, Avatar, Box, Card, CardContent, CardMedia, Stack, Typography, styled} from '@mui/material'
import TempleHinduIcon from '@mui/icons-material/TempleHindu';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import { useNavigate} from 'react-router-dom'


const ContainerBox = styled('div')(({theme})=>({
    width:"80%",
    display:"grid",
    margin:"20px auto",
    border:"0.2px solid pink",
    gridTemplateRows:"1fr",
    gridTemplateColumns:"1fr 1fr 1fr",
    justifyContent:"center",
    alignItems:"center",
    textAlign:"center",
    gap:"20px",
    padding:"20px",
    [theme.breakpoints.down('sm')]:{
        backgroundColor:"pink",
        gridTemplateColumns:"1fr"

    }
    
}))

export const Home =()=> {

    const navigate = useNavigate()



  useEffect(()=>{
    axios.get('https://opentdb.com/api.php?amount=10&category=18&type=multiple').then((res)=>{
      console.log(res.data)
    }).catch((err)=>{
      console.log(err)
    })

  },[])

  const handleQuiz = ()=>{
    navigate("/quiz")
  }
    
  return (
    <>
    <Box sx={{width:"100vw"}}>
        <AppBar position="fixed" open={true} sx={{backgroundColor:"#27005D",color:"white", width:"100%", height:"80px", display:"flex", flexDirection:"row", justifyContent:"space-between", alignItems:"center", padding:"20px"}}>
            <Typography variant='h5' >DOTIX</Typography>
            <Stack direction={'row'} sx={{alignItems:"center", justifyContent:"space-between", gap:"10px"}}>
            <Typography>Current User</Typography>
            <Avatar></Avatar>
            </Stack>

        </AppBar>

        <Box sx={{pt:"100px", width:"80%", margin:"20px auto"}}>
            <Typography  variant='h4'  sx={{textAlign:"center"}}> Quiz
                Category
            </Typography>
            <ContainerBox>
                <Card sx={{padding:"20px"}} onClick={()=>handleQuiz()}>
                    <CardMedia> 
                        <TempleHinduIcon/>
                    </CardMedia>
                    <CardContent>
                        <Typography>History</Typography>
                    </CardContent>

                </Card>

                <Card sx={{padding:"20px"}}>
                    <CardMedia> 
                        <RocketLaunchIcon/>
                    </CardMedia>
                    <CardContent>
                        <Typography>Space</Typography>
                    </CardContent>

                </Card>

                <Card sx={{padding:"20px"}}>
                    <CardMedia> 
                        <SportsSoccerIcon/>
                    </CardMedia>
                    <CardContent>
                        <Typography>Sports</Typography>
                    </CardContent>

                </Card>

            </ContainerBox>


        </Box>

    </Box>
    </>
  );
}


