import React, { useEffect } from 'react'

import axios from 'axios'

export const Dashboard =()=> {

  useEffect(()=>{
    axios.get('https://opentdb.com/api.php?amount=10&category=18&type=multiple').then((res)=>{
      console.log(res.data)
    }).catch((err)=>{
      console.log(err)
    })

  },[])
    
  return (
    <>

    </>
  );
}


