import React, { useEffect, useState } from 'react';
import Api from "../../api";
const Subjects = () => {

    const [data,setData] = useState(null)

    useEffect(()=>{
        const data  = Api.getSubjects().then((res)=>{
            setData(res);
        })

    })

    return data ?  ( 
        <h1>Subjects</h1>

     ):(<p>Hello World</p>);
}
 
export default Subjects;