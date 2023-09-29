import React, { useEffect, useState } from 'react'

import axios from 'axios'
import { Box, Button, Stack, Typography, styled } from '@mui/material'
import "./Main.css"

const Options = styled('div')(({theme})=>({
    width:"60%",
    display:"grid",
    margin:"20px auto",
    
    gridTemplateRows:"1fr",
    gridTemplateColumns:"1fr 1fr",
    justifyContent:"center",
    alignItems:"center",
    textAlign:"center",
    gap:"20px 40px",
    padding:"20px",
    [theme.breakpoints.down('sm')]:{
        backgroundColor:"pink",
        gridTemplateColumns:"1fr"

    }

}))

const Option = styled('text')(({theme})=>({
    padding:"10px 20px",
    border:"0.2px solid black",
    cursor:"pointer",
    '& .Box':{
      color:"red"
    }

    
    
}))




export const Quiz =()=> {

    const [count, setCount] = useState(0)
    const [question, setQuestion] = useState(0)
    const [data, setData]= useState([])
    const [finish, setFinish]= useState(false)

    useEffect(()=>{
        setTimeout(()=>{
            if(count == 60){
                if(question<9){
                  setQuestion(question=>question+1)
                }
                setCount(0)
            }
            else if(count<60){
              setCount(count=>count+1)
            }
        },[1000])
        
    }, [count])

    console.log(count)
    

  useEffect(()=>{
    axios.get('https://opentdb.com/api.php?amount=10&category=18&type=multiple').then((res)=>{
      console.log(res.data.results)
      setData(res.data.results)
    }).catch((err)=>{
      console.log(err)
    })

  },[])

  const handleAnswer = (ans)=>{
    if(ans == data[question]?.correct_answer){
      if(question<9){
        setQuestion(question=>question+1)
        setCount(0)
      }
      else{
        setFinish(true)
      }
      
    }
    else{
      if(question<9){
        setQuestion(question=>question+1)
        setCount(0)
      }
      else{
        setFinish(true)
      }
      

    }
  
  }

  
    
  return (
    <>
    <Box sx={{width:{xs:'80vw', md:"60vw"}, margin:"20px auto", border:"0.2px solid pink", display:"flex", pt:"50px",flexDirection:"column",mt:"80px"}}>
        <Box sx={{width:'90%', margin:"10px auto", display: finish ? 'none' : 'block'}}>
        <Typography sx={{textAlign:"center"}}>{` Time : ${count} Sec` }</Typography>
        <Typography sx={{padding:"10px 40px"}}>{`Question Level : ${data[question]?.difficulty}`}</Typography>
        <Typography sx={{padding:"10px 40px" }}>{`${question+1} . `}{data[question]?.question }</Typography>
        <Options>
            <Option   onClick={()=>handleAnswer(data[question]?.correct_answer)}>{`${data[question]?.correct_answer}`}</Option>
            {
              data[question]?.incorrect_answers.map((incorrect)=>{
                return(
                  <Option onClick={()=>handleAnswer(incorrect)}>{incorrect}</Option>
                )

              })

            }
            
           

        </Options>
        </Box>
        <Box sx={{display: finish ? 'flex' : 'none', justifyContent:"center", alignItems:"center", flexDirection:"column", margin:"20px auto"}}>
        

        <Button sx={{ padding:"10px 20px", mb:"20px", backgroundColor:"blue", color:"white", width:"300px", margin:"10px auto"}}>Submit</Button>
        </Box>
        



    </Box>

    </>
  );
}


