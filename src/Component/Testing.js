import axios from "axios";
import React, { useEffect, useState } from "react";

export const Testing = () =>{

    const [data, setData] = useState([])
    

    useEffect(()=>{

        axios.get('https://kv-varlu.vercel.app/api/v1/category/all').then((res)=>{
            console.log(res.data)
            setData(res.data.categories)
        }).catch((err)=>{
            console.log(err)
        })

    },[])

   

    
   

    



    return(
        <>

        {
            data.map((data)=>{
                return(
                    <ul>
                        <li>{data.name}</li>
                        <li>{data.status}</li>
                    </ul>
                )
            })
        }
        
        
        
        </>
    )
}