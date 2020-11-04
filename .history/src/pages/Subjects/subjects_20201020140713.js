import React, { useEffect, useState } from 'react';
import Api from "../../api";
const Subjects = () => {

    const [data,setData] = useState(null)

    useEffect(()=>{
        const data  = await Api.getSubjects().then((res)=>{
            
        })

    })

    return data ?  ( 
        <h1>Subjects</h1>
     ):(<p>Hello World</p>);
}
 
export default Subjects;